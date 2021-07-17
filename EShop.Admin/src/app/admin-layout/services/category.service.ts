import { CategoryEndpoints } from './../../shared/ApiEndpoints/category-endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoryWithPaginationInfo } from '../../shared/Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private categoryendpoint: CategoryEndpoints) { }

  getCategories() {
    return this.http.get<ICategoryWithPaginationInfo>(this.categoryendpoint.getCategory)
  }

  addCategory(model: any) {
    return this.http.post(this.categoryendpoint.addCategory, model);
  }
}
