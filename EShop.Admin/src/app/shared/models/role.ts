export interface IRole {
    id:number;
    name:string;
}

export interface IRoleWithPaginationInfo {
    pageIndex: number;
    pageSize: number;
    count:number;
    data:IRole[];
}