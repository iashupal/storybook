import React, { Component } from "react";
import { AuthService } from "../components/auth/services/auth.service";
import { GetUserInfo, setCookie } from "../shared/helpers";
import TopHeader from "./header/header";
import NavigationBar from "./navigation/navigation";
import "./styles.css";
import { AppConfig, HttpResponse } from "../core";
import { Role } from "../shared/enums/role.enum";
import { Modal, Button } from "antd";

export default class LayoutPage extends Component<any, any> {
  private service: AuthService;
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      designation: "",
      visible: false,
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    if (this.props.isPassExpire) {
      this.showModal();
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    var data = {
      returnUrl: window.location.href,
      email: this.props.email,
    };
    localStorage.clear();
    setCookie(AppConfig.refreshTokenKey, null, -1);
    window.location.href =
      AppConfig.identityUrl +
      "account/changepassword?email=" +
      data.email +
      "&returnUrl=" +
      data.returnUrl;
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  logOut = () => {
    localStorage.clear();
    // set cookie expiry time to now, so browser will automatically clear the cookie
    setCookie(AppConfig.refreshTokenKey, null, -1);
    this.service.logOut();
  };
  render() {
    return (
      <React.Fragment>
        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="Yes"
          cancelText="No"
          closable={false}
          maskClosable={false}
        >
          <p>
            Your password will expire in 5 days. Click Yes if you want to change it now and No if
            you want to change it later.
          </p>
        </Modal>
        <div className="header__wrapper">
          <TopHeader
            username={this.props.userName}
            designation={this.props.designation}
            logOut={this.logOut}
            initials={this.props.initials}
          />
        </div>
        {this.props.designation !== Role.Parent && <NavigationBar />}
      </React.Fragment>
    );
  }
}
