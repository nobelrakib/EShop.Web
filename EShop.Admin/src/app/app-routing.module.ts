import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin-layout/account/login/login.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  },
  {
    path: 'account', loadChildren: () => import('./admin-layout/account/account.module')
    .then(mod => mod.AccountModule), data: { breadcrumb: { skip: true } }
  },
  {
    path: '', component: LoginComponent,
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
