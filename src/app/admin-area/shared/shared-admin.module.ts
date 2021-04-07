import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { ContentComponent } from '../components/content/content.component';
import { TapToTopComponent } from './components/tap-to-top/tap-to-top.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
       HeaderComponent,
        FooterComponent,
        SidebarComponent,
        TapToTopComponent,
        ContentComponent,
        FeatherIconsComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule
    ],
      exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        TapToTopComponent,
        ContentComponent,
        FeatherIconsComponent,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
      ],
    entryComponents: []
})

export class SharedAdminModule{}

