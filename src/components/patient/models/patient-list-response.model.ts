import { PagingModel } from "../../../shared/models/paging.model";
import { PatientListModel } from "./patient-list.model";

export interface PatientListResponseModel{
    collection:PatientListModel[];
    paging:PagingModel;
}