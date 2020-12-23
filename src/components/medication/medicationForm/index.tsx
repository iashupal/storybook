import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import "../styles.css";
import { AddMedicationModel } from "../../../models/medication/add-medication.model";
import { MedicationService } from "../../../services/medication";
import { HttpResponse } from "../../../core";
import { ShowSuccessMessage } from "../../../shared/helpers";
import { DropdownItemModel } from "../../../shared/models/dropdown.model";
import { Loader } from "../../../shared/loaders";

interface IProps {
  medicationModel: AddMedicationModel;
  isSaving: boolean;
  saveData: Function;
  formatModel: DropdownItemModel[];
  durationModel: DropdownItemModel[];
  releaseModel: DropdownItemModel[];
  isEditMode: boolean;
  reset: Function;
  onFormatChange: Function;
  onDurationChange: Function;
  onReleaseChange: Function;
}

function MedicationForm(props: IProps) {
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
  });

  let initialModel = {} as AddMedicationModel;
  let medicationInfo = props.medicationModel;

  const setDataInModel = (data) => {
    medicationInfo.id =
      props.medicationModel.id != null
        ? props.medicationModel.id
        : medicationInfo.id;
    medicationInfo.family = data.family;
    medicationInfo.brandName = data.brandName;
    medicationInfo.genericName = data.genericName;
    medicationInfo.dosage = data.dosage;
  };
  const formSubmit = (data, event) => {
    setDataInModel(data);
    reset();
    props.saveData(medicationInfo);
  };
  const handleReset = () => {
    reset();
    props.reset();
  };

  const handleFormat = (event: any) => {
    let value = event.target.value;
    medicationInfo.format = value;
    props.onFormatChange(value);
  };
  const handleDuration = (event: any) => {
    let value = event.target.value;
    medicationInfo.duration = value;
    props.onDurationChange(value);
  };
  const handleRelease = (event: any) => {
    let value = event.target.value;
    medicationInfo.release = value;
    props.onReleaseChange(value);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="medication__form__wrap"
    >
      <div>
        <div className="medical-group medication-grp">
          <label className="form-label">Medication Family</label>
          <input
            type="text"
            name="family"
            className={
              !errors.family
                ? "form-control phone_border"
                : "form-control  is-invalid"
            }
            defaultValue={medicationInfo.family}
            placeholder="Medication Family"
            ref={register({
              required: "Please Fill Medication Family.",
              maxLength: 128,
            })}
          />
          {errors.family && (
            <div className="invalid-feedback">{errors.family?.message}</div>
          )}
        </div>
        <div className="medical-group medication-grp">
          <label className="form-label"></label>
          <input
            type="text"
            name="brandName"
            className={
              !errors.brandName
                ? "form-control phone_border"
                : "form-control  is-invalid"
            }
            defaultValue={medicationInfo.brandName}
            placeholder="Brand Name"
            ref={register({
              required: "Please Fill Brand Name.",
              maxLength: 128,
            })}
          />
          {errors.brandName && (
            <div className="invalid-feedback">{errors.brandName?.message}</div>
          )}
        </div>
        <div className="medical-group medication-grp">
          <label className="form-label"></label>
          <input
            type="text"
            name="genericName"
            className="form-control phone_border"
            defaultValue={medicationInfo.genericName}
            placeholder="Generic Name"
            ref={register({
              maxLength: 128,
            })}
          />
        </div>
        <div className="medical-group medication-grp">
          <label className="form-label"></label>
          <input
            type="text"
            name="dosage"
            className="form-control phone_border"
            defaultValue={medicationInfo.dosage}
            placeholder="Dosage"
            ref={register({
              maxLength: 128,
            })}
          />
        </div>

        <div className="medical-group medication-grp">
          <select
            className="form-control phone_border"
            name="format"
            defaultValue={medicationInfo.format}
            onChange={handleFormat}
            ref={register}
          >
            <option value={""}> Select Format</option>
            {props.formatModel.map((item, index) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
          <i className="fa fa-angle-down med_arrow"></i>
        </div>
        <div className="medical-group medication-grp">
          <select
            name="duration"
            className="form-control phone_border"
            defaultValue={medicationInfo.duration}
            onChange={handleDuration}
            ref={register}
          >
            <option value={""}> Select Duration</option>
            {props.durationModel.map((item, index) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
          <i className="fa fa-angle-down med_arrow"></i>
        </div>
        <div className="medical-group medication-grp">
          <select
            name="release"
            className="form-control phone_border"
            defaultValue={medicationInfo.release}
            onChange={handleRelease}
            ref={register}
          >
            <option value={""}>Select Release </option>
            {props.releaseModel.map((item, index) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
          <i className="fa fa-angle-down med_arrow"></i>
        </div>
      </div>
      <div className="saving-form">
        <Loader
          loading={props.isSaving}
          marginBottom="0px"
          marginTop="8px"
          width="368px"
        ></Loader>
      </div>
      <div className="button_wrapper">
        {!props.isSaving && (
          <Button
            type="primary"
            size="large"
            className="btn_reset"
            onClick={handleReset}
          >
            Reset
          </Button>
        )}
        {!props.isSaving && !props.isEditMode && (
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="btn_add"
          >
            Add
          </Button>
        )}
        {!props.isSaving && props.isEditMode && (
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className=" btn_add"
          >
            Update
          </Button>
        )}
      </div>
    </form>
  );
}
export default MedicationForm;
