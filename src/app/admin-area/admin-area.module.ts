import { NgModule } from '@angular/core';
import {AdminRoutingModule } from './admin-area-routing.module';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';

@NgModule({
    declarations: [EShopAdminComponent],
    imports: [
        AdminRoutingModule
    ]
  })
  export class AdminModule { }