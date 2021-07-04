import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContentComponent } from './../admin-layout/content/content.component';
import { FeatherIconsComponent } from './Components/feather-icons/feather-icons.component';
import { FilterByComponent } from './Components/filter-by/filter-by.component';
import { MegaMenuComponent } from './Components/mega-menu/mega-menu.component';
import { BreadcrumbComponent } from './Components/breadcrumb/breadcrumb.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AlertComponent } from './components/alert/alert.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CommonModule } from "@angular/common";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { TreeModule } from 'ng2-tree';

@NgModule({
  declarations: [NavBarComponent, TextInputComponent, AlertComponent, LoaderComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    FeatherIconsComponent,
    BreadcrumbComponent,
    MegaMenuComponent,
    FilterByComponent],
  imports: [RouterModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    NgxDatatableModule,
    NgbModule,
    TreeModule,
    BsDatepickerModule.forRoot(),
    NgSelectModule
  ],
  exports: [
    NavBarComponent,
    RouterModule,
    BsDropdownModule,
    TextInputComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AlertComponent,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    FeatherIconsComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule,
    TranslateModule,
    BsDropdownModule,
    NgxDatatableModule,
    BreadcrumbComponent,
    MegaMenuComponent,
    NgbModule,
    FilterByComponent,
    TreeModule
  ]

})

export class SharedModule { }

