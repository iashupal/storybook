import * as React from 'react';

export class PatientManagementFilter extends React.Component {
  render() {
    return (
      <div className="row filter-box">
        <div className="col-4 col-xl-3">
            
          </div>
          <div className="col-8 col-xl-9 text-right">
            <ul className="filter-list mt-2">
                <li><strong>Filters (7 Results):</strong></li>
                <li>Week 2 <span>&#10006;</span></li>
                <li>09/09/2019 - 08/12/2019 <span>&#10006;</span></li>
                <li>Sofia Manzano <span>&#10006;</span></li>
                <li>Suhaib Minhas Al <span>&#10006;</span></li>
                <li>San Jose, California <span>&#10006;</span></li>
                <li className="brand-color pointer">Clear All</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default PatientManagementFilter;
