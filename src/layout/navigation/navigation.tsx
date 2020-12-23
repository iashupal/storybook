import React, { Fragment } from "react";
import "./navigation.scss";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import $ from "jquery";
import { setTimeout } from "timers";

export class NavigationBar extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      let winObj = window as any;
      if (winObj.InitSidebar) {
        winObj.InitSidebar();
      }
      if (winObj.toggleSidebar) {
        $("[data-toggle='sidebar']").click(winObj.toggleSidebar);
      }
      $(".menu-toggle").click(winObj.toggleNavBarS);
    }, 1000);
  }

  setCurrentRoutClass() {
    setTimeout(() => {
      $(".activenav")
        .parents(".dropdown")
        .addClass("expandtoggle")
        .addClass("toggled-s");
      $(".expandtoggle").find("ul:eq(0)").show();
    }, 0);
  }

  render() {
    this.setCurrentRoutClass();
    return (
      <Fragment>
        <div className="main-sidebar sidebar-style-2">
          <div className="sidebar-brand">
            <Link to="/">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </Link>
          </div>
          <ul className="sidebar-menu">
            <li className="dropdown main-menu-item">
              <NavLink
                to="/clinician/dashboard"
                className="nav-link dashboard"
                exact
              ></NavLink>
            </li>
            <li className="dropdown main-menu-item">
              <NavLink
                to="/clinician/patientmanagement"
                className="nav-link management"
                exact
              ></NavLink>
            </li>
            <li className="dropdown main-menu-item">
              <NavLink
                to="/clinician/patientdashboard"
                className="nav-link management-add"
                exact
              ></NavLink>
            </li>
            <li className="dropdown main-menu-item">
              <NavLink
                to="/patient/addPatient"
                className="nav-link management-add"
                exact
              ></NavLink>
            </li>
            <li className="dropdown main-menu-item">
              <NavLink
                to="/user/adduser/"
                className="nav-link add-patient"
                exact
              ></NavLink>
            </li>
            <li className="dropdown main-menu-item">
              <NavLink
                to="/medication/setting"
                className="nav-link medication-setting"
                exact
              ></NavLink>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//       current_route: state.name
//   }
// }

export default NavigationBar;
