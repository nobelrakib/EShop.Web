import { FeatherIconsComponent } from './shared/components/feather-icons/feather-icons.component';
import { ContentComponent } from './components/content/content.component';
import { TapToTopComponent } from './shared/components/tap-to-top/tap-to-top.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
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