import React from "react";
import Heading from "../../../heading";
import { Button } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import "../../styles.css";
import { Sibling } from "../../../../shared/enums/sibling-enum";
import { SiblingRelationship } from "../../../../shared/enums/sibling-relationship.enum";
import { useForm } from "react-hook-form";
import { AddSiblingPostModel } from "../../../../models/familyBackground/sibling/add-sibling-post.model";
import { AddSiblingModel } from "../../../../models/familyBackground/sibling/add-sibling.model";
import { Loader } from "../../../../shared/loaders";

interface IProps {
  siblingList: AddSiblingPostModel;
  onSubmit: Function;
  isSaving: boolean;
  patientId: string;
  assignModel: Function;
  previousTabChange: Function;
  deleteSibling: Function;
}
export default function MedicalSiblingsAndBirthOrderForm(props: IProps) {
  let siblingListModel = props.siblingList;
  let initailModel = {
    id: "",
    name: "",
    // siblingType: null,
    // relationshipType: null,
  } as AddSiblingModel;
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

  const formSubmit = () => {
    if (!checkForError()) {
      props.onSubmit({ siblingListModel: siblingListModel, isAutoSave: false });
    }
  };

  const handleNameChange = (event, i) => {
    siblingListModel.siblings[i].name = event.target.value;
    props.assignModel({ siblingListModel: siblingListModel });
  };

  const handleAgeInputChange = (event, i) => {
    siblingListModel.siblings[i].age = parseInt(event.target.value);
    props.assignModel({ siblingListModel: siblingListModel });
  };

  const handleSiblingTypeChange = (event, i) => {
    siblingListModel.siblings[i].siblingType = parseInt(event.target.value);
    props.assignModel({ siblingListModel: siblingListModel });
  };

  const handleRelationshipTypeChange = (event, i) => {
    siblingListModel.siblings[i].relationshipType = parseInt(
      event.target.value
    );
    props.assignModel({ siblingListModel: siblingListModel });
  };
  const checkForError = () => {
    if (siblingListModel.siblings.length > 0) {
      let hasError = false;
      siblingListModel.siblings.forEach((x) => {
        x.nameError = "";
        if (x.name == "") {
          x.nameError = "Please Fill Name.";
          hasError = true;
        }
        x.ageError = "";
        if (x.age == null || x.age == 0) {
          x.ageError = "Please Fill Age.";
          hasError = true;
        }
        x.siblingTypeError = "";
        if (x.siblingType == null || x.siblingType == 0) {
          x.siblingTypeError = "Please Select Sibling.";
          hasError = true;
        }
        x.relationshipTypeError = "";
        if (x.relationshipType == null || x.relationshipType == 0) {
          x.relationshipTypeError = "Please Select Relationship.";
          hasError = true;
        }
      });
      return hasError;
    }
  };
  const handleKeyUp = (event, i) => {
    if (
      event.key === "Tab" &&
      (siblingListModel.siblings[i].name ||
        siblingListModel.siblings[i].age ||
        siblingListModel.siblings[i].siblingType ||
        siblingListModel.siblings[i].relationshipType)
    ) {
      saveDataOnTabChange();
    }
  };

  const saveDataOnTabChange = () => {
    if (!props.isSaving) {
      props.onSubmit({ siblingListModel: siblingListModel, isAutoSave: true });
    }
  };

  const handleRemoveClick = (index) => {
    let idToDelete = siblingListModel.siblings[index].id;
    if (idToDelete != "") {
      props.deleteSibling(idToDelete);
    }
    siblingListModel.siblings.splice(index, 1);
    props.assignModel({ siblingListModel: siblingListModel });
  };
  const handleAddClick = () => {
    siblingListModel.siblings.push(initailModel);
    props.assignModel({ siblingListModel: siblingListModel });
  };

  return (
    <div className="medical__birth">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="medical__birth_innerWrapper">
          <Heading
            heading="Siblings & Birth Orders"
            subHeading=""
            styleName=""
          />
          <p>
            List the names and ages of each sibling of the child, by birth
            order, oldest child listed first. Indicate all sibling relations to
            the child (i.e brother or sister) and whether the sibling is a
            natural, step or half-sibling.
          </p>

          <div className="form form-box">
            {siblingListModel.siblings != null &&
              siblingListModel.siblings.map((sibling, index) => {
                return (
                  <div className="medical__siblings_formRow1" key={index}>
                    <div className="medical-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name={"name" + index}
                        className={!sibling.nameError ? "form-control" : "form-control  is-invalid"}
                        value={sibling.name}
                        placeholder="Name"
                        onChange={(e) => handleNameChange(e, index)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                      />
                      {sibling.nameError && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {sibling.nameError}
                        </div>
                      )}
                    </div>
                    <div className="medical-group">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        name={"age" + index}
                        className={!sibling.ageError ? "form-control" : "form-control  is-invalid"}
                        value={sibling.age == 0 ? undefined : sibling.age}
                        placeholder="Age"
                        onChange={(e) => handleAgeInputChange(e, index)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                      />
                      {sibling.ageError && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {sibling.ageError}
                        </div>
                      )}
                    </div>
                    <div className="medical-group">
                      <label className="form-label">Siblings</label>
                      <select
                         className={!sibling.siblingTypeError ? "form-control" : "form-control  is-invalid"}
                        name={"sibling" + index}
                        value={sibling.siblingType}
                        onChange={(e) => handleSiblingTypeChange(e, index)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                      >
                        <option value={""}>Select</option>
                        <option value={Sibling.Brother}>Brother</option>
                        <option value={Sibling.Sister}>Sister</option>
                      </select>
                      <i className="fa fa-angle-down arrow"></i>
                      {sibling.siblingTypeError && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {sibling.siblingTypeError}
                        </div>
                      )}
                    </div>
                    <div className="medical-group">
                      <label className="form-label">Relationship</label>
                      <select
                        className={!sibling.relationshipTypeError ? "form-control" : "form-control  is-invalid"}
                        name={"relationshipType" + index}
                        value={sibling.relationshipType}
                        onChange={(e) => handleRelationshipTypeChange(e, index)}
                        onKeyUp={(e) => handleKeyUp(e, index)}
                      >
                        <option value={""}>Select</option>
                        <option value={SiblingRelationship.HalfSibling}>
                          Half Sibling
                        </option>{" "}
                        <option value={SiblingRelationship.Natural}>
                          Natural
                        </option>
                        <option value={SiblingRelationship.Step}>Step</option>
                      </select>
                      <i className="fa fa-angle-down arrow"></i>
                      {sibling.relationshipTypeError && (
                        <div
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {sibling.relationshipTypeError}
                        </div>
                      )}
                    </div>
                    <i
                      className="far fa-trash-alt delete sibling_delete"
                      onClick={() => handleRemoveClick(index)}
                    ></i>
                  </div>
                );
              })}

            <div>
              <Button
                type="primary"
                size="large"
                onClick={handleAddClick}
                block
                icon={<PlusOutlined />}
                className="addMore__btn"
              >
                Add More
              </Button>
            </div>
          </div>
          <div className="btnContainer">
            {!props.isSaving && (
              <Button
                type="default"
                size="large"
                icon={<i className="fa fa-long-arrow-left"></i>}
                className="back_btn"
                onClick={() => props.previousTabChange(0)}
              >
                Back
              </Button>
            )}
            {!props.isSaving && (
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="btn_add"
                icon={<i className="fa fa-long-arrow-right"></i>}
              >
                Save
              </Button>
            )}
          </div>
        </div>
      </form>
      <Loader
        loading={props.isSaving}
        marginBottom="0px"
        marginTop="8px"
        width="368px"
      ></Loader>
    </div>
  );
}
