import { IPermission } from './../../shared/models/permission';
import { AuthEndpoints } from '../../Shared/ApiEndpoints/auth-endpoint'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {


  constructor(private http: HttpClient, private permissionendpoint: AuthEndpoints) { }

  getPermissions() {
    return this.http.get<IPermission[]>(this.permissionendpoint.getPermission);
  }
}
