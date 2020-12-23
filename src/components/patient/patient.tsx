import React, { Component } from "react";
import "./patient.scss";
import PatientList from "./patientList/index";
import AddPatient from "./addPatient/index";
import imgAddUser from "../../assets/images/svg-icons/add-user.svg";

export class Patient extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }

  patientSaved = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onAddNewClick = () => {
    this.props.history.push("/patient/addPatient");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 aside-menu">
            <section className="registration">
              <div className="add-user">
                <button
                  type="button"
                  className="btn btn-primary btn-block add-user-btn"
                  onClick={this.onAddNewClick}
                >
                  <img src={imgAddUser} alt="userImage" />
                  Add Patient
                </button>
              </div>
            </section>
            <PatientList {...this.props} counter={this.state.counter} />
          </div>
          <div className="col-md-10 main-section">
            <div>
              <AddPatient {...this.props} onPatientSave={this.patientSaved} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
