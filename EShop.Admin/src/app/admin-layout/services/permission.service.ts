import { AuthEndpoints } from '../../shared/ApiEndpoints/auth-endpoint'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPermission } from 'src/app/shared/models/permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {


  constructor(private http: HttpClient, private permissionendpoint: AuthEndpoints) { }

  getPermissions() {
    return this.http.get<IPermission[]>(this.permissionendpoint.getPermission);
  }
}
