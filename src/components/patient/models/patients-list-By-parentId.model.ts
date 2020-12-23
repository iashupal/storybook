export interface PatientsListByParentIdModel {
    parentId: string;
    patientDetails: PatientDetails[];
}
export interface PatientDetails {
    id: string;
    firtName: string;
    lastName: string;
    gender?: number;
    age?: number;
    genderText: string;
    initials: string;
    completePercentage?: number;
    dateOfBirth?:Date;
    mr_No:string;
    teacherDetail: TeacherDetail
    physicianDetail: PhysicianDetail
}
export interface TeacherDetail {
    id: string;
    firtName: string;
    lastName: string;
    emailId: string;
}
export interface PhysicianDetail {
    id: string;
    firtName: string;
    lastName: string;
    emailId: string;
}

