import { PagingModel } from "../../shared/models/paging.model";


export interface UserListFilterModel extends PagingModel {
    searchText: string;
}