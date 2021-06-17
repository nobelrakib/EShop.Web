import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryEndpoints } from '../../core/api-endpoints/category-endpoints';
import { ICategoryWithPaginationInfo } from '../../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private categoryendpoint: CategoryEndpoints) { }

  getCategories() {
    return this.http.get<ICategoryWithPaginationInfo>(this.categoryendpoint.getCategory)
  }
}
