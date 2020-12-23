import * as React from "react";
import "./PatientManagement.scss";
import PatientManagementFilter from "./PatientManagementFilter";
import PatientManagementList from "./PatientManagementList";
import PatientManagementTopSection from "./PatientManagementTopSection";
import imgPath1 from "../../../assets/images/icons/total-patient.png";
import imgPath1Hover from "../../../assets/images/icons/total-patient-hover.png";
import imgPath2 from "../../../assets/images/icons/new-patient.png";
import imgPath2Hover from "../../../assets/images/icons/new-patient-hover.png";
import imgPath3 from "../../../assets/images/icons/severity.png";
import imgPath3Hover from "../../../assets/images/icons/severity-hover.png";
import imgPath4 from "../../../assets/images/icons/missing-dosage.png";
import imgPath4Hover from "../../../assets/images/icons/missing-dosage-hover.png";
import imgPath5 from "../../../assets/images/icons/parent-missing.png";
import imgPath5Hover from "../../../assets/images/icons/parent-missing-hover.png";
import imgPath6 from "../../../assets/images/icons/teacher.png";
import imgPath6Hover from "../../../assets/images/icons/teacher-hover.png";

export class PatientManagement extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-lg-12 pt-4 pb-4">
            <h1 className="page-titel">Patient Management</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <PatientManagementTopSection
              fieldName={"Total Patient"}
              dataCount={547}
              imgData={imgPath1}
              imgDataHover={imgPath1Hover}
            />
            <PatientManagementTopSection
              fieldName={"New Patient"}
              dataCount={57}
              imgData={imgPath2}
              imgDataHover={imgPath2Hover}
            />
            <PatientManagementTopSection
              fieldName={"High Severity Patient"}
              dataCount={34}
              imgData={imgPath3}
              imgDataHover={imgPath3Hover}
            />
            <PatientManagementTopSection
              fieldName={"High Severity Patient"}
              dataCount={321}
              imgData={imgPath4}
              imgDataHover={imgPath4Hover}
            />
            <PatientManagementTopSection
              fieldName={"Parent Missing Detail"}
              dataCount={23}
              imgData={imgPath5}
              imgDataHover={imgPath5Hover}
            />
            <PatientManagementTopSection
              fieldName={"Teacher Missing Detail"}
              dataCount={23}
              imgData={imgPath6}
              imgDataHover={imgPath6Hover}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <PatientManagementFilter />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-12">
            <PatientManagementList />
          </div>
        </div>
      </div>
    );
  }
}

export default PatientManagement;
