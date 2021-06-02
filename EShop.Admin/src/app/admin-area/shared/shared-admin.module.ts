import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { ContentComponent } from '../components/content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    declarations: [
       HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ContentComponent,
        FeatherIconsComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      BsDropdownModule.forRoot(),
    ],
      exports: [
        HeaderComponent,
        FooterComponent,
        SidebarComponent,
        ContentComponent,
        FeatherIconsComponent,
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        BsDropdownModule,
      ],
    entryComponents: []
})

export class SharedAdminModule{}

