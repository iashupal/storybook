import React, { useState } from "react";
import Heading from "../../components/heading";
import Search from "../../components/search";
import "./index.css";
import { EyeOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Badge, Popover } from "antd";

import profile from "../../assets/images/icons/user-icon.png";
import notification from "../../assets/images/svg-icons/notification.svg";
import { AppConfig } from "../../core";

const TopHeader = (props) => {
  const LogOut = () => {
    props.logOut();
  };
  const [search, setSearch] = useState("");
  return (
    <header className="header">
      <div></div>
      {/* <Heading heading="" subHeading="" styleName="heading__style" /> */}
      <h3 className="heading">{props.heading}</h3>
      <div className="socialHeader__right">
        <div className="search__wrapper">
          <Search
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search"
            variants=""
            name="search"
          />
        </div>
        <div className="ccf_notificatn">
          <img src={notification} alt="notification" className="notification" />
          <Badge count={5} className="badge"></Badge>
        </div>
        <div className="user-info">
          <Popover
            placement="bottomRight"
            trigger="click"
            content={
              <div className="ccf_menu">
                <ul>
                  {/* <li>
                    <EyeOutlined className="menu_icons" />
                    <Link to="#">View Profile</Link>
                  </li> */}
                  <li onClick={LogOut}>
                    <UploadOutlined className="menu_icons" />
                    <p>Log out</p>
                  </li>
                </ul>
              </div>
            }
          >
            <div style={{ cursor: "pointer" }}>
              <div>
                <span className="profile-icon">{props.initials}</span>
                {/* <Popover
                  placement="bottomLeft"
                  trigger="hover"
                  content={<span>{props.username}</span>}
                  className="user_name_hover"
                > */}
                <p className="ccf_username">
                  {props.username} <br /> <span>{props.designation}</span>
                </p>
                <i className="far fa-angle-down caret-icon"></i>
                {/* </Popover> */}
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </header>
  );
};
//OidcLogout
export default TopHeader;
