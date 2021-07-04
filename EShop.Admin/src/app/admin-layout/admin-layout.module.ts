import { SharedModule } from './../Shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { EShopAdminComponent } from './eshop-admin/eshop-admin.component';
import { RoleComponent } from './role/role.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';


@NgModule({
  declarations: [
      EShopAdminComponent,
      RoleComponent,
      RoleAddComponent,
      CategoryAddComponent,
      CategoryListComponent,
  ],
  imports: [
      AdminLayoutRoutingModule,
      SharedModule,
  ],
})
export class AdminLayoutModule { }
