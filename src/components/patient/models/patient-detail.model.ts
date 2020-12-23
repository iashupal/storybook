import { AddressModel } from "../../../shared/models/address.model";

export interface PatientDetailModel {
    id?: string | null;
    mr_No?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: Date | null;
    gender?: number | null;
    relationshipId?: number;
    guardianFirstName?: string;
    guardianLastName?: string;
    contactNo?: string;
    emailId?: string;
    isInviteSend?: boolean;
    addressModel: AddressModel;
    guardianId?: string | null;
    identityId?: string | null;
    adopted?: number;
    grade?: string;
    birthPlace?: string;
    personCompletingForm?: string;
    relationshipWithPersonCompletingForm?: string;
    motherName?: string;
    fatherName?: string;
    workPhoneNo: string;
    teacherId: string | null;
    teacherFirstName: string;
    teacherLastName?: string;
    teacherEmailId: string;
    schoolDistrict: string;
    schoolContactNo: string;
    isTeacherAccountActivate: boolean;
    physicianId?: string | null;
    physicianFirstName?: string;
    physicianLastName?: string;
    hospitalName?: string;
    speciality?: string;
    physicianEmailId?:string;
    physicianPhoneNo?:string;

}