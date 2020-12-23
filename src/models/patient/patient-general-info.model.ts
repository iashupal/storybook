import { AddPatientModel } from "../../components/patient/models/add-patient";
import { AddPhysicianModel } from "../../components/patient/models/add-physician";

export interface PatientGeneralInfoModel{
    patientInfoModel  :AddPatientModel;
    teacherId : string | null;
    tFirstName : string;
     tLastName?: string;
     tEmailId: string;
    schoolDistrict : string;
    schoolContactNo : string;
    isInviteSend :boolean;
    isTeacherAccountActivate:boolean;
}