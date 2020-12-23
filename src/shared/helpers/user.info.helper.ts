import { UserDetailResponseModel } from "../../components/auth/models/user.detail.response.model";
import { AppConfig } from "../../core";
import { Decrypt, Encrypt } from "./crypto.helper";

export const GetUserInfo = () => {
  let storage = localStorage.getItem(AppConfig.userInfoKey);
  if (storage == null) return {} as UserDetailResponseModel;
  let userInfo = Decrypt<UserDetailResponseModel>(storage);
  if (userInfo == "") return {} as UserDetailResponseModel;
  return userInfo as UserDetailResponseModel;
};
export const SetUserInfo = (model: UserDetailResponseModel) => {   
  localStorage.setItem(AppConfig.userInfoKey,Encrypt(model));
};
