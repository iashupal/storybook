import * as React from 'react';

interface Props {
    firstName: string;
    lastName: string;
    gender:string;
    age:number;
    classPass:string;
}
interface State {
    error: string | null;
}

export class PatientManagementPatientDetail extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

  render() {
    let shortFname = this.props.firstName.slice(0, 1);
    let shortLname = this.props.lastName.slice(0, 1);

    return (
        <div className="user-details">
            <div className={'user-shortname ' + this.props.classPass }>{shortFname}{shortLname}</div>
            <h5>{this.props.firstName} {this.props.lastName}</h5>
            <span className="d-block">{this.props.gender}, {this.props.age}</span>
        </div>
    );
  }
}

export default PatientManagementPatientDetail;