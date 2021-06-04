import { Observable } from 'rxjs';
import { AuthEndpoints } from '../../core/api-endpoints/auth-endpoint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoleWithPaginationInfo } from 'src/app/shared/models/role';
import { IPagination } from 'src/app/shared/models/pagination';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private authendpoint: AuthEndpoints) { }

  addRoles(model: any) {
    return this.http.post(this.authendpoint.addRole, model);
  }

  getRoles(model: IPagination) {
    return this.http.get<IRoleWithPaginationInfo>(this.authendpoint.getRole + `?pageNo=${model.pageNo}&pageSize=${model.pageSize}`)
  }
}
