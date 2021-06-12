import { ApiConstant } from './base-endpoint';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthEndpoints{
    login: string = ApiConstant.baseUrl + "Auth/Login";
    getPermission : string = ApiConstant.baseUrl +"Permission/GetAll";
    addRole: string =ApiConstant.baseUrl+"Role/Create"
    getRoles: string  = ApiConstant.baseUrl+"Role/GetAll"
    deleteRole: string  = ApiConstant.baseUrl+"Role/Delete"
    getById: string  = ApiConstant.baseUrl+"Role/GetById"
}