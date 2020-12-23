import ParentDashboard from "../components/parent/ParentDashboard";
import React from "react";
import { Route } from "react-router-dom";
export function ParentRoute() {
    return (
      <div className="compLoader">
        <Route path="/parent/dashboard" exact component={ParentDashboard} />
      </div>
    );
  }
  