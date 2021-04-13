import { RoleService } from './../services/role.service';
import { IPermission } from './../../shared/models/permission';
import { PermissionService } from './../services/permission.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit {

  form: FormGroup;
  websiteList: any = [
    { id: 1, name: 'Google.com' },
    { id: 2, name: 'Angular.com' },
    { id: 3, name: 'Tutsmake.com' }
  ];
  permissionList:IPermission[] =[];
  
  constructor(private formBuilder: FormBuilder,
    private PermissionService:PermissionService,private roleService:RoleService) {
    
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      rolename: ['', Validators.required],
      permissionList: this.formBuilder.array([], [Validators.required])
    })
    this.PermissionService.getPermissions().subscribe(response=>{
         this.permissionList=[...response]
        // console.log(response)
    })
    // console.log(this.permissionList)
  }
    
  onCheckboxChange(e) {
    const selectedPermission: FormArray = this.form.get('permissionList') as FormArray;
   // console.log(this.form)
    if (e.target.checked) {
      selectedPermission.push(new FormControl(e.target.value));
    } else {
       const index = selectedPermission.controls.findIndex(x => x.value === e.target.value);
       selectedPermission.removeAt(index);
    }
    console.log(this.form.get('permissionList').value)
  }
    
  submit(){
    this.roleService.addRoles(this.form.value).subscribe(res=>{

    })
    console.log(this.permissionList);
  }

}
