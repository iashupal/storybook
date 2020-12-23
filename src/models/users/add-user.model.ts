import { RoleModel } from "./role.model";


export interface AddUserModel{
    id:string | null;
    firstName?:string;
    lastName?:string;
    emailId?:string;
    speciality?:string;
    isInviteSend?:boolean;
    roles?:RoleModel[];
    identity?:boolean;
}