import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Loader } from "../../../shared/loaders";
import { AddPhysicianModel } from "../models/add-physician";
import { DatePicker, AutoComplete, Select } from "antd";
import WeekwiseInfo from "../weekwiseInfo";
import "../patient.scss";
import { AddPatientMedicationModel } from "../models/add-patient-medication.model";
import moment from "moment";
import { MedicationListViewModel } from "../../../models/medication/medication-list-view.model";

interface IProps {
  physician: AddPhysicianModel;
  medication: AddPatientMedicationModel;
  medicationListViewModel: MedicationListViewModel[];
  onSubmit: Function;
  onEditClick: Function;
  tab: number;
  isSaving: boolean;
  patientId: string;
  isReadOnly: boolean;
  assignModel: Function;
}
export function AddPhysicianMedicationForm(props: IProps) {
  const { Option } = AutoComplete;
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
  });
  let physicianModel = { ...props.physician };
  let medicationModel = { ...props.medication };
  let medicationListViewModel = props.medicationListViewModel;
  const formSubmit = (data) => {
    physicianModel.speciality = data.speciality;
    physicianModel.hospitalName = data.hospitalName;
    physicianModel.pFirstName = data.pFirstName;
    physicianModel.pLastName = data.pLastName;
    physicianModel.patientId = props.patientId;
    medicationModel.trialNoOfWeeks =
      medicationModel.createPatientTrialWeekModels.length;
    if (checkForError()) {
      props.assignModel({ medication: medicationModel });
      return false;
    }
    props.onSubmit({
      physicianModel: physicianModel,
      medicationModel: medicationModel,
      isAutoSave: false,
    });
  };
  const checkForError = () => {
    let hasError = false;
    medicationModel.trialStartDateError = "";
    if (medicationModel.trialStartDate == null) {
      medicationModel.trialStartDateError = "Please Select Medication Date.";
      hasError = true;
    }
    if (medicationModel.createPatientTrialWeekModels.length > 0) {
      medicationModel.createPatientTrialWeekModels.forEach((x) => {
        x.createPatientTrailWeeklyMedicationModel.medicationFamilyError = "";
        if (x.createPatientTrailWeeklyMedicationModel.medicationId == null) {
          x.createPatientTrailWeeklyMedicationModel.medicationFamilyError =
            "Please Select Medication.";
          hasError = true;
        }
      });
    }

    let predate: Date | null | undefined = null;
    if (medicationModel.createPatientVisitModels.length > 0) {
      medicationModel.createPatientVisitModels.forEach((x) => {
        x.visitError = "";
        if (x.visitDate == null) {
          x.visitError = "Please Select Visit Date.";
          hasError = true;
        } else {
          if (predate != null && new Date(predate) >= new Date(x.visitDate)) {
            x.visitError =
              "Visit " +
              x.visitNo +
              " Should Be Greater Than Visit " +
              (parseInt(x.visitNo.toFixed()) - 1);
            hasError = true;
          }
        }
        predate = x.visitDate;
      });
    }

    return hasError;
  };
  const changeToEdit = () => {
    props.onEditClick();
  };
  const handleWeekChange = (medicineId, i) => {
    medicationModel.createPatientTrialWeekModels[
      i
    ].createPatientTrailWeeklyMedicationModel.medicationFamily = "";
    medicationModel.createPatientTrialWeekModels[
      i
    ].createPatientTrailWeeklyMedicationModel.medicationBrandName = "";
    medicationModel.createPatientTrialWeekModels[
      i
    ].createPatientTrailWeeklyMedicationModel.medicationDosage = "";
    medicationModel.createPatientTrialWeekModels[
      i
    ].createPatientTrailWeeklyMedicationModel.medicationDuration = "";
    medicationModel.createPatientTrialWeekModels[
      i
    ].createPatientTrailWeeklyMedicationModel.medicationFormat = "";
    medicationModel.createPatientTrialWeekModels[
      i
    ].createPatientTrailWeeklyMedicationModel.medicationRelease = "";
    props.assignModel({ medication: medicationModel });
    medicationListViewModel.find((x) => {
      if (x.id == medicineId) {
        medicationModel.createPatientTrialWeekModels[
          i
        ].createPatientTrailWeeklyMedicationModel.medicationId = medicineId;
        medicationModel.createPatientTrialWeekModels[
          i
        ].createPatientTrailWeeklyMedicationModel.medicationFamily = x.family;
        medicationModel.createPatientTrialWeekModels[
          i
        ].createPatientTrailWeeklyMedicationModel.medicationBrandName =
          x.brandName;
        medicationModel.createPatientTrialWeekModels[
          i
        ].createPatientTrailWeeklyMedicationModel.medicationDosage = x.dosage;
        medicationModel.createPatientTrialWeekModels[
          i
        ].createPatientTrailWeeklyMedicationModel.medicationDuration =
          x.duration;
        medicationModel.createPatientTrialWeekModels[
          i
        ].createPatientTrailWeeklyMedicationModel.medicationFormat = x.format;
        medicationModel.createPatientTrialWeekModels[
          i
        ].createPatientTrailWeeklyMedicationModel.medicationRelease = x.release;
        props.assignModel({ medication: medicationModel });
      }
    });
  };

  const handleKeyUp = (event) => {
    if (!props.isReadOnly) {
      setValuesInModel();
      if (
        event.key === "Tab" &&
        physicianModel.speciality &&
        physicianModel.pFirstName &&
        physicianModel.pLastName
      ) {
        saveDataOnTabChange();
      }
    }
  };

  const saveDataOnTabChange = () => {
    if (!props.isSaving) {
      props.onSubmit({ physicianModel: physicianModel, isAutoSave: true });
    }
  };
  const visitDateChange = (date, i) => {
    if (date == null) {
      medicationModel.createPatientVisitModels[i].visitDate = null;
    } else {
      medicationModel.createPatientVisitModels[i].visitDate = new Date(date);
    }
    props.assignModel({ medication: medicationModel });
  };
  const weekDateChange = (date) => {
    if (date == null) {
      medicationModel.trialStartDate = null;
      medicationModel.trialEndDate = null;
    } else {
      medicationModel.trialStartDate = new Date(date);
      medicationModel.trialEndDate = addDays(
        medicationModel.trialStartDate,
        34
      );
    }
    setWeekDates(medicationModel.trialStartDate);
  };

  function setWeekDates(date) {
    medicationModel.createPatientTrialWeekModels.map((row, i) =>
      date == null
        ? ((row.startDate = null), (row.endDate = null))
        : ((row.startDate = date),
          (row.endDate = addDays(date, 6)),
          (date = addDays(date, 7)))
    );
    props.assignModel({ medication: medicationModel });
  }
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  function setValuesInModel() {
    let model = getValues();
    physicianModel = Object.assign(physicianModel, model);
  }
  function formatDate(string) {
    var formDate = new Date(string).getFullYear();
    if (formDate == 1 || formDate == 1970) return "";
    else return new Date(string).toLocaleDateString();
  }

  const onSelect = (data: string, option: any, index: number) => {
    handleWeekChange(option.key, index);
  };
  const onChange = (data: string, option: any, i: number) => {
    if (option.key == undefined) {
      medicationModel.createPatientTrialWeekModels[
        i
      ].createPatientTrailWeeklyMedicationModel.medicationId = null;
      medicationModel.createPatientTrialWeekModels[
        i
      ].createPatientTrailWeeklyMedicationModel.medicationFamily = "";
      medicationModel.createPatientTrialWeekModels[
        i
      ].createPatientTrailWeeklyMedicationModel.medicationBrandName = "";
      medicationModel.createPatientTrialWeekModels[
        i
      ].createPatientTrailWeeklyMedicationModel.medicationDosage = "";
      medicationModel.createPatientTrialWeekModels[
        i
      ].createPatientTrailWeeklyMedicationModel.medicationDuration = "";
      medicationModel.createPatientTrialWeekModels[
        i
      ].createPatientTrailWeeklyMedicationModel.medicationFormat = "";
      medicationModel.createPatientTrialWeekModels[
        i
      ].createPatientTrailWeeklyMedicationModel.medicationRelease = "";
      props.assignModel({ medication: medicationModel });
    }
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="row">
        <div className="col-md-12">
          {/* physician section */}
          <section className="child-info">
            <header className="info-header">
              <h3>Physician Information</h3>
            </header>
            <div className="physician__form">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group form-field">
                    <label className="form-label">Speciality</label>
                    <input
                      type="text"
                      name="speciality"
                      defaultValue={props.physician?.speciality}
                      className={
                        !errors.speciality
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      ref={register({
                        required: "Please Fill Speciality.",
                        maxLength: 128,
                      })}
                      readOnly={props.isReadOnly ? true : false}
                      onKeyUp={handleKeyUp}
                      placeholder="Speciality"
                    />
                    {errors.speciality && (
                      <div className="invalid-feedback">
                        {errors.speciality?.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group form-field">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      name="pFirstName"
                      defaultValue={props.physician.pFirstName}
                      className={
                        !errors.pFirstName
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      ref={register({
                        required: "Please Fill First Name.",
                        maxLength: 128,
                      })}
                      readOnly={props.isReadOnly ? true : false}
                      onKeyUp={handleKeyUp}
                      placeholder="First Name"
                    />
                    {errors.pFirstName && (
                      <div className="invalid-feedback">
                        {errors.pFirstName?.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group form-field">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      name="pLastName"
                      defaultValue={props.physician.pLastName}
                      className={
                        !errors.pLastName
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      ref={register({
                        required: "Please Fill Last Name.",
                        maxLength: 128,
                      })}
                      readOnly={props.isReadOnly ? true : false}
                      onKeyUp={handleKeyUp}
                      placeholder="Last Name"
                    />
                    {errors.pLastName && (
                      <div className="invalid-feedback">
                        {errors.pLastName?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group form-field">
                    <label className="form-label">Hospital Name</label>
                    <input
                      type="text"
                      name="hospitalName"
                      defaultValue={props.physician.hospitalName}
                      className={
                        !errors.hospitalName
                          ? "form-control"
                          : "form-control  is-invalid"
                      }
                      readOnly={props.isReadOnly ? true : false}
                      ref={register}
                      onKeyUp={handleKeyUp}
                      placeholder="Hospital Name"
                    />
                    {errors.hospitalName && (
                      <div className="invalid-feedback">
                        {errors.hospitalName?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12"></div>
              </div>
            </div>
          </section>
          {/* medication section */}
          <section className="child-info">
            <header className="info-header">
              <h3>Medication Information</h3>
            </header>
            <div className="medicatn__frm__cover">
              <div className="row">
                <div className="col-md-3 med__week__colums">
                  <div className="form-group form-field">
                    <label className="form-label">Medication Start Date</label>

                    <Controller
                      render={({ onChange, onBlur, value, name, ref }) => (
                        <DatePicker
                          onChange={(e) => {
                            weekDateChange(e);
                          }}
                          className="datepicker"
                          placeholder="Select Date"
                          inputReadOnly={true}
                          disabled={props.isReadOnly ? true : false}
                          name={name}
                          value={
                            props.medication.trialStartDate == null
                              ? undefined
                              : moment(props.medication.trialStartDate)
                          }
                        />
                      )}
                      name="trialStartDate"
                      defaultValue={moment(props.medication.trialStartDate)}
                      control={control}
                    />
                    {medicationModel.trialStartDateError && (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {medicationModel.trialStartDateError}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Bind medication weeks details */}
                {medicationModel.createPatientTrialWeekModels &&
                  medicationModel.createPatientTrialWeekModels.map((row, i) => (
                    <div key={i} className="col-md-3 med__week__colums">
                      <WeekwiseInfo
                        weekCount={"Week " + row.weekNo}
                        weekDate={
                          row.startDate == null
                            ? ""
                            : formatDate(row.startDate?.toString())
                        }
                        styleName="medicatn_cover"
                        contents={[
                          <div className="medicatn__content">
                            <div className="medical-group medication-grp">
                              <label className="form-label">
                                Medication Family
                              </label>
                              <AutoComplete
                                className={"form-control autocomplete"}
                                placeholder={"Medication Family"}
                                onSelect={(data, option) =>
                                  onSelect(data, option, i)
                                }
                                onChange={(data, option) =>
                                  onChange(data, option, i)
                                }
                                defaultValue={
                                  row.createPatientTrailWeeklyMedicationModel
                                    .medicationFamily ?? undefined
                                }
                                disabled={props.isReadOnly ? true : false}
                                filterOption={(inputValue, option) =>
                                  option?.value
                                    .toUpperCase()
                                    .indexOf(inputValue.toUpperCase()) != -1
                                }
                              >
                                {props.medicationListViewModel.length > 0 &&
                                  props.medicationListViewModel.map(
                                    (row, j) => (
                                      <Option
                                        key={row.id || ""}
                                        value={row.family}
                                      >
                                        {" "}
                                        {row.family}{" "}
                                      </Option>
                                    )
                                  )}
                              </AutoComplete>
                              {row.createPatientTrailWeeklyMedicationModel
                                .medicationFamilyError && (
                                <div
                                  className="invalid-feedback"
                                  style={{ display: "block" }}
                                >
                                  {
                                    row.createPatientTrailWeeklyMedicationModel
                                      .medicationFamilyError
                                  }
                                </div>
                              )}
                            </div>
                            <div className="medical-group medication-grp">
                              <label className="form-label">Brand Name</label>
                              <input
                                type="text"
                                className={"form-control phone_border"}
                                name={"medicationBrandName" + (i + 1)}
                                value={
                                  row.createPatientTrailWeeklyMedicationModel
                                    ?.medicationBrandName
                                }
                                placeholder="Brand Name"
                                disabled={true}
                              />
                            </div>
                            <div className="medical-group medication-grp">
                              <label className="form-label"></label>
                              <input
                                type="text"
                                className={"form-control phone_border"}
                                name={"medicationDosage" + (i + 1)}
                                value={
                                  row.createPatientTrailWeeklyMedicationModel
                                    ?.medicationDosage
                                }
                                placeholder="Dosage"
                                disabled={true}
                              />
                            </div>

                            <div className="medical-group medication-grp">
                              <input
                                type="text"
                                className={"form-control phone_border"}
                                name={"medicationFormat" + (i + 1)}
                                value={
                                  row.createPatientTrailWeeklyMedicationModel
                                    ?.medicationFormat
                                }
                                placeholder="Format"
                                disabled={true}
                              />
                            </div>
                            <div className="medical-group medication-grp">
                              <input
                                type="text"
                                className={"form-control phone_border"}
                                name={"medicationDuration" + (i + 1)}
                                value={
                                  row.createPatientTrailWeeklyMedicationModel
                                    ?.medicationDuration
                                }
                                placeholder="Duration"
                                disabled={true}
                              />
                            </div>
                            <div className="medical-group medication-grp">
                              <input
                                type="text"
                                className={"form-control phone_border"}
                                name={"medicationRelease" + (i + 1)}
                                value={
                                  row.createPatientTrailWeeklyMedicationModel
                                    ?.medicationRelease
                                }
                                placeholder="Release"
                                disabled={true}
                              />
                            </div>
                          </div>,
                        ]}
                      />
                    </div>
                  ))}
              </div>
              {/* Bind Visit dates */}
              <div className="row">
                {medicationModel.createPatientVisitModels &&
                  medicationModel.createPatientVisitModels.map((row, i) => (
                    <div className="col-md-3 visit_datepicker">
                      <div className="form-group form-field">
                        <label className="form-label">
                          Visit Date {row.visitNo}
                        </label>
                        <DatePicker
                          onChange={(e) => visitDateChange(e, i)}
                          className="datepicker"
                          inputReadOnly={true}
                          placeholder="Select Date"
                          disabled={props.isReadOnly ? true : false}
                          // value={moment(row.visitDate)}
                          value={
                            row.visitDate == null
                              ? undefined
                              : moment(row.visitDate)
                          }
                        />
                        {row.visitError && (
                          <div
                            className="invalid-feedback"
                            style={{ display: "block" }}
                          >
                            {row.visitError}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
          <Loader
            loading={props.isSaving}
            marginBottom="0px"
            marginTop="8px"
            width="368px"
          ></Loader>
          <div className="medicatn__frm__cover">
            {!props.isSaving && (
              <div className="button-group margin_b30">
                <div className=" text-right">
                  {!props.isReadOnly && (
                    <button type="submit" className="btn btn-primary btn-save">
                      {" "}
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
    </form>
  );
}
