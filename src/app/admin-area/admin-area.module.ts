import { NgModule } from '@angular/core';
import {AdminRoutingModule } from './admin-area-routing.module';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';
import {SharedAdminModule} from './shared/shared-admin.module';
import { RoleComponent } from './role/role.component';
import { RoleAddComponent } from './role-add/role-add.component';

@NgModule({
    declarations: [
        EShopAdminComponent,
        RoleComponent,
        RoleAddComponent,
    ],
    imports: [
        AdminRoutingModule,
        SharedAdminModule,
        
    ],
  })
  export class AdminModule { }