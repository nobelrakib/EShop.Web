import { ApiConstant } from './base-endpoint';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class AuthEndpoints{
    login: string = ApiConstant.baseUrl + "Auth/Login";

}