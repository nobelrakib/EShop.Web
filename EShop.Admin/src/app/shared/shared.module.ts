import { AlertComponent } from './components/alert/alert.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [NavBarComponent, TextInputComponent,AlertComponent],
    imports: [RouterModule,
      BsDropdownModule.forRoot(),
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
        FormsModule,
    ],
    exports: [
        NavBarComponent,
        RouterModule,
        BsDropdownModule,
        TextInputComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        AlertComponent
      ]
    
})

export class SharedModule{}

