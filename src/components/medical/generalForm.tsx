import React, { useEffect, useState } from "react";
import Heading from "../heading";
import { DatePicker, Button } from "antd";
import "../../layout/medicalHistory/styles.scss";
import "./styles.css";
import { PatientGeneralInfoModel } from "../../models/patient/patient-general-info.model";
import moment from "moment";
import { Gender } from "../../shared/enums/gender.enum";
import { Option } from "../../shared/enums/option.enum";
import { Controller, useForm } from "react-hook-form";
import { HttpResponse } from "../../core";
import { PatientService } from "../patient/services";
import { PatientDetailModel } from "../patient/models/patient-detail.model";
import { MedicalHistoryService } from "../../services/medicalHistory";
import { ShowSuccessMessage } from "../../shared/helpers";
import { Loader } from "../../shared/loaders";

interface IProps {
  id: string;
  isFormSave: Function;
}

export function GeneralForm(props: IProps) {
  let id = "";
  const {
    register,
    errors,
    handleSubmit,
    control,
    getValues,
    formState,
    setValue,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
  });
  useEffect(() => {
    if (id != props.id) {
      id = props.id;
      loadData();
    }
  }, [props.id]);
  let initialModel = {
    patientInfoModel: {
      addressModel: {},
      physicianModel: {},
    },
  } as PatientGeneralInfoModel;

  const [patientInfo, setPatintInfo] = useState(initialModel);
  const [adopted, setAdopted] = useState(patientInfo.patientInfoModel.adopted);
  const [isSaving, setIsSaving] = useState(false);
  const handleInviteClick = () => {
    if (
      patientInfo.tFirstName &&
      patientInfo.tLastName &&
      patientInfo.tEmailId
    ) {
      patientInfo.isInviteSend = true;
      saveData({ model: patientInfo, isAutoSave: false });
    }
  };
  const [gender, setGender] = useState(patientInfo.patientInfoModel?.gender);
  const dateChange = (date) => {
    patientInfo.patientInfoModel.dateOfBirth = new Date(date);
    setValue(
      "dob",
      moment(
        patientInfo.patientInfoModel.dateOfBirth
          ? new Date(patientInfo.patientInfoModel.dateOfBirth)
          : new Date()
      )
    );
  };
  const genderChange = (data) => {
    patientInfo.patientInfoModel.gender = parseInt(data.target.value);
    setGender(patientInfo.patientInfoModel.gender);
  };
  const adoptedChange = (data) => {
    patientInfo.patientInfoModel.adopted = parseInt(data.target.value);
    setAdopted(patientInfo.patientInfoModel.adopted);
  };
  const setDataInModel = (data) => {
    patientInfo.patientInfoModel.birthPlace = data.birthPlace;
    patientInfo.patientInfoModel.firstName = data.firstName;
    patientInfo.patientInfoModel.lastName = data.lastName;
    patientInfo.patientInfoModel.grade = data.grade;
    patientInfo.patientInfoModel.contactNo = data.contactNo;
    patientInfo.patientInfoModel.workPhoneNo = data.workPhoneNo;
    patientInfo.patientInfoModel.personCompletingForm = data.personCompleteForm;
    patientInfo.patientInfoModel.relationshipWithPersonCompletingForm =
      data.relationshipWithPersonCompletingForm;
    patientInfo.patientInfoModel.motherName = data.motherName;
    patientInfo.patientInfoModel.fatherName = data.fatherName;
    patientInfo.patientInfoModel.addressModel.state = data.state;
    patientInfo.patientInfoModel.addressModel.city = data.city;
    patientInfo.patientInfoModel.addressModel.zipcode = data.zipcode;
    patientInfo.patientInfoModel.addressModel.address1 = data.address1;
    patientInfo.patientInfoModel.addressModel.address2 = data.address2;
    patientInfo.tFirstName = data.tFirstName;
    patientInfo.tLastName = data.tLastName;
    patientInfo.schoolContactNo = data.schoolContactNo;
    patientInfo.schoolDistrict = data.schoolDistrict;
    patientInfo.tEmailId = data.tEmailId;
    patientInfo.patientInfoModel.physicianModel.pFirstName = data.pFirstName;
    patientInfo.patientInfoModel.physicianModel.pLastName = data.pLastName;
    patientInfo.patientInfoModel.physicianModel.pEmailId = data.pEmailId;
    patientInfo.patientInfoModel.physicianModel.pPhoneNo = data.pPhoneNo;

    setPatintInfo(patientInfo);
  };
  const formSubmit = (data) => {
    setDataInModel(data);
    saveData({ model: patientInfo, isAutoSave: false });
  };
  const loadData = () => {
    setIsSaving(true);
    new PatientService()
      .getUserById(props.id)
      .then((res: HttpResponse<PatientDetailModel>) => {
        if (res && res.result) {
          let patient: PatientGeneralInfoModel = {
            teacherId: res.result.teacherId,
            tFirstName: res.result.teacherFirstName,
            tLastName: res.result.teacherLastName,
            tEmailId: res.result.teacherEmailId,
            schoolDistrict: res.result.schoolDistrict,
            schoolContactNo: res.result.schoolContactNo,
            isInviteSend: false,
            isTeacherAccountActivate: res.result.isTeacherAccountActivate,
            patientInfoModel: {
              id: res.result.id,
              guardianId: res.result.guardianId,
              mr_No: res.result.mr_No,
              firstName: res.result.firstName,
              lastName: res.result.lastName,
              dateOfBirth: res.result.dateOfBirth,
              gender: res.result.gender,
              relationshipId: res.result.relationshipId,
              guardianFirstName: res.result.guardianFirstName,
              guardianLastName: res.result.guardianLastName,
              contactNo: res.result.contactNo,
              emailId: res.result.emailId,
              adopted: res.result.adopted
                ? res.result.adopted
                : (patientInfo.patientInfoModel.adopted = Option.yes),
              grade: res.result.grade,
              birthPlace: res.result.birthPlace,
              personCompletingForm: res.result.personCompletingForm,
              relationshipWithPersonCompletingForm:
                res.result.relationshipWithPersonCompletingForm,
              motherName: res.result.motherName,
              fatherName: res.result.fatherName,
              workPhoneNo: res.result.workPhoneNo,
              addressModel: {
                address1: res.result.addressModel.address1,
                address2: res.result.addressModel.address2,
                city: res.result.addressModel.city,
                state: res.result.addressModel.state,
                zipcode: res.result.addressModel.zipcode,
                addressId: res.result.addressModel.addressId,
              },
              physicianModel: {
                id: res.result.physicianId,
                pLastName: res.result.physicianLastName,
                pFirstName: res.result.physicianFirstName,
                pEmailId: res.result.physicianEmailId,
                pPhoneNo: res.result.physicianPhoneNo,
                patientId: res.result.id,
              },
            },
          };

          setPatintInfo(patient);
          setValue(
            "dob",
            moment(
              patient.patientInfoModel.dateOfBirth
                ? new Date(patient.patientInfoModel.dateOfBirth)
                : new Date()
            )
          );
          setIsSaving(false);
        }
      })
      .catch((ex) => {
        setIsSaving(false);
      });
  };
  const saveData = (data: any) => {
    let patient = data.model;
    // patient.id = this.state.patient.id;
    //patient.guardianId = this.state.patient.guardianId;
    if (isSaving) {
      return;
    }
    setIsSaving(true);
    new MedicalHistoryService()
      .postUser(patient)
      .then((res: HttpResponse<any>) => {
        if (res && res.result) {
          let patientObj = patientInfo;
          patientObj.patientInfoModel.guardianId = res.result.guardianId;
          patientObj.patientInfoModel.id = res.result.patientId;
          patientObj.teacherId = res.result.teacherId;
          patientObj.patientInfoModel.physicianModel.id =
            res.result.physicianId;
          setPatintInfo(patientObj);

          if (patient.isInviteSend) {
            ShowSuccessMessage("Invite Sent Successfully.");
            props.isFormSave();
            patient.isInviteSend = false; //for not repeating same message
          } else {
            ShowSuccessMessage("Data Saved Successfully.");
            props.isFormSave();
          }
          setIsSaving(false);
        }
      })

      .catch((ex) => {
        setIsSaving(false);
      });
  };
  const handleKeyUp = (event) => {
    setValuesInModel();

    if (event.key == "Tab") {
      saveDataOnTabChange();
    }
  };

  const saveDataOnTabChange = () => {
    if (!isSaving) {
      saveData({ model: patientInfo, isAutoSave: true });
    }
  };

  function setValuesInModel() {
    let model = getValues();
    setDataInModel(model);
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="general__form">
      <section className="child-info">
        <Heading
          heading="Child Information"
          subHeading=""
          styleName="general__heading"
        />
        <div className="form form_wrapper">
          <div className="medical-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className={
                !errors.firstName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.firstName}
              placeholder="First Name"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill First Name.",
                maxLength: 128,
              })}
            />
            {errors.firstName && (
              <div className="invalid-feedback">
                {errors.firstName?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className={
                !errors.lastName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.lastName}
              placeholder="Last Name"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Last Name.",
                maxLength: 128,
              })}
            />
            {errors.lastName && (
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Grade</label>
            <input
              type="text"
              name="grade"
              className={
                !errors.grade ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.grade}
              placeholder="Grade"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Grade.",
                maxLength: 128,
              })}
            />
            {errors.grade && (
              <div className="invalid-feedback">{errors.grade?.message}</div>
            )}
          </div>

          <div className="medical-group dob">
            <label className="form-label">Date of Birth</label>
            <Controller
              render={({ onChange, onBlur, value, name, ref }) => (
                <DatePicker
                  onChange={(e) => {
                    dateChange(e);
                  }}
                  className="datepicker"
                  inputReadOnly={true}
                  name={name}
                  value={value}
                  placeholder="Select Date"
                />
              )}
              name="dob"
              defaultValue={moment(patientInfo.patientInfoModel.dateOfBirth)}
              control={control}
            />
          </div>
          <div className="medical-group btn-select">
            <label className="form-label">Gender</label>
            <div className="btn-addon btnGender">
              <button
                type="button"
                name="male"
                className={
                  patientInfo.patientInfoModel.gender == Gender.Male
                    ? "btn btn-sm btnGender_selected"
                    : "btn btn-sm btnGender_unselected"
                }
                value={Gender.Male}
                onClick={genderChange}
                ref={register}
              >
                Male
              </button>
              <button
                type="button"
                name="female"
                className={
                  patientInfo.patientInfoModel.gender == Gender.Female
                    ? "btn btn-sm btnGender_selected"
                    : "btn btn-sm btnGender_unselected"
                }
                value={Gender.Female}
                onClick={genderChange}
                ref={register}
              >
                Female
              </button>
              <button
                type="button"
                name="others"
                className={
                  patientInfo.patientInfoModel.gender == Gender.Others
                    ? "btn btn-sm btnGender_selected"
                    : "btn btn-sm btnGender_unselected"
                }
                value={Gender.Others}
                onClick={genderChange}
                ref={register}
              >
                Others
              </button>
            </div>
          </div>

          <div className="medical-group">
            <label className="form-label">Birthplace</label>
            <input
              type="text"
              name="birthPlace"
              className={
                !errors.birthPlace ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.birthPlace}
              placeholder="Birthplace"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Birth Place.",
                maxLength: 128,
              })}
            />
            {errors.birthPlace && (
              <div className="invalid-feedback">
                {errors.birthPlace?.message}
              </div>
            )}
          </div>

          <div className="medical-group btn-select">
            <label className="form-label" style={{ display: "block" }}>
              Adopted
            </label>
            <div className="btn-addon btnGender">
              <button
                type="button"
                name="yes"
                className={
                  patientInfo.patientInfoModel.adopted == Option.yes
                    ? "btn btn-sm btnGender_selected"
                    : "btn btn-sm btnGender_unselected"
                }
                value={Option.yes}
                onClick={adoptedChange}
                ref={register}
              >
                Yes
              </button>
              <button
                type="button"
                name="no"
                className={
                  patientInfo.patientInfoModel.adopted == Option.No
                    ? "btn btn-sm btnGender_selected"
                    : "btn btn-sm btnGender_unselected"
                }
                value={Option.No}
                onClick={adoptedChange}
                ref={register}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="child-info">
        <Heading
          heading="Parent Information"
          subHeading=""
          styleName="general__heading"
        />
        <div className="form__parent">
          <div className="medical-group">
            <label className="form-label">Person Completing Form</label>
            <input
              type="text"
              name="personCompleteForm"
              className={
                !errors.personCompleteForm
                  ? "form-control"
                  : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.personCompletingForm}
              placeholder="Person Completing Form"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Person Completing Form.",
                maxLength: 128,
              })}
            />
            {errors.personCompleteForm && (
              <div className="invalid-feedback">
                {errors.personCompleteForm?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Relationship</label>
            <input
              type="text"
              className={
                !errors.relationshipWithPersonCompletingForm
                  ? "form-control"
                  : "form-control  is-invalid"
              }
              name="relationshipWithPersonCompletingForm"
              defaultValue={
                patientInfo.patientInfoModel
                  .relationshipWithPersonCompletingForm
              }
              placeholder="Relationship"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Relationship.",
                maxLength: 128,
              })}
            />
            {errors.relationshipWithPersonCompletingForm && (
              <div className="invalid-feedback">
                {errors.relationshipWithPersonCompletingForm?.message}
              </div>
            )}
          </div>
        </div>

        <div className="form_parent__row2">
          <div className="medical-group">
            <label className="form-label">Mother’s Name</label>
            <input
              type="text"
              name="motherName"
              className={
                !errors.motherName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.motherName}
              placeholder="Mother’s Name"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Mother's Name.",
                maxLength: 128,
              })}
            />
            {errors.motherName && (
              <div className="invalid-feedback">
                {errors.motherName?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Father’s Name</label>
            <input
              type="text"
              name="fatherName"
              className={
                !errors.fatherName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.fatherName}
              placeholder="Father’s Name"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Father's Name.",
                maxLength: 128,
              })}
            />
            {errors.fatherName && (
              <div className="invalid-feedback">
                {errors.fatherName?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label"></label>
            <input
              type="tel"
              maxLength={10}
              name="contactNo"
              className={
                !errors.contactNo
                  ? "form-control phone_border"
                  : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.contactNo}
              placeholder="Home Phone Number"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Home Phone Number.",
              })}
            />
            {errors.contactNo && (
              <div className="invalid-feedback">
                {errors.contactNo?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label"></label>
            <input
              type="tel"
              name="workPhoneNo"
              maxLength={10}
              className={
                !errors.workPhoneNo
                  ? "form-control phone_border"
                  : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.workPhoneNo}
              placeholder="Work Phone Number"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Work Phone Number.",
              })}
            />
            {errors.workPhoneNo && (
              <div className="invalid-feedback">
                {errors.workPhoneNo?.message}
              </div>
            )}
          </div>
        </div>
        <div className="form_parent__row3">
          <div className="medical-group">
            <label className="form-label"></label>
            <input
              type="text"
              name="address1"
              className="form-control phone_border"
              defaultValue={patientInfo.patientInfoModel.addressModel.address1}
              placeholder="Address 1"
              onKeyUp={handleKeyUp}
              ref={register}
            />
          </div>

          <div className="medical-group">
            <label className="form-label"></label>
            <input
              type="text"
              name="address2"
              className="form-control phone_border"
              defaultValue={patientInfo.patientInfoModel.addressModel.address2}
              placeholder="Address 2"
              onKeyUp={handleKeyUp}
              ref={register}
            />
          </div>

          <div className="medical-group">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className={
                !errors.city ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.addressModel.city}
              placeholder="City"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill City.",
                maxLength: 128,
              })}
            />
            {errors.city && (
              <div className="invalid-feedback">{errors.city?.message}</div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">State</label>
            <input
              type="text"
              name="state"
              className={
                !errors.state ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.addressModel.state}
              placeholder="State"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill State.",
                maxLength: 128,
              })}
            />
            {errors.state && (
              <div className="invalid-feedback">{errors.state?.message}</div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Zip Code</label>
            <input
              type="text"
              name="zipcode"
              className={
                !errors.zipcode ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.patientInfoModel.addressModel.zipcode}
              placeholder="Zip Code"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Zipcode.",
                maxLength: 128,
              })}
            />
            {errors.zipcode && (
              <div className="invalid-feedback">{errors.zipcode?.message}</div>
            )}
          </div>
        </div>
      </section>

      <section className="child-info">
        <Heading
          heading="Teacher Information"
          subHeading=""
          styleName="general__heading"
        />
        <div className="form form_teacher">
          <div className="medical-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="tFirstName"
              className={
                !errors.tFirstName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.tFirstName}
              placeholder="First Name"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill  First Name.",
                maxLength: 128,
              })}
            />
            {errors.tFirstName && (
              <div className="invalid-feedback">
                {errors.tFirstName?.message}
              </div>
            )}
          </div>
          <div className="medical-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="tLastName"
              className={
                !errors.tLastName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.tLastName}
              placeholder="Last Name"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill  Last Name.",
                maxLength: 128,
              })}
            />
            {errors.tLastName && (
              <div className="invalid-feedback">
                {errors.tLastName?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">School District</label>
            <input
              type="text"
              name="schoolDistrict"
              className={
                !errors.schoolDistrict
                  ? "form-control"
                  : "form-control  is-invalid"
              }
              defaultValue={patientInfo.schoolDistrict}
              placeholder="School District"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill  School District.",
                maxLength: 128,
              })}
            />
            {errors.schoolDistrict && (
              <div className="invalid-feedback">
                {errors.schoolDistrict?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">School Phone</label>
            <input
              type="tel"
              maxLength={10}
              name="schoolContactNo"
              className={
                !errors.schoolContactNo
                  ? "form-control"
                  : "form-control  is-invalid"
              }
              defaultValue={patientInfo.schoolContactNo}
              placeholder="School Phone"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill School Phone Number.",
              })}
            />

            {errors.schoolContactNo && (
              <div className="invalid-feedback">
                {errors.schoolContactNo?.message}
              </div>
            )}
          </div>
        </div>
        <div className="form form_teacher__row2">
          <div className="medical-group">
            <label className="form-label">Email ID</label>
            <input
              type="text"
              name="tEmailId"
              className={
                !errors.tEmailId ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={patientInfo.tEmailId}
              placeholder="Email ID"
              onKeyUp={handleKeyUp}
              readOnly={patientInfo.isTeacherAccountActivate ? true : false}
              ref={register({
                required: "Please Fill Email Id.",
                maxLength: 128,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.tEmailId && (
              <div className="invalid-feedback">
                {errors.tEmailId?.message
                  ? errors.tEmailId?.message
                  : "Email Is Not Valid."}
              </div>
            )}
          </div>
          {!patientInfo.isTeacherAccountActivate && (
            <Button
              type="primary"
              size="large"
              className="teacher__invite"
              onClick={handleInviteClick}
            >
              Invite
            </Button>
          )}
        </div>
      </section>

      <section className="child-info">
        <Heading
          heading="Physician Information"
          subHeading=""
          styleName="general__heading"
        />
        <div className="form form_physician">
          <div className="medical-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="pFirstName"
              className={
                !errors.pFirstName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={
                patientInfo.patientInfoModel.physicianModel.pFirstName
              }
              onKeyUp={handleKeyUp}
              placeholder="First Name"
              ref={register({
                required: "Please Fill First Name.",
                maxLength: 128,
              })}
            />
            {errors.pFirstName && (
              <div className="invalid-feedback">
                {errors.pFirstName?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="pLastName"
              className={
                !errors.pLastName ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={
                patientInfo.patientInfoModel.physicianModel.pLastName
              }
              placeholder="Last Name"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Last Name.",
                maxLength: 128,
              })}
            />
            {errors.pLastName && (
              <div className="invalid-feedback">
                {errors.pLastName?.message}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Email ID</label>
            <input
              type="text"
              name="pEmailId"
              className={
                !errors.pEmailId ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={
                patientInfo.patientInfoModel.physicianModel.pEmailId
              }
              placeholder="Email ID"
              onKeyUp={handleKeyUp}
              ref={register({
                required: "Please Fill Email Id.",
                maxLength: 128,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.pEmailId && (
              <div className="invalid-feedback">
                {errors.pEmailId?.message
                  ? errors.pEmailId?.message
                  : "Email Is Not Valid."}
              </div>
            )}
          </div>

          <div className="medical-group">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              maxLength={10}
              name="pPhoneNo"
              className={
                !errors.pPhoneNo ? "form-control" : "form-control  is-invalid"
              }
              defaultValue={
                patientInfo.patientInfoModel.physicianModel.pPhoneNo
              }
              onKeyUp={handleKeyUp}
              placeholder="Phone"
              ref={register({
                required: "Please Fill Phone Number.",
              })}
            />
            {errors.pPhoneNo && (
              <div className="invalid-feedback">{errors.pPhoneNo?.message}</div>
            )}
          </div>
        </div>
      </section>
      <Loader
        loading={isSaving}
        marginBottom="0px"
        marginTop="8px"
        width="368px"
      ></Loader>
      <div className="btnContainer">
        <Button
          type="primary"
          size="large"
          htmlType="submit"
          className="btn_add"
          icon={<i className="fa fa-long-arrow-right"></i>}
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default GeneralForm;
