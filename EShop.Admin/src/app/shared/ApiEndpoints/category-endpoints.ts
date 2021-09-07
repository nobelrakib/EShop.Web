import { ApiConstant } from './base-endpoint';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class CategoryEndpoints {

    getCategory: string = ApiConstant.baseUrl + "Category/GetAll";
    addCategory: string = ApiConstant.baseUrl + "Category/Create"
    getCategoryById: string = ApiConstant.baseUrl + "Category/Get";
    deleteCategory: string = ApiConstant.baseUrl + "Category/Delete";
}