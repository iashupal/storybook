
import { PatientTrialWeekDetail, PatientVisitDetail } from "./patient-medication-detail";

export interface AddPatientMedicationModel{
    patientTrialId?: string | null;
    patientId?:string | null;
    trialStartDate?: Date | null;
    trialEndDate?: Date | null;
    trialNoOfWeeks?: number;
    isActive:boolean;
    createPatientVisitModels:AddPatientVisitModel[]
    createPatientTrialWeekModels:AddPatientTrialWeekModel[],
    trialStartDateError?:string|null;
}
export interface AddPatientVisitModel{
    id?: string | null;
    visitNo:number;
    visitDate?: Date | null;
    patientTrialId: string;
    isAttanded:boolean; 
    visitError?:string|null;  
}

export interface AddPatientTrialWeekModel{
    id?: string | null;
    weekNo:number;
    patientTrialId?: string ;
    startDate?: Date | null;
    endDate?: Date | null;
    isActive:boolean;   
    createPatientTrailWeeklyMedicationModel:AddPatientTrialWeeklyMedicationModel
}
export interface AddPatientTrialWeeklyMedicationModel{
    id?: string | null;
    medicationFamily: string ; 
    medicationBrandName: string ; 
    medicationDosage: string ; 
    medicationFormat: string ; 
    medicationDuration: string ; 
    medicationRelease: string ; 
    patientTrialWeekId?: string | null;
    medicationId?: string|null ;
    medicationFamilyError?:string|null;
}