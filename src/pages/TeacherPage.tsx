import React, { Component, Fragment } from 'react'
import { TeacherRoute } from '../routing/TeacherRoute'
import  Breadcrumbs from '../shared/Breadcrumbs'
export class TeacherPage extends Component {
    render() {
        return (
            <Fragment>
               <Breadcrumbs />
                <TeacherRoute />
            </Fragment>
        )
    }
}