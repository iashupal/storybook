import React, { Component, Fragment } from 'react'
import  Breadcrumbs from '../shared/Breadcrumbs'
import { ClinicianRoute } from '../routing/ClinicianRoute'
export class ClinicianPage extends Component {
    render() {
        return (
            <Fragment>
               {/* <Breadcrumbs /> */}
                <ClinicianRoute />
            </Fragment>
        )
    }
}