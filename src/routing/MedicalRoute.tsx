import React from "react";
import { Route } from "react-router-dom";
import MedicalSocialHistory from "../layout/medicalHistory/medicalSocialHistory";


export function MedicalRoute() {
    return (
        <div className="compLoader">
            <Route path="/medical/medicalhistory" exact component={MedicalSocialHistory} />
        </div>
    );
}
