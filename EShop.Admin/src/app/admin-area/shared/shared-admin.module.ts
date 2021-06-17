import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FilterByComponent } from './components/filter-by/filter-by.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TreeModule } from 'ng2-tree';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    FeatherIconsComponent,
    BreadcrumbComponent,
    MegaMenuComponent,
    FilterByComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    NgxDatatableModule,
    NgbModule,
    TreeModule
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
    PaginationModule,
    TranslateModule,
    BsDropdownModule,
    NgxDatatableModule,
    BreadcrumbComponent,
    MegaMenuComponent,
    NgbModule,
    FilterByComponent,
    TreeModule
  ],
  entryComponents: []
})

export class SharedAdminModule { }

