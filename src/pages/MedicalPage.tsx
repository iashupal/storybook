import React, { Component, Fragment } from 'react'
import  Breadcrumbs from '../shared/Breadcrumbs'
import { MedicalRoute } from '../routing/MedicalRoute'
export class MedicalPage extends Component {
    render() {
        return (
            <Fragment>
               <Breadcrumbs />
                {/* <MedicalRoute /> */}
            </Fragment>
        )
    }
}