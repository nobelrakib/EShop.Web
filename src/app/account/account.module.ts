import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgModule } from "@angular/core";
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        AccountRoutingModule,
        SharedModule
    ]
  })
  export class AccountModule { }