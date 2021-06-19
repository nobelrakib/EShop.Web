import { ApiConstant } from './base-endpoint';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CategoryEndpoints {

    getCategory: string = ApiConstant.baseUrl + "Category/GetAll"
}