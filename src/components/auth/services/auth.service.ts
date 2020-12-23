import { AppConfig, HttpWrapper } from "../../../core";
import { AuthResponseModel } from "../models/auth.response.model";
import { AuthModel, UserDetailResponseModel } from "../models";

export class AuthService {
  private wrapper: HttpWrapper;
  constructor() {
    this.wrapper = new HttpWrapper();
  }

  getAccessToken(data: AuthModel) {
    const searchParams = Object.keys(data).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
    }).join('&');

    return this.wrapper.post<AuthResponseModel>(AppConfig.identityUrl+ 'connect/token', data, {
      method: "post",
      body: searchParams
    }, "application/x-www-form-urlencoded");
  }


  getGetUserInfo() {
    return this.wrapper.get<UserDetailResponseModel>(AppConfig.apiEndpoint + 'identity/identity');
  }

  getAccessTokenByRefreshToken(data: AuthModel) {
    return this.wrapper.post<AuthResponseModel>(AppConfig.identityUrl + 'connect/token', data);
  }
    logOut() {
        let returnUrl = "returnUrl=" + AppConfig.redirect_Uri;
        window.location.href = AppConfig.identityUrl + 'account/OidcLogout' + "?" + returnUrl
    }
} 