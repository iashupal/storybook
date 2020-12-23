import React, { Component, Fragment } from 'react';
import { PatientRoute } from '../routing/PatientRoute';
export class PatientPage extends Component {
    render() {
        return (
            <Fragment>
                <PatientRoute />
            </Fragment>
        )
    }
}