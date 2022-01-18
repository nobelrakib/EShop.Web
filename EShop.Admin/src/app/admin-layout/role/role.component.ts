import { AppPermissions } from './../../shared/Constants/app-permissions';
import { IFilterBySetting } from './../../shared/Models/IFilterBySetting';
import { IPagination } from './../../shared/Models/pagination';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent, SelectionType, SortType } from '@swimlane/ngx-datatable';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoleWithPaginationInfo, IRole } from 'src/app/shared/Models/role';
import { HtmlElementEnum } from 'src/app/shared/enums/filterBySetting-enum';
import { AlertService } from 'src/app/shared/Components/alert/alert.service';
import { RoleService } from '../services/role.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator} from 'src/app/shared/Validators/reactive-form-validator';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  @ViewChild('statusTemplate', { static: true }) statusTemplate: TemplateRef<any>;
  @ViewChild('slTemplate', { static: true }) slTemplate: TemplateRef<any>;
  @ViewChild('table') table: DatatableComponent;

  public permissionNames = AppPermissions;
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

  countries: any[] = [{ "id": 1, "name": "Saudi Arabia" }, { "id": 2, "name": "Bangladesh" }, { "id": 3, "name": "Bahrain" }];

  filterByForm: FormGroup;
  filterBySettings: IFilterBySetting[] = [
    { labelText: "Product Name", inputType: 'text', htmlElement: HtmlElementEnum.Input, formControlName: 'productName' },
    { labelText: "Mobile number", inputType: 'number', htmlElement: HtmlElementEnum.Input, formControlName: 'mobileNumber' },
    { labelText: "Multi select dropdown", htmlElement: HtmlElementEnum.MultiSelectDropdown, dropDownItems: this.countries,formControlName: 'multiSelectDropdown' }
    // { labelText: "Category Name", inputType: 'text', htmlElement: HtmlElementEnum.Input, formControlName: 'categoryName' },
    // { labelText: "Date Range", inputType: 'daterange', htmlElement: HtmlElementEnum.Date,formControlName: 'dateRange' },
    // { labelText: "Date", inputType: 'date', htmlElement: HtmlElementEnum.Date,formControlName: 'date' },
    // { labelText: "Is it Delivered ?", htmlElement: HtmlElementEnum.Checkbox,formControlName: 'isItDelivered'},
    // { labelText: "Single select dropdown", htmlElement: HtmlElementEnum.Dropdown, dropDownItems: this.countries,formControlName: 'singleSelectDropdown' },
  ];

  constructor(private roleService: RoleService,
    private router: Router,
    private fb: FormBuilder, private alertService: AlertService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadRoles();
    this.columns = [
      { name: 'SL', width: 10, cellTemplate: this.slTemplate },
      { name: 'Name', prop: 'name' },
      { name: 'Actions', cellTemplate: this.statusTemplate },
    ]
  }

  buildForm() {
    this.filterByForm = this.fb.group({
      productName: new FormControl('', {
        validators: [  
        CustomValidator.lengthValidator('Product Name',5,10),
        CustomValidator.requiredValidator('Product Name'), ],
        updateOn: 'change',
      }),
      mobileNumber: new FormControl('', {
        validators: [CustomValidator.phoneValidator('Mobile Number', 10)],
        updateOn: 'change',
      }),
      multiSelectDropdown: new FormControl('', {
        validators: [CustomValidator.requiredValidator('Countries')],
        updateOn: 'change',
      }),
    });
  }

  getSearchText(value) {
    console.log(value);
  }

  getFilterByResult(filterByResult) {
    console.log(filterByResult);
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
      if (confirmed) {
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
