import { ApiConstant } from './base-endpoint';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AuthEndpoints{
    login: string = ApiConstant.baseUrl + "Auth/Login";
    getPermission : string = ApiConstant.baseUrl +"Permission/GetAll";
    addRole: string =ApiConstant.baseUrl+"Role/CreateRole"
}