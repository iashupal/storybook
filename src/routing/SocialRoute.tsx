import React from "react";
import { PrivateRoute } from "./auth-guard/PrivateRoute";
import MedicalSocialHistory from "../layout/medicalHistory/medicalSocialHistory";

function SocialRoute() {
  return (
    <div className="compLoader">
      <PrivateRoute
        path="/medical/medicalhistory/:id?"
        component={MedicalSocialHistory}
      />
    </div>
  );
}

export default SocialRoute;
