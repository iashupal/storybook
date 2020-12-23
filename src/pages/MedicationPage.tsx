import React, { Component, Fragment } from "react";
// import Breadcrumbs from "../shared/Breadcrumbs";
import { MedicationRoute } from "../routing/MedicationRoute";
export class MedicationPage extends Component {
  render() {
    return (
      <Fragment>
        {/* <Breadcrumbs /> */}
        <MedicationRoute />
      </Fragment>
    );
  }
}
