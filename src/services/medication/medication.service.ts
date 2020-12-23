import { AppConfig, HttpWrapper } from "../../core";
import { AddMedicationModel } from "../../models/medication/add-medication.model";
import { MedicationListFilterModel } from "../../models/medication/medication-list-filter.model";
import { MedicationListResponseModel } from "../../models/medication/medication-list-response.model";
import { DropdownItemModel } from "../../shared/models/dropdown.model";
export class MedicationService {
    private wrapper: HttpWrapper;
    constructor() {
      this.wrapper = new HttpWrapper();
  
    }
  
    addMedication(medicationModel: AddMedicationModel) {
      return this.wrapper.post<string>(AppConfig.apiEndpoint + 'medication/add/', medicationModel);
    }

    getFormat() {
      return this.wrapper.get<DropdownItemModel[]>(AppConfig.apiEndpoint + 'master/format');
    }
    getDuration() {
      return this.wrapper.get<DropdownItemModel[]>(AppConfig.apiEndpoint + 'master/duration');
    }
    getRelease() {
      return this.wrapper.get<DropdownItemModel[]>(AppConfig.apiEndpoint + 'master/release');
    }
    
    getMedicationList(filterModel:MedicationListFilterModel)
    {
      return this.wrapper.post<MedicationListResponseModel>(AppConfig.apiEndpoint+'medication/list',filterModel);
    }

    deleteMedication(id:string| null){
      return this.wrapper.delete<boolean>(AppConfig.apiEndpoint+'medication/delete/'+ id);
    }
    getMedicationDetail(id:string| null){
      return this.wrapper.get<AddMedicationModel>(AppConfig.apiEndpoint+'medication/detail/'+ id);
    }
}