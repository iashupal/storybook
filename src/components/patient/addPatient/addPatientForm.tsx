import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AddPatientModel } from "../models/add-patient";
import { DatePicker } from "antd";
import { Gender } from "../../../shared/enums/gender.enum";
import { Relationship } from "../../../shared/enums/relationship.enum";
import { Loader } from "../../../shared/loaders";
import moment from "moment";
import "../patient.scss";
import "./index.scss";

interface IProps {
  patient: AddPatientModel;
  isReadOnly: boolean;
  onSubmit: Function;
  onEditClick: Function;
  isSaving: boolean;
  tab: number;
}

export function AddPatientForm(props: IProps) {
  const {
    register,
    errors,
    handleSubmit,
    control,
    getValues,
    formState,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
    //shouldUnregister: true,
  });
  let patientModel = props.patient;
  const [gender, setGender] = useState(patientModel.gender);
  const formSubmit = (data) => {
    patientModel.id = props.patient.id;
    patientModel.emailId = data.emailId;
    patientModel.mr_No = data.mr_No;
    patientModel.firstName = data.firstName;
    patientModel.lastName = data.lastName;
    patientModel.guardianFirstName = data.guardianFirstName;
    patientModel.guardianLastName = data.guardianLastName;
    patientModel.contactNo = data.contactNo;
    patientModel.emailId = data.emailId;
    patientModel.addressModel.state = data.state;
    patientModel.addressModel.city = data.city;
    patientModel.addressModel.zipcode = data.zipcode;
    patientModel.addressModel.address1 = data.address1;
    patientModel.addressModel.address2 = data.address2;
    patientModel.guardianId = props.patient.guardianId;
    props.onSubmit({ model: patientModel, isAutoSave: false });
  };

  const handleSaveAndInviteClick = () => {
    patientModel.isInviteSend = true;
  };
  const handleSaveClick = () => {
    patientModel.isInviteSend = false;
  };

  const dateChange = (date) => {
    patientModel.dateOfBirth = new Date(date);
  };

  const relationChange = (data) => {
    patientModel.relationshipId = parseInt(data.target.value);
  };
  const changeToEdit = () => {
    props.onEditClick();
  };
  const genderChange = (data) => {
    patientModel.gender = parseInt(data.target.value);
    setGender(patientModel.gender);
  };
  const handleKeyUp = (event) => {
    if (!props.isReadOnly) {
      setValuesInModel();

      if (
        event.key == "Tab" &&
        patientModel.mr_No &&
        patientModel.guardianFirstName &&
        patientModel.guardianLastName
      ) {
        saveDataOnTabChange();
      }
    }
  };

  const saveDataOnTabChange = () => {
    if (!props.isSaving) {
      props.onSubmit({ model: patientModel, isAutoSave: true });
    }
  };

  function setValuesInModel() {
    let model = getValues();
    patientModel = Object.assign(patientModel, model);
  }
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="row">
        <div className="col-md-12">
          <div>
            <section className="child-info">
              <header className="info-header">
                <h3>Patient Information</h3>
              </header>
              <div className="form">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group form-field">
                      <label className="form-label">MR Number</label>
                      <input
                        type="text"
                        name="mr_No"
                        defaultValue={props.patient?.mr_No}
                        className={
                          !errors.mr_No
                            ? "form-control"
                            : "form-control  is-invalid"
                        }
                        ref={register({
                          required: "Please Fill MR No.",
                          maxLength: 128,
                        })}
                        onKeyUp={handleKeyUp}
                        readOnly={props.isReadOnly ? true : false}
                        placeholder="MR_No"
                      />
                      {errors.mr_No && (
                        <div className="invalid-feedback">
                          {errors.mr_No?.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group form-field">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        defaultValue={props.patient.firstName}
                        className={
                          !errors.firstName
                            ? "form-control"
                            : "form-control  is-invalid"
                        }
                        ref={register({
                          required: "Please Fill First Name.",
                          maxLength: 128,
                        })}
                        onKeyUp={handleKeyUp}
                        readOnly={props.isReadOnly ? true : false}
                        placeholder="First Name"
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">
                          {errors.firstName?.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group form-field">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        defaultValue={props.patient.lastName}
                        className={
                          !errors.lastName
                            ? "form-control"
                            : "form-control  is-invalid"
                        }
                        ref={register({
                          required: "Please Fill Last Name.",
                          maxLength: 128,
                        })}
                        onKeyUp={handleKeyUp}
                        readOnly={props.isReadOnly ? true : false}
                        placeholder="Last Name"
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">
                          {errors.lastName?.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="form-group form-field">
                      <label className="form-label">Date of Birth</label>
                      <DatePicker
                        onChange={dateChange}
                        className="datepicker"
                        placeholder="Select Date"
                        inputReadOnly={true}
                        disabled={props.isReadOnly ? true : false}
                        defaultValue={moment(props.patient.dateOfBirth)}
                      />
                      {errors.datepicker && (
                        <div className="invalid-feedback">
                          {errors.datepicker?.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group btn-select">
                      <div className="btn-addon btnGender">
                        <button
                          type="button"
                          className={
                            patientModel.gender == Gender.Male
                              ? "btn btn-sm btnGender_selected"
                              : "btn btn-sm btnGender_unselected"
                          }
                          name="male"
                          value={Gender.Male}
                          onClick={genderChange}
                          ref={register}
                          disabled={props.isReadOnly ? true : false}
                        >
                          Male
                        </button>
                        <button
                          type="button"
                          className={
                            patientModel.gender == Gender.Female
                              ? "btn btn-sm btnGender_selected"
                              : "btn btn-sm btnGender_unselected"
                          }
                          name="female"
                          onClick={genderChange}
                          disabled={props.isReadOnly ? true : false}
                          value={Gender.Female}
                          ref={register}
                        >
                          Female
                        </button>
                        <button
                          type="button"
                          className={
                            patientModel.gender == Gender.Others
                              ? "btn btn-sm btnGender_selected"
                              : "btn btn-sm btnGender_unselected"
                          }
                          name="others"
                          value={Gender.Others}
                          onClick={genderChange}
                          disabled={props.isReadOnly ? true : false}
                          ref={register}
                        >
                          Others
                        </button>
                      </div>
                    </div>
                    {errors.others && (
                      <div className="invalid-feedback">
                        {errors.others?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="child-info">
              <header className="info-header">
                <h3>Guardian/Parent Information</h3>
              </header>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group form-field">
                    <label className="form-label">Relationship</label>
                    <select
                      name="relationshipId"
                      defaultValue={props.patient.relationshipId}
                      onChange={relationChange}
                      className={
                        !errors.relationshipId
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      disabled={props.isReadOnly ? true : false}
                      ref={register}
                    >
                      <option value={Relationship.Father}>Father</option>
                      <option value={Relationship.Mother}>Mother</option>
                    </select>
                    <i className="fa fa-angle-down relation_arrow"></i>
                    {errors.relationshipId && (
                      <div className="invalid-feedback">
                        {errors.relationshipId?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group form-field">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="guardianFirstName"
                      defaultValue={props.patient.guardianFirstName}
                      placeholder="First Name"
                      className={
                        !errors.guardianFirstName
                          ? "form-control"
                          : "form-control is-invalid"
                      }
                      ref={register({
                        required: "Please Fill Guardian First Name.",
                        maxLength: 128,
                      })}
                      onKeyUp={handleKeyUp}
                      readOnly={props.isReadOnly ? true : false}
                    />
                    {errors.guardianFirstName && (
                      <div className="invalid-feedback">
                        {errors.guardianFirstName?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group form-field">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="guardianLastName"
                      defaultValue={props.patient.guardianLastName}
                      onKeyUp={handleKeyUp}
                      readOnly={props.isReadOnly ? true : false}
                      placeholder="Last Name"
                      className={
                        !errors.guardianLastName
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      ref={register({
                        required: "Please Fill Guardian Last Name.",
                        maxLength: 128,
                      })}
                    />
                    {errors.guardianLastName && (
                      <div className="invalid-feedback">
                        {errors.guardianLastName?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group form-field">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="tel"
                      name="contactNo"
                      defaultValue={props.patient.contactNo}
                      placeholder={"Contact Number"}
                      maxLength={10}
                      className={
                        !errors.contactNo
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      onKeyUp={handleKeyUp}
                      readOnly={props.isReadOnly ? true : false}
                      ref={register({
                        required: "Please Fill Contact No",
                        maxLength: 10,
                      })}
                    />
                    {errors.contactNo && (
                      <div className="invalid-feedback">
                        {errors.contactNo?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-md-7">
                  <div className="form-group form-field">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      name="emailId"
                      defaultValue={props.patient.emailId}
                      onKeyUp={handleKeyUp}
                      readOnly={
                        props.isReadOnly || props.patient.identityId
                          ? true
                          : false
                      }
                      placeholder="Email ID"
                      className={
                        !errors.emailId
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      ref={register({
                        required: "please Fill Email",
                        maxLength: 128,
                        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors.emailId && (
                      <div className="invalid-feedback">
                        {errors.emailId?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-11">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group form-field">
                        <input
                          type="text"
                          name="address1"
                          defaultValue={props.patient.addressModel.address1}
                          placeholder={"Address 1"}
                          className={
                            !errors.address1
                              ? "form-control"
                              : "form-control  is-invalid"
                          }
                          onKeyUp={handleKeyUp}
                          readOnly={props.isReadOnly ? true : false}
                          ref={register({
                            required: "Please Fill Address",
                            maxLength: 128,
                          })}
                        />
                        {errors.address1 && (
                          <div className="invalid-feedback">
                            {errors.address1?.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group form-field optional-field">
                        <span className="optional">optional</span>
                        <input
                          type="text"
                          className="form-control"
                          name="address2"
                          maxLength={128}
                          defaultValue={props.patient.addressModel.address2}
                          placeholder={"Address 2"}
                          onKeyUp={handleKeyUp}
                          readOnly={props.isReadOnly ? true : false}
                          ref={register}
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group form-field">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          name="city"
                          defaultValue={props.patient.addressModel.city}
                          onKeyUp={handleKeyUp}
                          readOnly={props.isReadOnly ? true : false}
                          placeholder="City"
                          className={
                            !errors.city
                              ? "form-control"
                              : "form-control  is-invalid"
                          }
                          ref={register({
                            required: "Please Fill City Name",
                            maxLength: 128,
                          })}
                        />
                        {errors.city && (
                          <div className="invalid-feedback">
                            {errors.city?.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group form-field">
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          name="state"
                          defaultValue={props.patient.addressModel.state}
                          onKeyUp={handleKeyUp}
                          readOnly={props.isReadOnly ? true : false}
                          placeholder="State"
                          className={
                            !errors.state
                              ? "form-control"
                              : "form-control  is-invalid"
                          }
                          //   onKeyUp={handleKeyUp}
                          ref={register({
                            required: "Please Fill State",
                            maxLength: 128,
                          })}
                        />
                        {errors.state && (
                          <div className="invalid-feedback">
                            {errors.state?.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group form-field">
                        <label className="form-label">Zip Code</label>
                        <input
                          type="text"
                          name="zipcode"
                          defaultValue={props.patient.addressModel.zipcode}
                          onKeyUp={handleKeyUp}
                          readOnly={props.isReadOnly ? true : false}
                          className={
                            !errors.zipcode
                              ? "form-control"
                              : "form-control  is-invalid"
                          }
                          placeholder="ZipCode"
                          ref={register({
                            required: "Please Fill Zip Code",
                            maxLength: 128,
                          })}
                        />
                        {errors.zipcode && (
                          <div className="invalid-feedback">
                            {errors.zipcode?.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Loader
              loading={props.isSaving}
              marginBottom="0px"
              marginTop="8px"
              width="368px"
            ></Loader>
            <div className="row">
              <div
                //   className={"col-md-11 " + (props.buttonHide ? "d-none" : "")}
                className="col-md-11 "
              >
                {!props.isSaving && (
                  <div className="button-group margin_b30">
                    <div className="text-right">
                      {!props.isReadOnly && !props.patient.identityId && (
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
                          Save
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
