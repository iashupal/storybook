import { HttpWrapper } from '../../../core'
import {AppConfig} from '../../../core/app.config'
import { AddPhysicianModel } from '../models/add-physician';


export  class PhysicianService  {    
    private wrapper: HttpWrapper;
  constructor() {
    this.wrapper = new HttpWrapper();
    
  }
  postPhysician(physician:AddPhysicianModel) {   
    return this.wrapper.post<any>(AppConfig.apiEndpoint+'physicianmedication/create/',physician);
   }  
} 