import { IRolePermission } from './permission';
export interface IRole {
    id:number;
    name:string;
    rolePermissions: IRolePermission[];
}

export interface IRoleWithPaginationInfo {
    pageIndex: number;
    pageSize: number;
    count:number;
    data:IRole[];
}