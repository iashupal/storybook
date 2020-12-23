export interface AddPhysicianModel{
    id?: string | null;
    speciality?: string;
    pFirstName?: string;
    pLastName?: string;
    hospitalName?: string;
    patientId?:string | null;
    pEmailId?:string;
    pPhoneNo?:string;
}