import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MegaMenuComponent } from './components/header/elements/mega-menu/mega-menu.component';
import { NotificationComponent } from './components/header/elements/notification/notification.component';
import { MyAccountComponent } from './components/header/elements/my-account/my-account.component';
import { MessageBoxComponent } from './components/header/elements/message-box/message-box.component';
import { LanguagesComponent } from './components/header/elements/languages/languages.component';
import { CartComponent } from './components/header/elements/cart/cart.component';
import { BookmarkComponent } from './components/header/elements/bookmark/bookmark.component';
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
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
      exports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
      ],
    entryComponents: []
})

export class SharedModule{}

