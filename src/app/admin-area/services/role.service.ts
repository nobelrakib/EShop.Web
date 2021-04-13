import { AuthEndpoints } from '../../core/api-endpoints/auth-endpoint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient, private authendpoint: AuthEndpoints) { }

  addRoles(model:any) {
    return  this.http.post(this.authendpoint.addRole,model);
  }
}
