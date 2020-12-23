import * as React from 'react';

interface Props {
  fieldName: string;
  dataCount:number;
  imgData:string;
  imgDataHover:string;
}
interface State {
  error: string | null;
}

export class PatientManagementTopSection extends React.Component<Props, State> {
  render() {
    return (
      <div className="select-box">
        <div className="images-box"><img src={this.props.imgData} style={{width:40,height:40}} /></div>
        <div className="images-box-hover"><img src={this.props.imgDataHover} style={{width:40,height:40}} /></div>
        <h6 className="box-titel">{this.props.fieldName}</h6>
        <h5 className="box-count">{this.props.dataCount}</h5>
      </div>
    );
  }
}

export default PatientManagementTopSection;
