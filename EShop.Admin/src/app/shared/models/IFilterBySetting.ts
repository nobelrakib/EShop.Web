import { AbstractControl, AbstractControlOptions, FormGroup, ValidationErrors } from '@angular/forms';
import { HtmlElementEnum } from './../enums/filterBySetting-enum';

export interface IFilterBySetting{
    labelText: string;
    htmlElement: HtmlElementEnum;
    inputType?: string;
    dropDownItems?: any[];
    formControlName: string;
}