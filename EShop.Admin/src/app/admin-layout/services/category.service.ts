import { ICategory, ICategoryWithPaginationInfo } from './../../shared/models/category';
import { CategoryEndpoints } from './../../shared/ApiEndpoints/category-endpoints';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from 'src/app/shared/Models/pagination';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private categoryendpoint: CategoryEndpoints) { }

  getCategories() {
    return this.http.get<ICategoryWithPaginationInfo>(this.categoryendpoint.getCategory)
  }

  getPaginatedCategory(model: IPagination) {
    return this.http.get<ICategoryWithPaginationInfo>(this.categoryendpoint.getCategory + `?pageNo=${model.pageNo}&pageSize=${model.pageSize}`)
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
