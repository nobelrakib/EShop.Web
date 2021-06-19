import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AdminRoutingModule } from './admin-area-routing.module';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';
import {SharedAdminModule} from './shared/shared-admin.module';
import { RoleComponent } from './role/role.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
    declarations: [
        EShopAdminComponent,
        RoleComponent,
        RoleAddComponent,
        CategoryAddComponent,
        CategoryListComponent,
    ],
    imports: [
        AdminRoutingModule,
        SharedAdminModule,
    ],
  })
  export class AdminModule { }