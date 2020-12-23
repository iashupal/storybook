import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AddUserModel, RoleModel } from "../../../models/users";
import { ShowErrorMessage } from "../../../shared/helpers";
import { Loader } from "../../../shared/loaders";
import MultiRoles from "./multiRoles";
import SpecialitySuggestion from "./specialitySuggestion";

interface IProps {
  user: AddUserModel;
  isReadOnly: boolean;
  onSubmit: Function;
  onEditClick: Function;
  isSaving: boolean;
  roleList: any[];
  isInviteSent?: boolean;
}
export function AddUserForm(props: IProps) {
  const { register, errors, handleSubmit, control, formState } = useForm();

  let userModel = props.user;
  const formSubmit = (data) => {
    if (!userModel.roles || userModel.roles.length <= 0) {
      ShowErrorMessage("Please Select Atleast One Role.");
      return;
    }
    userModel.id = props.user.id;
    userModel.emailId = data.emailId;
    userModel.firstName = data.firstName;
    userModel.lastName = data.lastName;
    userModel.speciality = data.speciality;
    props.onSubmit(userModel);
  };

  const handleSaveAndInviteClick = () => {
    userModel.isInviteSend = true;
  };
  const handleSaveClick = () => {
    userModel.isInviteSend = false;
  };
  const changeToEdit = () => {
    props.onEditClick();
  };
  const handleRole = (data: RoleModel[]) => {
    if (data != null && data.length > 0) {
      userModel.roles = [];
      data.forEach((x) => {
        userModel.roles?.push(x);
      });
    } else {
      userModel.roles = [];
    }
  };
  const onSpecialityChange = (data) => {
    userModel.speciality = data;
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <section className="info-section">
        <div className="info-title">
          <h3>User Information</h3>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                defaultValue={props.user?.firstName}
                className={
                  !errors.firstName
                    ? "form-control"
                    : " form-control is-invalid"
                }
                ref={register({
                  required: "First Name Can't Be Blank",
                  maxLength: 50,
                })}
                readOnly={props.isReadOnly ? true : false}
              />
              {errors.firstName && (
                <div className="invalid-feedback">
                  {errors.firstName?.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                defaultValue={props.user?.lastName}
                className={
                  !errors.lastName ? "form-control" : "form-control  is-invalid"
                }
                ref={register({
                  required: "Last Name Can't Be Blank",
                  maxLength: 50,
                })}
                readOnly={props.isReadOnly ? true : false}
              />
              {errors.lastName && (
                <div className="invalid-feedback">
                  {errors.lastName?.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            {/* {<SpecialitySuggestion specialityList={onSpecialityChange} />} */}
            <div className="form-group">
              <label className="form-label">Speciality</label>
              <input
                type="text"
                name="speciality"
                defaultValue={props.user.speciality}
                className="form-control"
                ref={register}
                readOnly={props.isReadOnly ? true : false}
              />
            </div>
          </div>
          <div className="col-md-3">
            <MultiRoles
              className={
                userModel.roles
                  ? "form-control"
                  : "form-control  is-invalid d-block"
              }
              options={props.roleList}
              getSelectedRoles={handleRole}
              selectedoption={props.user.roles}
              readOnly={props.isReadOnly ? true : false}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="emailId"
                maxLength={255}
                defaultValue={props.user?.emailId}
                placeholder="Email ID"
                className={
                  !errors.emailId ? "form-control" : "form-control  is-invalid"
                }
                readOnly={
                  props.isReadOnly || props.user.identity ? true : false
                }
                ref={register({
                  required: "Email Can't Be Blank",
                  maxLength: 128,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.emailId && (
                <div className="invalid-feedback">
                  {errors.emailId?.message
                    ? errors.emailId?.message
                    : "Email Is Not Valid."}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <Loader
            loading={props.isSaving}
            marginBottom="0px"
            marginTop="8px"
            width="368px"
          ></Loader>
        </div>
        {!props.isSaving && (
          <div className="row btn-box">
            <div className="col-md-6 text-right">
              {!props.isReadOnly && !props.user.identity && (
                <button
                  type="submit"
                  className="btn btn-primary btn-save invite-button"
                  onClick={handleSaveAndInviteClick}
                >
                  Save And Invite
                </button>
              )}
              {!props.isReadOnly && (
                <button
                  type="submit"
                  onClick={handleSaveClick}
                  className="btn btn-primary btn-save"
                >
                  Save {props.isReadOnly}
                </button>
              )}

              {props.isReadOnly && (
                <button
                  type="button"
                  className="btn btn-primary btn-save"
                  onClick={changeToEdit}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        )}
      </section>
    </form>
  );
}
