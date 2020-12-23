import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import Form from "react-bootstrap/esm/Form";
import PatientManagementFilterAction from "./PatientManagementFilterAction";
import PatientManagementPatientDetail from "./PatientManagementPatientDetail";

export class PatientManagementList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  state = {
    data: [
      {
        id: 1,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 2,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 3,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 4,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 5,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 6,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 7,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 8,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 9,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 10,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 11,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 12,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 13,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 14,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 15,
        patientDetail: {
          firstName: "Millie",
          lastName: "Stevenson",
          gender: "Female",
          age: 18,
        },
        facilitate: "378 Aknet Pike, California",
        parentDetail: {
          name: "Shane Bates",
          email: "joabeidu@jemsi.com",
        },
        physicianDetail: {
          name: "Theresa Webb",
          email: "muvum@noje.org",
        },
        teacherDetail: {
          name: "Theresa Webb",
          email: "wuvemmi@nozofkam.org",
        },
        monitoringDate: "04/29/2020",
        highSeverity: 21,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
      {
        id: 16,
        patientDetail: {
          firstName: "Vincent",
          lastName: "Meyer",
          gender: "Male",
          age: 18,
        },
        facilitate: "San Jose, California 201201",
        parentDetail: {
          name: "Glen Phillips",
          email: "ed@durtaku.gov",
        },
        physicianDetail: {
          name: "Caroline McBride",
          email: "iw@fisfumwuf.io",
        },
        teacherDetail: {
          name: "Jeff Watson",
          email: "hemlisduz@ze.co.uk",
        },
        monitoringDate: "04/01/2020",
        highSeverity: 15,
        attentionRequired: "Dosage Missing",
        medicationStaus: [
          { id: 1, name: "BL1", status: "success" },
          { id: 2, name: "W1", status: "success" },
          { id: 3, name: "W2", status: "danger" },
          { id: 4, name: "W3", status: "warning" },
          { id: 5, name: "W4", status: "normal" },
          { id: 6, name: "W5", status: "warning" },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 list-section">
          <table className="table data-table">
            <thead>
              <tr>
                <th scope="col">
                  <Form.Check
                    type="checkbox"
                    id="customControlAutosizing"
                    label=""
                    custom
                  />
                </th>
                <th scope="col">Patient Detail</th>
                <th scope="col">
                  <PatientManagementFilterAction fieldName="Facilitate" />
                </th>
                <th scope="col">Parent Detail</th>
                <th scope="col">
                  <PatientManagementFilterAction fieldName="Physician Detail" />
                </th>
                <th scope="col">
                  <PatientManagementFilterAction fieldName="Teacher Detail" />
                </th>
                <th scope="col">Monitoring Date</th>
                <th scope="col">High Severity</th>
                <th scope="col">Attention Required</th>
                <th scope="col">
                  <PatientManagementFilterAction fieldName="Medication Staus" />
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((item, i) => (
                <tr key={i}>
                  <td>
                    <Form.Check
                      type="checkbox"
                      id={`${"checkd_" + item.id}`}
                      label=""
                      custom
                    />
                  </td>
                  <td>
                    <PatientManagementPatientDetail
                      classPass={i % 2 ? "even" : "odd"}
                      firstName={item.patientDetail.firstName}
                      lastName={item.patientDetail.lastName}
                      gender={item.patientDetail.gender}
                      age={item.patientDetail.age}
                    />
                  </td>
                  <td>{item.facilitate}</td>
                  <td>
                    <span className="d-block line-height mt-2">
                      <strong>{item.parentDetail.name}</strong>
                    </span>
                    <span className="d-block line-height">
                      {item.parentDetail.email}
                    </span>
                  </td>
                  <td>
                    <span className="d-block line-height mt-2">
                      <strong>{item.physicianDetail.name}</strong>
                    </span>
                    <span className="d-block line-height">
                      {item.physicianDetail.email}
                    </span>
                  </td>
                  <td>
                    <span className="d-block line-height mt-2">
                      <strong>{item.teacherDetail.name}</strong>
                    </span>
                    <span className="d-block line-height">
                      {item.teacherDetail.email}
                    </span>
                  </td>
                  <td>{item.monitoringDate}</td>
                  <td>{item.highSeverity}</td>
                  <td>{item.attentionRequired}</td>
                  <td>
                    {item.medicationStaus.map((item2, j) => (
                      <span className={"bagde-item " + item2.status} key={j}>
                        {item2.name}
                      </span>
                    ))}
                  </td>
                  <td>
                    <Dropdown as={ButtonGroup}>
                      <Dropdown.Toggle variant="action">
                        <i className="fa fa-ellipsis-v"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="action-menu">
                        <Dropdown.Item href="#/action-1">
                          Patient Overview
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Weekly Update
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Edit Patient
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Deactivate Patient
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PatientManagementList;
