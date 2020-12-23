import React, { Component, Fragment } from 'react'
import  Breadcrumbs from '../shared/Breadcrumbs'
import { ParentRoute } from '../routing/ParentRoute'
export class ParentPage extends Component {
    render() {
        return (
            <Fragment>
               <Breadcrumbs />
                <ParentRoute />
            </Fragment>
        )
    }
}