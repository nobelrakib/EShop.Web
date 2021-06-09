import { IRole } from './role';
export interface IPermission {
    id: number;
    permissionName: string;
    description: string;
}

export interface IRolePermission{
    permissionId: number;
    roleId: number;
    permission: IPermission[];
    role: IRole[];
}