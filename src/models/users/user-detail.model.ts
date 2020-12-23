import { RoleModel } from ".";

export interface UserDetailModel {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    speciality: string;
    isInviteSend: boolean;
     roles?:RoleModel[];
     identityId:boolean;
}
