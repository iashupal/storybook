import React, { Component, Fragment } from "react";
import { HttpResponse } from "../../../core";
import { ShowErrorMessage, ShowSuccessMessage } from "../../../shared/helpers";
import { AddUserModel } from "../../../models/users/add-user.model";
import { RoleModel, UserDetailModel } from "../../../models/users";
import { UserService } from "../../../services/user";
import { AddUserForm } from "./addUserForm";

interface IState {
  roleList: RoleModel[];
  isLoading: boolean;
  isReadonly: boolean;
  user: AddUserModel;
  reRenderForm: boolean;
  isInviteSent?: boolean;
}

export default class AddUser extends Component<any, IState> {
  private userService: UserService;
  id: string = "";
  isComponentMounted: boolean = false;
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.userService = new UserService();
  }

  initialState: IState = {
    roleList: [],
    isLoading: false,
    isReadonly: false,
    user: {} as AddUserModel,
    reRenderForm: false,
    isInviteSent: false,
  };

  componentDidUpdate() {
    if (this.isComponentMounted) {
      this.loadData();
    }
  }
  componentDidMount() {
    this.isComponentMounted = true;
    this.getRoles();
  }

  loadData() {
    if (this.props.match.params.id && this.id != this.props.match.params.id) {
      this.id = this.props.match.params.id;
      this.userService
        .getUserById(this.props.match.params.id)
        .then((res: HttpResponse<UserDetailModel>) => {
          if (res && res.result) {
            let user: AddUserModel = {
              id: res.result.id,
              emailId: res.result.email,
              firstName: res.result.firstName,
              lastName: res.result.lastName,
              isInviteSend: res.result.isInviteSend,
              speciality: res.result.speciality,
              roles: res.result.roles,
              identity: res.result.identityId,
            };
            this.setState(
              {
                user: user,
                isReadonly: true,
                reRenderForm: true,
              },
              () => this.setState({ reRenderForm: false })
            );
          }
        })
        .catch((ex) => {});
    }
  }
  onEditClick = () => {
    this.setState({ isReadonly: false });
  };
  getRoles() {
    this.userService
      .getRole()
      .then((res: HttpResponse<RoleModel[]>) => {
        if (res && res.result) {
          this.setState({
            roleList: res.result,
          });
        }
      })
      .catch((ex) => {});
  }

  postData = (user: AddUserModel) => {
    this.setState({
      isInviteSent: user.isInviteSend,
    });
    this.setLoading(true);
    this.userService
      .postUser(user)
      .then((res: HttpResponse<string>) => {
        if (res && res.result) {
          if (user.isInviteSend) {
            ShowSuccessMessage("Invite Sent Successfully.");
          } else if (user.id != null && user.id != "") {
            ShowSuccessMessage("Data Updated Successfully.");
          } else {
            ShowSuccessMessage("Data Saved Successfully.");
          }

          this.setLoading(false);
          if (user.id != null && user.id != "") {
            this.props.onUserSave();
            this.setState({ isReadonly: true });
            this.props.history.push("/user/adduser/" + res.result);
          } else {
            this.props.history.push("/user/adduser/" + res.result);
          }
        }
      })
      .catch((ex) => {
        this.setLoading(false);
      });
  };
  private setLoading(loading: boolean) {
    this.setState({ isLoading: loading });
  }
  render() {
    return (
      <Fragment>
        {!this.state.reRenderForm && (
          <AddUserForm
            isReadOnly={this.state.isReadonly}
            isSaving={this.state.isLoading}
            onEditClick={this.onEditClick}
            onSubmit={this.postData}
            user={this.state.user}
            roleList={this.state.roleList}
            isInviteSent={this.state.isInviteSent}
          />
        )}
      </Fragment>
    );
  }
}
