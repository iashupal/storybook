import { PagingModel } from "../../shared/models/paging.model";
import { UserListModel } from "./user-list.model";

export interface UserResponseModel
{
    collection: UserListModel[];
   // totalCount:number;
   paging:PagingModel;
}