
import { HttpWrapper } from '../../../core'
import {AppConfig} from '../../../core/app.config'
import { AddPatientModel } from '../models/add-patient';
import { PatientDetailModel } from '../models/patient-detail.model';
import { PatientListFilterModel } from '../models/patient-list-filter.model';
import { PatientListResponseModel } from '../models/patient-list-response.model';
import { PatientsListByParentIdModel } from '../models/patients-list-By-parentId.model';


export  class PatientService  {
  
    private wrapper: HttpWrapper;
  constructor() {
    this.wrapper = new HttpWrapper();
    
  }
  postUser(patient:AddPatientModel) {    
    return this.wrapper.post<any>(AppConfig.apiEndpoint+'patient/create/',patient);
   }  

   getPatientList(filterModel:PatientListFilterModel)
   {
     return this.wrapper.post<PatientListResponseModel>(AppConfig.apiEndpoint+'patient/list',filterModel);
   }
   getUserById(id?:string | null)
   {
     return this.wrapper.get<PatientDetailModel>(AppConfig.apiEndpoint+'patient/detail/'+id);
   }
   getPatientsListByParentId(id?:string | null) {
    return this.wrapper.get<PatientsListByParentIdModel>(AppConfig.apiEndpoint+'patient/patients-list-by-parentid/'+id);
  }   
} 