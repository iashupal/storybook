import React, { Component } from "react";
import "./user.scss";
import UserList from "./userList";
import UserHeader from "./userHeader";
import AddUser from "./addUser";
import imgAddUser from "../../assets/images/svg-icons/add-user.svg";
import imgProfile from "../../assets/images/icons/profile.png";
import imgNotification from "../../assets/images/svg-icons/notification.svg";

export class User extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  userSaved = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onAddNewClick = () => {
    this.props.history.push("/user/adduser");
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 aside-menu">
            <section className="registration">
              <div className="add-user">
                <button
                  type="button"
                  className="btn btn-primary btn-block add-user-btn"
                  onClick={this.onAddNewClick}
                >
                  <img src={imgAddUser} alt="user-img" />
                  Add User
                </button>
              </div>
            </section>
            <UserList {...this.props} counter={this.state.counter} />
          </div>
          <div className="col-md-10 main-section">
            <UserHeader imgNotification={imgNotification} imgProfile={imgProfile} />

            <div>
              <AddUser {...this.props} onUserSave={this.userSaved} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
