import React, { Component } from "react";
import { AuthService } from "./services/auth.service";
import { HttpResponse } from "../../core";
import { AuthResponseModel } from "./models/auth.response.model";
import { AuthModel } from "./models/auth.model";
import { AppConfig } from "../../core";
import { Encrypt, setCookie } from "../../shared/helpers";
import moment from "moment";

export default class LoginCallback extends Component<any> {
  private service: AuthService;
  constructor(props) {
    super(props);
    this.service = new AuthService();
  }
  componentDidMount() {
    // this.props.location.search = "";
    // this.props.location.history= "";
    //
    if (this.getParameterByName("code", this.props.location.search)) {
      this.getResponse();
    }
    if (!this.getParameterByName("code", this.props.location.search)) {
      this.props.history.push("/login");
    }
  }

  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  getResponse() {
    let code = this.getParameterByName("code", this.props.location.search);
    let authData: AuthModel = {
      client_id: AppConfig.clientId,
      client_secret: AppConfig.clientSecret,
      grant_type: AppConfig.grantType,
      redirect_uri: AppConfig.redirect_Uri,
      code: code,
    };
    this.service.getAccessToken(authData).then((res: HttpResponse<AuthResponseModel>) => {
      if (res && res.result) {
        let expire_in = moment().add(parseInt(res.result.expires_in), "seconds");
        localStorage.setItem("lg", "true");
        localStorage.setItem("expire_in", expire_in.toString());
        localStorage.setItem(AppConfig.tokenKey, Encrypt(res.result.access_token));
        if (res.result.hasOwnProperty("refresh_token")) {
          setCookie(
            AppConfig.refreshTokenKey,
            Encrypt(res.result.refresh_token),
            AppConfig.refreshTokenExpiry
          );
        }
        this.props.history.push("/");
      } else {
        this.props.history.push("/login");
      }
    });
  }

  render() {
    return <div className="compLoader"></div>;
  }
}
