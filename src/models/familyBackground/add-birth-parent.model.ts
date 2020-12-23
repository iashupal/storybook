export interface AddBirthParentModel{
    id?:string;
    patientId?:string;
    guardianId?:string;
    fatherHighestLevelEducation?: number;
    motherHighestLevelEducation?: number;
    fatherAge?: number;
    motherAge?: number;
    motherName?: string;
    fatherName?:string;    
    fatherProfession:string;
    motherProfession:string;
    isFatherLiveWithChildFullTime?:boolean;
    isMotherLiveWithChildFullTime?:boolean;
    fatherMaritalStatus?: number;
    motherMaritalStatus?: number;
    childResidesWith?: number;
    contactWithBirthParent?: number;
    comments:string;
}