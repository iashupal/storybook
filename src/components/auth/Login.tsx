import React, { Component, Fragment } from 'react'
import { AppConfig } from '../../core';
// import './Login.css'

interface IState {
    isSignedIn: any;
}
export default class Login extends Component<any, IState> {
    constructor(props) {
        super(props);
    }
    auth2: any;
    render() {
        let returnUrl = "client_id=" + AppConfig.clientId + "&response_type=" + AppConfig.responseType +
            "&scope=" + AppConfig.scope + "&redirect_uri=" + AppConfig.redirect_Uri + "&access_type=" + AppConfig.accessType;
            {window.location.href = AppConfig.identityUrl+ 'connect/authorize' + "?" + returnUrl}
        return (
            <Fragment>
                
            </Fragment>
        );
    }
}
