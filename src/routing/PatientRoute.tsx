import React from "react";
import { Route } from "react-router-dom";
import Patient from "../components/patient/patient";
import { PrivateRoute } from "./auth-guard";
export function PatientRoute() {
  return (
    <div className="compLoader">
      <PrivateRoute path="/patient/addPatient/:id" exact component={Patient} />
      <PrivateRoute path="/patient/addPatient" exact component={Patient} />
    </div>
  );
}
