import { AddressModel } from "../../../shared/models/address.model";
import { AddPhysicianModel } from "./add-physician";

export interface AddPatientModel {
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
    adopted?: number;
    grade?: string;
    birthPlace?: string;
    personCompletingForm?: string;
    relationshipWithPersonCompletingForm?: string;
    motherName?: string;
    fatherName?: string;
    workPhoneNo?: string;
    guardianId?: string | null;
    identityId?: string | null;
    addressModel: AddressModel;
    physicianModel:AddPhysicianModel;
    
}