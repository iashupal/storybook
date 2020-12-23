import * as React from 'react';

interface Props {
    fieldName: string;
}
interface State {
    error: string | null;
}

export class PatientManagementFilterAction extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <div className="fliter-action"><span className="data-name">{this.props.fieldName}</span> <span className="fliterList"><i className="fa fa-angle-down"></i></span></div>
    );
  }
}

export default PatientManagementFilterAction;