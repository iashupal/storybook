import TeacherDashboard from "../components/teacher/TeacherDashboard";
import React from "react";
import { Route } from "react-router-dom";
export function TeacherRoute() {
    return (
      <div className="compLoader">
        <Route path="/teacher/dashboard" exact component={TeacherDashboard} />
      </div>
    );
  }
  