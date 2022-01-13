import { PermissionCheckPipe } from './Pipes/permission-check.pipe';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContentComponent } from './../admin-layout/content/content.component';
import { FeatherIconsComponent } from './Components/feather-icons/feather-icons.component';
import { FilterByComponent } from './Components/filter-by/filter-by.component';
import { MegaMenuComponent } from './Components/mega-menu/mega-menu.component';
import { BreadcrumbComponent } from './Components/breadcrumb/breadcrumb.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AlertComponent } from './Components/alert/alert.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './Components/text-input/text-input.component';
import { CommonModule } from "@angular/common";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { TreeModule } from 'ng2-tree';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    NavBarComponent, TextInputComponent, AlertComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    FeatherIconsComponent,
    BreadcrumbComponent,
    MegaMenuComponent,
    FilterByComponent,
    PermissionCheckPipe,
    
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    NgxDatatableModule,
    NgbModule,
    TreeModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    NgxSpinnerModule
  ],
  exports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    
    NavBarComponent,
    TextInputComponent,
    AlertComponent,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    FeatherIconsComponent,
    PaginationModule,
    TranslateModule,
    BsDropdownModule,
    NgxDatatableModule,
    BreadcrumbComponent,
    MegaMenuComponent,
    NgbModule,
    FilterByComponent,
    TreeModule,
    NgxSpinnerModule, 
    PermissionCheckPipe
  ]
})

export class SharedModule { }

