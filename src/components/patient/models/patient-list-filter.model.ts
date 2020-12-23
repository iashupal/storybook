import { PagingModel } from "../../../shared/models/paging.model";

export interface PatientListFilterModel extends PagingModel{
    searchText:string;
}