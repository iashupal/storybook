import { HttpWrapper } from '../../../core'
import {AppConfig} from '../../../core/app.config'
import { DropdownItemModel } from '../../../shared/models/dropdown.model';
import { AddPatientMedicationModel } from '../models/add-patient-medication.model';
import { PatientMedicationDetail } from '../models/patient-medication-detail';

export  class PatientMedicationService  {
  
    private wrapper: HttpWrapper;
  constructor() {
    this.wrapper = new HttpWrapper();
    
  }
   postMedication(medication:AddPatientMedicationModel) {    
    return this.wrapper.post<any>(AppConfig.apiEndpoint+'medication/create/',medication);
   }  

   getmedicationByPatientId(id?:string | null)
   {
     return this.wrapper.get<PatientMedicationDetail>(AppConfig.apiEndpoint+'medication/patientmedication/'+id);
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
  getMedicineList()
    {
      return this.wrapper.get<any>(AppConfig.apiEndpoint+'medication/medicinelist');
    }
} 