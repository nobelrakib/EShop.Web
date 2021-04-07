import { FeatherIconsComponent } from './shared/components/feather-icons/feather-icons.component';
import { ContentComponent } from './components/content/content.component';
import { SearchComponent } from './shared/components/header/elements/search/search.component';
import { TapToTopComponent } from './shared/components/tap-to-top/tap-to-top.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgModule } from '@angular/core';
import {AdminRoutingModule } from './admin-area-routing.module';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NavService } from './shared/services/nav.service';
import { LayoutService } from './shared/services/layout.service';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        TapToTopComponent,
        SearchComponent,
        ContentComponent,
        FeatherIconsComponent
    ],
    imports: [
        AdminRoutingModule,
        SharedModule,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
    providers: [
        NavService,
        LayoutService
      ],
      exports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
      ],
  })
  export class AdminModule { }