import React, { Component } from "react";
import { MapRoute } from "../routing/MapRoute";
import LayoutPage from "../layout/LayoutPage";
import { AuthResponseModel, UserDetailResponseModel } from "../components/auth/models";
import { HttpResponse, AppConfig } from "../core";
import {
  Decrypt,
  Encrypt,
  getCookie,
  GetUserInfo,
  setCookie,
  SetUserInfo,
  ShowException,
  ShowWarningMessage,
} from "../shared/helpers";
import moment from "moment";
import { AuthService } from "../components/auth/services/auth.service";
import SocialRoute from "../routing/SocialRoute";
import { Role } from "../shared/enums/role.enum";
interface IState {
  tokenInterval?: any | null;
  userName: string;
  role: string;
  loader: boolean;
  isPassExpire: boolean;
  email: string;
  initials: string;
}

export class SecurePage extends Component<any, IState> {
  private service: AuthService;
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      role: "",
      loader: false,
      isPassExpire: false,
      email: "",
      initials: "",
    };
    this.service = new AuthService();
  }
  getUserDetail() {
    this.setState({
      loader: true,
    });

    this.service
      .getGetUserInfo()
      .then((res: HttpResponse<UserDetailResponseModel>) => {
        if (res && res.result) {
          SetUserInfo(res.result);
          this.setState({}, () => {
            var user = GetUserInfo();
            this.setState({
              userName: user.name,
              role: user.roleName,
              isPassExpire: user.isLastPasswordExpiring,
              email: user.email,
              initials: user.initials,
            });
            this.setState(
              {
                loader: false,
              },
              () => {
                if (this.state.role == Role.Parent) {
                  this.props.history.push("/medical/medicalhistory/");
                }
              }
            );
          });
        }
      })
      .catch((ex) => {
        if (ex.status == 401) {
          //ShowException(ex.response.result ? ex.response.result : ex.response);
          localStorage.clear();
          window.location.href = window.location.origin + "/login";
        }
      });
  }

  getAccessTokenByRefreshToken = () => {
    let expire_in = localStorage.getItem("expire_in") || "";
    if (expire_in) {
      let dateDiffInMillSeconds = moment(expire_in).diff(moment());
      if (dateDiffInMillSeconds < 300000) {
        //Access token is about to expire
        let authData = {
          grant_type: AppConfig.refreshTokenGrantType,
          client_id: AppConfig.clientId,
          client_secret: AppConfig.clientSecret,
          refresh_token: Decrypt<string>(getCookie(AppConfig.refreshTokenKey)) as string,
          redirect_uri: "",
          code: null,
        };
        this.service
          .getAccessTokenByRefreshToken(authData)
          .then((res: HttpResponse<AuthResponseModel>) => {
            if (res && res.result) {
              let expire_in = moment().add(parseInt(res.result.expires_in), "seconds");
              localStorage.setItem("lg", "true");
              localStorage.setItem("expire_in", expire_in.toString());
              localStorage.setItem(AppConfig.tokenKey, Encrypt(res.result.id_token));
              let refresh_token = getCookie(AppConfig.refreshTokenKey);
              setCookie(AppConfig.refreshTokenKey, refresh_token, AppConfig.refreshTokenExpiry);
            }
          });
      }
    }
  };

  componentDidMount() {
    this.setState({
      tokenInterval: null,
    });
    this.getUserDetail();

    let tokenInterval = setInterval(this.getAccessTokenByRefreshToken, 60000);
    this.setState({
      tokenInterval: tokenInterval,
    });
  }

  componentWillUnmount() {
    // clear interval
    if (this.state.tokenInterval) {
      clearInterval(this.state.tokenInterval);
    }
  }
  render() {
    const { userName, role, loader, isPassExpire, email, initials } = this.state;
    return (
      <div className="main-wrapper">
        {!loader && (
          <div className="main-content">
            {role !== Role.Parent ? (
              <div>
                <MapRoute />
                <LayoutPage
                  userName={userName}
                  designation={role}
                  isPassExpire={isPassExpire}
                  email={email}
                  initials={initials}
                />
              </div>
            ) : (
              <div>
                <SocialRoute />
                <LayoutPage
                  userName={userName}
                  designation={role}
                  isPassExpire={isPassExpire}
                  email={email}
                  initials={initials}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
