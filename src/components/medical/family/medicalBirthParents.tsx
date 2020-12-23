import React, { useEffect, useState } from "react";
import Heading from "../../heading";
import "../styles.css";
import { useForm } from "react-hook-form";
import { AddBirthParentModel } from "../../../models/familyBackground/add-birth-parent.model";
import { FamilyBackgroundService } from "../../../services/familyBackground";
import { HttpResponse } from "../../../core";
import { ShowSuccessMessage } from "../../../shared/helpers";
import { DropdownItemModel } from "../../../shared/models/dropdown.model";
import { MaritalStatus } from "../../../shared/enums/marital-status.enum";
import { Loader } from "../../../shared/loaders";
import { Button } from "antd";

function MedicalBirthParents(props: any) {
  let id = "";
  const { register, errors, handleSubmit, control, getValues, formState, setValue } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: undefined,
    context: undefined,
    criteriaMode: "firstError",
    shouldFocusError: true,
  });
  let initialModel = {} as AddBirthParentModel;
  let educationLevelModel = [] as DropdownItemModel[];
  let contactWithBirthParentModel = [] as DropdownItemModel[];
  let childResideWithModel = [] as DropdownItemModel[];
  useEffect(() => {
    getEducationLevel();
    getChildResidesWith();
    getContactWithBirthParent();
    getBirthParent();
  }, [props.id]);
  const [birthParentInfo, setBirthParentInfo] = useState(initialModel);
  const [isSaving, setIsSaving] = useState(false);
  const [educationLevel, setEducationLevel] = React.useState(educationLevelModel);
  const [contactWithBirthParent, setContactWithBirthParent] = React.useState(
    contactWithBirthParentModel
  );
  const [childResideWith, setChildResidesWith] = React.useState(childResideWithModel);
  const [motherMaritalStatus, setMotherMaritalStatus] = useState(
    birthParentInfo.motherMaritalStatus
  );
  const [fatherMaritalStatus, setFatherMaritalStatus] = useState(
    birthParentInfo.fatherMaritalStatus
  );
  const [isMotherLiveWithchildFullTime, setMotherLiveWithchildFullTime] = useState(
    birthParentInfo.isMotherLiveWithChildFullTime
  );
  const [isFatherLiveWithchildFullTime, setFatherLiveWithchildFullTime] = useState(
    birthParentInfo.isFatherLiveWithChildFullTime
  );
  const formSubmit = (data) => {
    setDataInModel(data);
    saveData({ model: birthParentInfo, isAutoSave: false });
  };
  const setDataInModel = (data) => {
    birthParentInfo.patientId = props.patientId;
    birthParentInfo.guardianId = props.parentId;
    birthParentInfo.fatherName = data.fatherName;
    birthParentInfo.motherName = data.motherName;
    birthParentInfo.fatherHighestLevelEducation = data.fatherHighestLevelEducation;
    birthParentInfo.motherHighestLevelEducation = data.motherHighestLevelEducation;
    birthParentInfo.fatherAge = data.fatherAge;
    birthParentInfo.motherAge = data.motherAge;
    birthParentInfo.fatherProfession = data.fatherProfession;
    birthParentInfo.motherProfession = data.motherProfession;
    birthParentInfo.childResidesWith = data.childResidesWith;
    birthParentInfo.contactWithBirthParent = data.contactWithBirthParent;
    birthParentInfo.comments = data.comments;
    setBirthParentInfo(birthParentInfo);
  };
  const saveData = (data: any) => {
    let birthParent = data.model;
    if (isSaving) {
      return;
    }
    setIsSaving(true);
    new FamilyBackgroundService()
      .postAddBirthParent(birthParent)
      .then((res: HttpResponse<any>) => {
        if (res && res.result) {
          birthParentInfo.id = res.result;
          setBirthParentInfo(birthParentInfo);
          ShowSuccessMessage("Data Saved Successfully.");
          setIsSaving(false);
          if (!data.isAutoSave) {
            props.tabChange();
          }
        }
      })
      .catch(() => {
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
      saveData({ model: birthParentInfo, isAutoSave: true });
    }
  };
  const getEducationLevel = () => {
    new FamilyBackgroundService()
      .getEducationLevel()
      .then((res: HttpResponse<DropdownItemModel[]>) => {
        if (res && res.result) {
          setEducationLevel(res.result);
        }
      });
  };
  const getChildResidesWith = () => {
    new FamilyBackgroundService()
      .getChildResidesWith()
      .then((res: HttpResponse<DropdownItemModel[]>) => {
        if (res && res.result) {
          setChildResidesWith(res.result);
        }
      });
  };
  const getContactWithBirthParent = () => {
    new FamilyBackgroundService()
      .getContactWithBirthParent()
      .then((res: HttpResponse<DropdownItemModel[]>) => {
        if (res && res.result) {
          setContactWithBirthParent(res.result);
        }
      });
  };
  const getBirthParent = () => {
    new FamilyBackgroundService()
      .getBirthParent(props.patientId)
      .then((res: HttpResponse<AddBirthParentModel>) => {
        if (res && res.result) {
          setBirthParentInfo(res.result);
        }
      });
  };
  const handleMotherEducationLevel = (event: any) => {
    let value = event.target.value;
    birthParentInfo.motherHighestLevelEducation = value;
  };
  const handleFatherEducationLevel = (event: any) => {
    let value = event.target.value;
    birthParentInfo.fatherHighestLevelEducation = value;
  };
  const handleChildResidesWith = (event: any) => {
    let value = event.target.value;
    birthParentInfo.childResidesWith = value;
  };
  const handleContactWithBirthParent = (event: any) => {
    let value = event.target.value;
    birthParentInfo.contactWithBirthParent = value;
  };
  function setValuesInModel() {
    let model = getValues();
    setDataInModel(model);
  }
  const liveWithChildFullTime = (type, isChecked) => {
    if (type == 1) {
      birthParentInfo.isMotherLiveWithChildFullTime = isChecked;
      setMotherLiveWithchildFullTime(birthParentInfo.isMotherLiveWithChildFullTime);
    } else {
      birthParentInfo.isFatherLiveWithChildFullTime = isChecked;
      setFatherLiveWithchildFullTime(birthParentInfo.isFatherLiveWithChildFullTime);
    }
  };
  const motherMaritalStatusChange = (data) => {
    birthParentInfo.motherMaritalStatus = parseInt(data.target.value);
    setMotherMaritalStatus(birthParentInfo.motherMaritalStatus);
  };
  const fatherMaritalStatusChange = (data) => {
    birthParentInfo.fatherMaritalStatus = parseInt(data.target.value);
    setFatherMaritalStatus(birthParentInfo.fatherMaritalStatus);
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="medical__birth">
      <div className="medical__birth_innerWrapper">
        <Heading heading="Birth Parents" subHeading="" styleName="" />
        <p>
          The following section pertains to the child’s birth or biological parents only. Even if
          you are not the child’s parent. please complete this section as accurately as possible
        </p>

        <div className="form form-box">
          <div className="medical__birth_formRow1">
            <div className="medical-group">
              <label className="form-label">Birth Mother's Name</label>
              <input
                type="text"
                className={!errors.motherName ? "form-control" : "form-control  is-invalid"}
                placeholder="Mother's Name"
                name="motherName"
                defaultValue={birthParentInfo.motherName}
                onKeyUp={handleKeyUp}
                ref={register({
                  required: "Please Fill Mother's Name.",
                  maxLength: 128,
                })}
              />
              {errors.motherName && (
                <div className="invalid-feedback">{errors.motherName?.message}</div>
              )}
            </div>
            <div className="medical-group">
              <label className="form-label">Highest level education completed</label>
              <select
                name="motherHighestLevelEducation"
                ref={register({
                  required: "Please select Highest level education completed.",
                })}
                className={
                  !errors.motherHighestLevelEducation
                    ? "form-control phone_border"
                    : "form-control phone_border  is-invalid"
                }
                defaultValue={birthParentInfo.motherHighestLevelEducation}
                onChange={handleMotherEducationLevel}
              >
                <option value="">None</option>
                {educationLevel.map((item, index) => (
                  <option
                    key={index}
                    selected={
                      item.value ==
                      (birthParentInfo.motherHighestLevelEducation == null
                        ? 0
                        : birthParentInfo.motherHighestLevelEducation.toString())
                    }
                    value={item.value}
                  >
                    {item.text}
                  </option>
                ))}
              </select>
              <i className="fa fa-angle-down arrow"></i>
              {errors.motherHighestLevelEducation && (
                <div className="invalid-feedback">
                  {errors.motherHighestLevelEducation?.message}
                </div>
              )}
            </div>

            <div className="medical-group">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="motherAge"
                ref={register({
                  required: "Please Fill Age.",
                  maxLength: 4,
                })}
                className={!errors.motherAge ? "form-control" : "form-control  is-invalid"}
                defaultValue={birthParentInfo.motherAge}
                placeholder=""
                onKeyUp={handleKeyUp}
              />
              {errors.motherAge && (
                <div className="invalid-feedback">{errors.motherAge?.message}</div>
              )}
            </div>
          </div>
          <div className="medical__birth_formRow2">
            <div className="medical-group">
              <label className="form-label">Current Profession</label>
              <input
                type="text"
                name="motherProfession"
                className={!errors.motherProfession ? "form-control" : "form-control  is-invalid"}
                defaultValue={birthParentInfo.motherProfession}
                ref={register({
                  required: "Please Fill Current Profession.",
                  maxLength: 128,
                })}
                onKeyUp={handleKeyUp}
              />
              {errors.motherProfession && (
                <div className="invalid-feedback">{errors.motherProfession?.message}</div>
              )}
            </div>
            <div className="medical-group btn-select">
              <label className="form-label">Live with child full time?</label>
              <div className="btn-addon btnChild">
                <button
                  type="button"
                  onClick={() => liveWithChildFullTime(1, true)}
                  className={
                    birthParentInfo.isMotherLiveWithChildFullTime == true ||
                    birthParentInfo.isMotherLiveWithChildFullTime == null
                      ? "btn btn-sm btnChild_yes btn_selected"
                      : "btn btn-sm btnChild_yes btn_unselected"
                  }
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={
                    birthParentInfo.isMotherLiveWithChildFullTime == false
                      ? "btn btn-sm btnChild_no btn_selected"
                      : "btn btn-sm btnChild_no btn_unselected"
                  }
                  onClick={() => liveWithChildFullTime(1, false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          <div className="medical__birth_formRow3">
            <div className="medical-group btn-select">
              <label className="form-label">Marital Status</label>
              <div className="btn-addon btnStatus">
                <button
                  type="button"
                  value={MaritalStatus.Married}
                  ref={register}
                  onClick={motherMaritalStatusChange}
                  className={
                    birthParentInfo.motherMaritalStatus == MaritalStatus.Married ||
                    birthParentInfo.motherMaritalStatus == null
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                >
                  Married
                </button>
                <button
                  type="button"
                  ref={register}
                  className={
                    birthParentInfo.motherMaritalStatus == MaritalStatus.Separeted
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.Separeted}
                  onClick={motherMaritalStatusChange}
                >
                  Separated
                </button>
                <button
                  type="button"
                  ref={register}
                  className={
                    birthParentInfo.motherMaritalStatus == MaritalStatus.Widowed
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.Widowed}
                  onClick={motherMaritalStatusChange}
                >
                  Widowed
                </button>
                <button
                  type="button"
                  ref={register}
                  className={
                    birthParentInfo.motherMaritalStatus == MaritalStatus.Divorced
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.Divorced}
                  onClick={motherMaritalStatusChange}
                >
                  Divorced
                </button>

                <button
                  type="button"
                  ref={register}
                  className={
                    birthParentInfo.motherMaritalStatus == MaritalStatus.SingleOrNeverMarried
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.SingleOrNeverMarried}
                  onClick={motherMaritalStatusChange}
                >
                  Single/Never Married
                </button>
              </div>
            </div>
          </div>
          <div className="medical__birth_formRow1">
            <div className="medical-group">
              <label className="form-label">Birth Father's Name</label>
              <input
                type="text"
                name="fatherName"
                ref={register({
                  required: "Please Fill Father's Name.",
                  maxLength: 128,
                })}
                className={!errors.fatherName ? "form-control" : "form-control  is-invalid"}
                defaultValue={birthParentInfo.fatherName}
                placeholder="Father's Name"
                onKeyUp={handleKeyUp}
              />
              {errors.fatherName && (
                <div className="invalid-feedback">{errors.fatherName?.message}</div>
              )}
            </div>
            <div className="medical-group">
              <label className="form-label">Highest level education completed</label>
              <select
                name="fatherHighestLevelEducation"
                ref={register({
                  required: "Please select Highest level education completed.",
                })}
                className={
                  !errors.fatherHighestLevelEducation
                    ? "form-control phone_border"
                    : "form-control phone_border  is-invalid"
                }
                defaultValue={birthParentInfo.fatherHighestLevelEducation}
                onChange={handleFatherEducationLevel}
              >
                <option value="">None</option>
                {educationLevel.map((item, index) => (
                  <option
                    key={index}
                    selected={
                      item.value ==
                      (birthParentInfo.fatherHighestLevelEducation == null
                        ? 0
                        : birthParentInfo.fatherHighestLevelEducation.toString())
                    }
                    value={item.value}
                  >
                    {item.text}
                  </option>
                ))}
              </select>
              <i className="fa fa-angle-down arrow"></i>
              {errors.fatherHighestLevelEducation && (
                <div className="invalid-feedback">
                  {errors.fatherHighestLevelEducation?.message}
                </div>
              )}
            </div>
            <div className="medical-group">
              <label className="form-label">Age</label>
              <input
                type="text"
                name="fatherAge"
                ref={register({
                  required: "Please Fill Age.",
                  maxLength: 4,
                })}
                className={!errors.fatherAge ? "form-control" : "form-control  is-invalid"}
                defaultValue={birthParentInfo.fatherAge}
                placeholder=""
                onKeyUp={handleKeyUp}
              />
              {errors.fatherAge && (
                <div className="invalid-feedback">{errors.fatherAge?.message}</div>
              )}
            </div>
          </div>
          <div className="medical__birth_formRow2">
            <div className="medical-group">
              <label className="form-label">Current Profession</label>
              <input
                type="text"
                name="fatherProfession"
                ref={register({
                  required: "Please Fill Current Profession.",
                  maxLength: 128,
                })}
                className={!errors.fatherProfession ? "form-control" : "form-control  is-invalid"}
                defaultValue={birthParentInfo.fatherProfession}
                onKeyUp={handleKeyUp}
              />
              {errors.fatherProfession && (
                <div className="invalid-feedback">{errors.fatherProfession?.message}</div>
              )}
            </div>
            <div className="medical-group btn-select">
              <label className="form-label">Live with child full time?</label>
              <div className="btn-addon btnGender">
                <button
                  type="button"
                  className={
                    birthParentInfo.isFatherLiveWithChildFullTime == true ||
                    birthParentInfo.isFatherLiveWithChildFullTime == null
                      ? "btn btn-sm btnChild_yes btn_selected"
                      : "btn btn-sm btnChild_yes btn_unselected"
                  }
                  onClick={() => liveWithChildFullTime(2, true)}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className={
                    birthParentInfo.isFatherLiveWithChildFullTime == false
                      ? "btn btn-sm btnChild_no btn_selected"
                      : "btn btn-sm btnChild_no btn_unselected"
                  }
                  onClick={() => liveWithChildFullTime(2, false)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
          <div className="medical__birth_formRow3">
            <div className="medical-group btn-select">
              <label className="form-label">Marital Status</label>
              <div className="btn-addon btnStatus">
                <button
                  type="button"
                  value={MaritalStatus.Married}
                  onClick={fatherMaritalStatusChange}
                  className={
                    birthParentInfo.fatherMaritalStatus == MaritalStatus.Married ||
                    birthParentInfo.fatherMaritalStatus == null
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                >
                  Married
                </button>
                <button
                  type="button"
                  className={
                    birthParentInfo.fatherMaritalStatus == MaritalStatus.Separeted
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.Separeted}
                  onClick={fatherMaritalStatusChange}
                >
                  Separated
                </button>
                <button
                  type="button"
                  className={
                    birthParentInfo.fatherMaritalStatus == MaritalStatus.Widowed
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.Widowed}
                  onClick={fatherMaritalStatusChange}
                >
                  Widowed
                </button>
                <button
                  type="button"
                  className={
                    birthParentInfo.fatherMaritalStatus == MaritalStatus.Divorced
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.Divorced}
                  onClick={fatherMaritalStatusChange}
                >
                  Divorced
                </button>

                <button
                  type="button"
                  className={
                    birthParentInfo.fatherMaritalStatus == MaritalStatus.SingleOrNeverMarried
                      ? "btn btn-sm btnStatus_married btn_selected"
                      : "btn btn-sm btnStatus_married btn_unselected"
                  }
                  value={MaritalStatus.SingleOrNeverMarried}
                  onClick={fatherMaritalStatusChange}
                >
                  Single/Never Married
                </button>
              </div>
            </div>
          </div>
          <div className="medical__birth_formRow4">
            <div className="medical-group">
              <label className="form-label">Child Resides with</label>
              <select
                className={
                  !errors.childResidesWith
                    ? "form-control phone_border"
                    : "form-control phone_border  is-invalid"
                }
                name="childResidesWith"
                defaultValue={birthParentInfo.childResidesWith}
                onChange={handleChildResidesWith}
                ref={register({
                  required: "Please select Child Resides with.",
                })}
              >
                <option value="">None</option>
                {childResideWith.map((item, index) => (
                  <option
                    key={index}
                    selected={
                      item.value ==
                      (birthParentInfo.childResidesWith == null
                        ? 0
                        : birthParentInfo.childResidesWith.toString())
                    }
                    value={item.value}
                  >
                    {item.text}
                  </option>
                ))}
              </select>
              <i className="fa fa-angle-down arrow"></i>
              {errors.childResidesWith && (
                <div className="invalid-feedback">{errors.childResidesWith?.message}</div>
              )}
            </div>
            <div className="medical-group">
              <label className="form-label">Contact with birth parent is</label>
              <select
                name="contactWithBirthParent"
                className={
                  !errors.contactWithBirthParent
                    ? "form-control phone_border"
                    : "form-control phone_border  is-invalid"
                }
                defaultValue={birthParentInfo.contactWithBirthParent}
                ref={register({
                  required: "Please select contact with birth parent.",
                })}
                onChange={handleContactWithBirthParent}
              >
                <option value="">None</option>
                {contactWithBirthParent.map((item, index) => (
                  <option
                    key={index}
                    selected={
                      item.value ==
                      (birthParentInfo.contactWithBirthParent == null
                        ? 0
                        : birthParentInfo.contactWithBirthParent.toString())
                    }
                    value={item.value}
                  >
                    {item.text}
                  </option>
                ))}
              </select>
              <i className="fa fa-angle-down arrow"></i>
              {errors.contactWithBirthParent && (
                <div className="invalid-feedback">{errors.contactWithBirthParent?.message}</div>
              )}
              {/* </Form.Item> */}
            </div>
          </div>
          <div className="medical__birth_formRow5">
            <div className="medical-group textarea_group">
              <label className="form-label">Comments</label>
              <textarea
                name="comments"
                ref={register}
                className="form-control textarea"
                defaultValue={birthParentInfo.comments}
                onKeyUp={handleKeyUp}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="btnContainer">
          <Button
            type="default"
            size="large"
            icon={<i className="fa fa-long-arrow-left"></i>}
            className="back_btn"
            onClick={() => props.parentTabChange(0)}
          >
            Back
          </Button>
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
      </div>
      <Loader loading={isSaving} marginBottom="0px" marginTop="8px" width="368px"></Loader>
    </form>
  );
}
export default MedicalBirthParents;
