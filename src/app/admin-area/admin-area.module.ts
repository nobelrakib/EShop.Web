import { ContentComponent } from './components/content/content.component';
import { SearchComponent } from './shared/components/header/elements/search/search.component';
import { TapToTopComponent } from './shared/components/tap-to-top/tap-to-top.component';
import { FeatherIconsComponent } from './shared/components/feather-icons/feather-icons.component';
import { MyAccountComponent } from './shared/components/header/elements/my-account/my-account.component';
import { MessageBoxComponent } from './shared/components/header/elements/message-box/message-box.component';
import { CartComponent } from './shared/components/header/elements/cart/cart.component';
import { NotificationComponent } from './shared/components/header/elements/notification/notification.component';
import { BookmarkComponent } from './shared/components/header/elements/bookmark/bookmark.component';
import { LanguagesComponent } from './shared/components/header/elements/languages/languages.component';
import { MegaMenuComponent } from './shared/components/header/elements/mega-menu/mega-menu.component';
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
    declarations: [EShopAdminComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        MegaMenuComponent,
        LanguagesComponent,
        NotificationComponent,
        BookmarkComponent,
        CartComponent,
        MessageBoxComponent,
        MyAccountComponent,
        FeatherIconsComponent,
        TapToTopComponent,
        SearchComponent,
        ContentComponent
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