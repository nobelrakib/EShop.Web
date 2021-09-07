import { RoleComponent } from './role/role.component';
import { EShopAdminComponent } from './eshop-admin/eshop-admin.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleAddComponent } from './role-add/role-add.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';

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
      { path: 'category-edit/:id1/:id2', component: CategoryAddComponent },
    ]
  }
  // {
  //   path: 'dashboard', component: EShopAdminComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
