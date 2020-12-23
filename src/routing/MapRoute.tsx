import React from "react";
import { PrivateRoute } from "./auth-guard/PrivateRoute";
import { ClinicianPage } from "../pages/ClinicianPage";
import { ParentPage } from "../pages/ParentPage";
import { TeacherPage } from "../pages/TeacherPage";
import { DashboardPage } from "../pages/DashboardPage";
import { UserPage } from "../pages/UserPage";
import { PatientPage } from "../pages/PatientPage";
import { MedicationPage } from "../pages/MedicationPage";
import "./styles.css";

export function MapRoute() {
  return (
    <div className="routes">
      <PrivateRoute exact path="/" component={DashboardPage} />
      <PrivateRoute path="/parent" component={ParentPage} />
      <PrivateRoute path="/teacher" component={TeacherPage} />
      <PrivateRoute path="/clinician" component={ClinicianPage} />
      <PrivateRoute path="/patient" component={PatientPage} />
      <PrivateRoute path="/user" component={UserPage} />
      <PrivateRoute path="/medication" component={MedicationPage} />
    </div>
  );
}
