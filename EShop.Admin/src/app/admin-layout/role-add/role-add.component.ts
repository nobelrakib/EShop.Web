import { trigger } from '@angular/animations';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPermission } from 'src/app/shared/Models/permission';
import { IRole } from 'src/app/shared/Models/role';
import { RoleService } from '../services/role.service';
import { PermissionService } from '../services/permission.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {

  pageTitle: string = "Add New Role";
  form: FormGroup;
  permissions: IPermission[] = [];
  editState: boolean = false;
  role: IRole;
  permissionIds: number[] = [];

  get permissionsFormArray() {
    return this.form.controls.permissions as FormArray;
  }
  set permissionsFormArray(array: FormArray) {
    this.form.controls.permissions = array;
  }

  constructor(private formBuilder: FormBuilder,
    private PermissionService: PermissionService, private roleService: RoleService,
    private route: ActivatedRoute, private toastrService: ToastrService) {

  }
  async ngOnInit(): Promise<void> {
    this.form = this.formBuilder.group({
      rolename: ["", Validators.required],
      permissions: this.formBuilder.array([], Validators.required)
    });
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    await this.PermissionService.getPermissions().toPromise().then(response => {
      this.permissions = [...response]
    });
    if (id) {
      this.editState = true;
      this.pageTitle = "Edit role"
      await this.roleService.getById(id).toPromise().then((data) => {
        this.role = data;
        this.form.get('rolename').setValue(this.role.name);
        this.role.rolePermissions.map(x => this.permissionIds.push(x.permissionId));

      const selectedPermission: FormArray = this.form.get('permissions') as FormArray;
      this.role.rolePermissions.forEach(x => selectedPermission.push(new FormControl({ id: x.permissionId.toString() })));
      console.log(this.form.get('permissions'));
      });
    }
  }

  onCheckboxChange(e) {
    const selectedPermission: FormArray = this.form.get('permissions') as FormArray;

    if (e.target.checked) {
      selectedPermission.push(new FormControl({ id: e.target.value }))

    } else {
      const index = selectedPermission.controls.findIndex(x => x.value["id"] === e.target.value);
      selectedPermission.removeAt(index);
    }
    console.log(this.form.get('permissions'));
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    this.roleService.addRoles(this.form.value).subscribe(res => {
      if (this.editState)
        this.toastrService.success("Role updated successfully");
      else
        this.toastrService.success("Role created successfully");

    })
    console.log(this.permissions);
  }

}
