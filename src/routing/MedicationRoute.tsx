import React from "react";
import { Route } from "react-router-dom";
import Medication from "../components/medication/";
export function MedicationRoute() {
  return (
    <div className="compLoader">
      <Route path="/medication/setting" exact component={Medication} />
    </div>
  );
}
