import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin-area/admin-area.module').then(x => x.AdminModule)
  },
  {
    path: 'account', loadChildren: () => import('./pages/account/account.module').then(mod => mod.AccountModule),
    data: { breadcrumb: {skip: true} }
  },
  {
    path: '', component: NavBarComponent,
    children: [

    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [[RouterModule.forRoot(routes)],
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
