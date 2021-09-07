import { ICategory } from './../../shared/models/category';
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

  getCategoriesById(id: number) {
    return this.http.get<ICategory>(this.categoryendpoint.getCategoryById + `/${id}`)
  }

  deleteCategory(id: number) {
    return this.http.delete(this.categoryendpoint.deleteCategory + `/${id}`);
  }

  addCategory(model: any) {
    return this.http.post(this.categoryendpoint.addCategory, model);
  }
}
