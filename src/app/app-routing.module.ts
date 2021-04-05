import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EShopAdminComponent } from './admin-area/components/eshop-admin/eshop-admin.component';

const routes: Routes = [
  {
    path: 'admin', component: EShopAdminComponent,
    children: [
      // { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', canActivate: [AuthGuard] },
    ],
  },
  // {
  //   path: '', component: EShopComponent,
  //   children: [

  //   ]
  // }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
