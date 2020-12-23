import React from "react";
import { Route } from "react-router-dom";
import DashboardTab from "../components/clinician/dashboard/DashboardTab";
import PatientDashboard from "../components/clinician/patientDashboard/PatientDashboard";
import PatientManagement from "../components/clinician/patientManagement/PatientManagement";
import {PatientRegistration} from "../components/clinician/patientRegistration/PatientRegistration";

export function ClinicianRoute() {
    return (
      <div className="compLoader">
        <Route path="/clinician/dashboard" exact component={DashboardTab} />
        <Route
          path="/clinician/patientmanagement"
          exact
          component={PatientManagement}
        />
        <Route
          path="/clinician/patientdashboard"
          exact
          component={PatientDashboard}
        />
          <Route
        path="/clinician/patientregistration"
        exact
        component={PatientRegistration}
      />
      </div>
    );
  }
  