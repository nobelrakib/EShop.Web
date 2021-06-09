import { AlertService } from './../../shared/components/alert/alert.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, SelectionType, SortType } from '@swimlane/ngx-datatable';
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

  pageTitle: string = 'Users';
  rolesWithPaginatedInfo: IRoleWithPaginationInfo[] = [];
  roles: IRole[] = []
  columnMode = ColumnMode;
  sortType = SortType;
  selectionType = SelectionType;
  page: IPagination = {
    pageNo: 1,
    pageSize: 2,
    total: 0
  };

  get calculatedPageNo(): number {
    return this.page.pageNo;
  }

  columns: any[] = [];

  constructor(private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute, private alertService: AlertService) { }

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
      this.roleService.getRoles
    });
  }

}
