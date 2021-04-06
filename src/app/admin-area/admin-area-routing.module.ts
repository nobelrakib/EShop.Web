import { ContentComponent } from './components/content/content.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';

const routes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
    {path: 'dashboard', component: EShopAdminComponent}
  ]
  }
  // {
  //   path: 'dashboard', component: EShopAdminComponent
  // }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
