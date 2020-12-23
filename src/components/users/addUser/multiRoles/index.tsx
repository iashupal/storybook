import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import "./index.scss";

const MultiRoles = (props) => {
  const { setValue } = useForm();

  const [values, setReactSelect] = useState({
    selectedOption: props.selectedoption ? props.selectedoption : [],
  });

  const handleMultiChange = (selectedOption) => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
    props.getSelectedRoles(selectedOption);
  };

  return (
    <div className="form-group multi-roles">
      <label className="form-label">Role</label>
      <Select
        isDisabled={props.readOnly}
        className={`reactSelect multi-roles ${
          props.readOnly ? "role-disable" : ""
        }`}
        name="filters"
        defaultValue={props.options[0]}
        placeholder="Select Roles"
        value={values.selectedOption}
        options={props.options}
        onChange={handleMultiChange}
        isMulti
      />
    </div>
  );
};

export default MultiRoles;
