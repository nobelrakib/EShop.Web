import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin-area/admin-area.module').then(x => x.AdminModule)
  },
  {
    path: '', component: HomeComponent,
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
