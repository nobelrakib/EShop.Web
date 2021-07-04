import { AlertComponent } from './components/alert/alert.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CommonModule } from "@angular/common";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';


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

