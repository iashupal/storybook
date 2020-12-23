import User from "../components/users";
import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./auth-guard";
export function UserRoute() {
  return (
    <div className="compLoader">
          <PrivateRoute path="/user/adduser/:id" exact component={User} />
          <PrivateRoute path="/user/adduser" exact component={User} />
    </div>
  );
}
