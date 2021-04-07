import { EShopAdminComponent } from './../components/eshop-admin/eshop-admin.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NavService } from './services/nav.service';
import { LayoutService } from './services/layout.service';

@NgModule({
    declarations: [
       EShopAdminComponent
    ],
    imports: [
       
    ],
      exports: [
        EShopAdminComponent
      ],
    entryComponents: []
})

export class SharedModule{}

