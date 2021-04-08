import { NgModule } from '@angular/core';
import {AdminRoutingModule } from './admin-area-routing.module';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';
import {SharedAdminModule} from './shared/shared-admin.module';

@NgModule({
    declarations: [
        EShopAdminComponent,
    ],
    imports: [
        AdminRoutingModule,
        SharedAdminModule,
        
    ],
  })
  export class AdminModule { }