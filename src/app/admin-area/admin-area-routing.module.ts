import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopAdminComponent } from './components/eshop-admin/eshop-admin.component';

const routes: Routes = [
  {
    path: '', component: EShopAdminComponent
  }
];

@NgModule({
  imports: [[RouterModule.forChild(routes)],
],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
