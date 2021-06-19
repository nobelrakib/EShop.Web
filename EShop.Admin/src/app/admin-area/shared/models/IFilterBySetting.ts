import { HtmlElementEnum } from './../enums/filterBySetting-enum';
export interface IFilterBySetting{
    labelText: string;
    htmlElement: HtmlElementEnum;
    inputType?: string;
    dropDownItems?: any[];
}