import { IUser } from './../Models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'permissionCheck',
    pure: true
})

export class PermissionCheckPipe implements PipeTransform {
    constructor() {

    }
    transform(permission: any, ...args: any[]) {
        const permissions = JSON.parse(localStorage.getItem('permissions')) as string[];
        if (!!permissions) {
            return !(permissions.includes(permission));
        }
        return true;
    }
}