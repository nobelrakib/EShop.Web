export interface ICategory {
    id: number;
    name: string;
    description: string;
    parentCategoryId: number;
    subCategories: ICategory[];
}

export interface ICategoryWithPaginationInfo {
    pageIndex: number;
    pageSize: number;
    count: number;
    data: ICategory[];
}