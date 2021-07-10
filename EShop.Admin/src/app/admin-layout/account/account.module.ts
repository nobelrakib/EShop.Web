import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        AccountRoutingModule,
        SharedModule
    ]
  })
  export class AccountModule { }