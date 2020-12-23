import { AppConfig, HttpWrapper } from "../../core";
import { PatientGeneralInfoModel } from "../../models/patient/patient-general-info.model";


export class MedicalHistoryService {
  private wrapper: HttpWrapper;
  constructor() {
    this.wrapper = new HttpWrapper();

  }

  postUser(patient: PatientGeneralInfoModel) {
    return this.wrapper.post<any>(AppConfig.apiEndpoint + 'patient/add/general/info', patient);
  }
}
  