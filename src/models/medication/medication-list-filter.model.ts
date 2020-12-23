import { PagingModel } from "../../shared/models/paging.model";

export interface MedicationListFilterModel extends PagingModel{
    searchText:string;
}