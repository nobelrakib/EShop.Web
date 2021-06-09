import { ToastrService } from 'ngx-toastr';
import { AlertService } from './../../shared/components/alert/alert.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType, SortType } from '@swimlane/ngx-datatable';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../services/role.service';
import { IPagination } from 'src/app/shared/models/pagination';
import { IRoleWithPaginationInfo, IRole } from 'src/app/shared/models/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  @ViewChild('statusTemplate', { static: true }) statusTemplate: TemplateRef<any>;
  @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;
  @ViewChild('table') table: DatatableComponent;

  pageTitle: string = 'Users';
  rolesWithPaginatedInfo: IRoleWithPaginationInfo[] = [];
  roles: IRole[] = []
  columnMode = ColumnMode;
  sortType = SortType;
  public currentPageLimit: number = 10;
  public readonly pageLimitOptions = [
    { value: 5 },
    { value: 10 },
    { value: 25 },
    { value: 50 },
    { value: 100 },
  ];

  selectionType = SelectionType;
  page: IPagination = {
    pageNo: 1,
    pageSize: 1,
    total: 0
  };

  get calculatedPageNo(): number {
    return this.page.pageNo;
  }

  columns: any[] = [];

  constructor(private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute, private alertService: AlertService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.loadRoles();
    this.columns = [
      { name: 'SL', width: 10, cellTemplate: this.slTemplate },
      { name: 'Name', prop: 'name' },
      { name: 'Actions', cellTemplate: this.statusTemplate },
    ]
  }

  loadRoles() {
    this.roleService.getRoles({
      ...this.page
    })
      .subscribe(paginatedRoles => {
        this.roles = paginatedRoles.data;
        this.page.total = paginatedRoles.count;
        console.log(this.roles);
      })
  }

  paginate(pageInfo: any) {
    this.page.pageNo = pageInfo.page;
    this.loadRoles();
  }
  onPageSizeChanged(pageSize: number) {
    this.page.pageSize = pageSize;
    this.loadRoles();
  }

  editRole(role: IRole) {
    console.log(role);
    this.router.navigate(['/admin/role-edit', role.id]);
  }

  removeRole(id: number) {
    console.log(id);
    this.alertService.confirm().then((confirmed) => {
      if(confirmed){
        this.roleService.deleteRole(id).subscribe(() => {
          this.toastrService.success('Deleted Successfully');
        })
      }
    });
  }

  public onLimitChange(limit: any): void {
    this.changePageLimit(limit);
    this.table.limit = this.currentPageLimit;
    this.table.recalculate();
    setTimeout(() => {
      if (this.table.bodyComponent.temp.length <= 0) {
        // TODO[Dmitry Teplov] find a better way.
        // TODO[Dmitry Teplov] test with server-side paging.
        this.table.offset = Math.floor((this.table.rowCount - 1) / this.table.limit);
        // this.table.offset = 0;
      }
    });
  }

  private changePageLimit(limit: any): void {
    this.currentPageLimit = parseInt(limit, 10);
  }



}
