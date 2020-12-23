import { AddPatientTrialWeekModel, AddPatientVisitModel } from "./add-patient-medication.model";

export interface PatientMedicationDetail{
    patientTrialId?: string | null;
    patientId?:string | null;
    trialStartDate?: Date | null;
    trialEndDate?: Date | null;
    trialNoOfWeeks?: number;
    isActive:boolean;
    patientVisitDetails:AddPatientVisitModel[]
    patientTrialWeekDetails:AddPatientTrialWeekModel[]
}
export interface PatientVisitDetail{
    id?: string | null;
    visitNo:number;
    visitDate: Date | null;
    patientTrialId: string;
    isAttanded:boolean;  
}
export interface PatientTrialWeekDetail{
    id?: string | null;
    weekNo:number;
    patientTrialId?: string ;
    startDate?: Date | null;
    endDate?:Date | null;
    isActive:boolean;   
    patientTrialWeeklyMedicationDetail:PatientTrialWeeklyMedicationDetail
}
export interface PatientTrialWeeklyMedicationDetail{
    id?: string | null;
    medicationFamily: string ; 
    medicationBrandName: string ; 
    medicationDosage: string ; 
    medicationFormat: string ; 
    medicationDuration: string ; 
    medicationRelease: string ; 
    patientTrialWeekId?: string | null;
}