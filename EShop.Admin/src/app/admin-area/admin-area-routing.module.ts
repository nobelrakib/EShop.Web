import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { RoleComponent } from './role/role.component';
import { ContentComponent } from './components/content/content.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';
import { RoleAddComponent } from './role-add/role-add.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      { path: 'dashboard', component: EShopAdminComponent },
      { path: 'role', component: RoleComponent },
      { path: 'role-add', component: RoleAddComponent },
      { path: 'role-edit/:id', component: RoleAddComponent },
      { path: 'category-add', component: CategoryAddComponent },
      { path: 'categories', component: CategoryListComponent },
    ]
  }
  // {
  //   path: 'dashboard', component: EShopAdminComponent
  // }
];

@NgModule({
  imports: [[RouterModule.forChild(routes)],
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
