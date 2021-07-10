import { IPagination } from './../../shared/Models/pagination';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthEndpoints } from '../../shared/ApiEndpoints/auth-endpoint';
import { IRoleWithPaginationInfo, IRole } from 'src/app/shared/Models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private authendpoint: AuthEndpoints) { }

  addRoles(model: any) {
    return this.http.post(this.authendpoint.addRole, model);
  }

  getRoles(model: IPagination) {
    return this.http.get<IRoleWithPaginationInfo>(this.authendpoint.getRoles + `?pageNo=${model.pageNo}&pageSize=${model.pageSize}`)
  }

  deleteRole(id: number) {
    return this.http.delete(this.authendpoint.deleteRole+`?id=${id}`);
  }

  getById(id: number) {
    return this.http.get<IRole>(this.authendpoint.getById+`?id=${id}`);
  }
}
