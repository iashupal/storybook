import { PagingModel } from "../../shared/models/paging.model";
import { MedicationListViewModel } from "./medication-list-view.model";


export interface MedicationListResponseModel{
    collection:MedicationListViewModel[];
    paging:PagingModel;
}