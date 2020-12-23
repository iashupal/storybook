export interface UserDetailResponseModel {
  userId: string;
  name: string;
  email: string;
  is_authenticated: string;
  roleAlias: string;
  roleName: string;
  isLastPasswordExpiring: boolean;
  initials:string;
}
