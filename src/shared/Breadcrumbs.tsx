import React, { Component, useEffect } from "react";
import { withRouter } from "react-router";
import { RouteComponentProps, matchPath, Link } from "react-router-dom";

//import {useDispatch, connect} from 'react-redux'
import { IRouteBreadcrumb, routes } from "../routing/route-breadcrumb";
//import { ChangeRoute, ChangePage, ChangeFilters } from '../redux/navigation/actions';

function Breadcrumbs({ location }: RouteComponentProps) {
  //  const dispatch = useDispatch();

  let routeObj: IRouteBreadcrumb = {} as IRouteBreadcrumb;
  routes.some((route) => {
    route.path.some((path) => {
      const match = matchPath(location.pathname, path);
      if (match) {
        routeObj = route;
      }
    });
  });
  // const changeCurrentData = () => {
  //     dispatch(ChangePage(1))
  //     dispatch(ChangeFilters([]))
  //   }
  // useEffect(()=>{
  //      dispatch(ChangeRoute(location.pathname));
  // },[])

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb px-0 ">
          {routeObj &&
            routeObj.breadcrumbs.map((value, index) => {
              return (
                <li key={index} className="breadcrumb-item small">
                  <Link to={value.url} className="text-muted">
                    {value.name}
                  </Link>
                </li>
              );
              //   return  <li  onClick={changeCurrentData} key={index} className="breadcrumb-item small"><Link to={value.url} className="text-muted">{value.name}</Link></li>
            })}
        </ol>
      </nav>
    </div>
  );
}
export default withRouter(Breadcrumbs);
