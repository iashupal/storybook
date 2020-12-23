import React, { Component, Fragment } from "react";
import "./index.scss";
import { PatientService } from "../services";
import Tabs from "../../tabs";
import { AddPatientModel } from "../models/add-patient";
import { HttpResponse } from "../../../core/HttpResponse";
import { ShowSuccessMessage } from "../../../shared/helpers";
import { PatientDetailModel } from "../models/patient-detail.model";
import { AddPatientForm } from "./addPatientForm";
import { Gender } from "../../../shared/enums/gender.enum";
import { Relationship } from "../../../shared/enums/relationship.enum";
import medical from "../../../assets/images/icons/missing-dosage.png";
import medicalIcon from "../../../assets/images/white_icon/medical.png";
import parentMissingHover from "../../../assets/images/icons/parent-missing-hover.png";
import family from "../../../assets/images/svg-icons/family.svg";
import PhysicianMedication from "../addPhysicianMedication";
import { AddressModel } from "../../../shared/models/address.model";

interface IState {
  isLoading: boolean;
  tab: number;
  isReadonly: boolean;
  reRenderForm: boolean;
  patient: AddPatientModel;
}

export class AddPatient extends Component<any, IState> {
  private patientService: PatientService;
  id: string = "";
  isComponentMounted: boolean = false;
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.patientService = new PatientService();
  }

  private getInitialState() {
    let initialState: IState = {
      isLoading: false,
      tab: 0,
      isReadonly: false,
      patient: {
        addressModel: {} as AddressModel,
      } as AddPatientModel,
      reRenderForm: false,
    };
    initialState.patient.gender = Gender.Male;
    initialState.patient.relationshipId = Relationship.Father;
    initialState.patient.dateOfBirth = new Date();
    return initialState;
  }
  ChangeTabIfParentExist(tab: any) {
    if (this.state.patient.id) {
      this.changeTab(tab);
    } else return false;
  }
  changeTab(tab: any) {
    this.setState({
      tab,
    });
  }

  componentDidUpdate() {
    if (this.isComponentMounted) {
      this.loadData();
    }
  }
  componentDidMount() {
    this.isComponentMounted = true;
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id && this.id != this.props.match.params.id) {
      this.id = this.props.match.params.id;
      this.patientService
        .getUserById(this.props.match.params.id)
        .then((res: HttpResponse<PatientDetailModel>) => {
          if (res && res.result) {
            let patient: AddPatientModel = {
              id: res.result.id,
              guardianId: res.result.guardianId,
              mr_No: res.result.mr_No,
              firstName: res.result.firstName,
              lastName: res.result.lastName,
              dateOfBirth: res.result.dateOfBirth,
              gender: res.result.gender,
              relationshipId: res.result.relationshipId,
              guardianFirstName: res.result.guardianFirstName,
              guardianLastName: res.result.guardianLastName,
              contactNo: res.result.contactNo,
              emailId: res.result.emailId,
              addressModel: {
                address1: res.result.addressModel.address1,
                address2: res.result.addressModel.address2,
                city: res.result.addressModel.city,
                state: res.result.addressModel.state,
                zipcode: res.result.addressModel.zipcode,
                //  addressId: res.result.addressModel.addressId,
              },
              physicianModel: {
                id: res.result.physicianId,
                pLastName: res.result.physicianLastName,
                speciality: res.result.speciality,
                hospitalName: res.result.hospitalName,
                pFirstName: res.result.physicianFirstName,
              },
              identityId: res.result.identityId,
            };
            this.setState(
              {
                patient: patient,
                isReadonly: true,
                reRenderForm: true,
              },
              () => this.setState({ reRenderForm: false })
            );
            this.changeTab(0);
          }
        })
        .catch((ex) => {});
    }
  }

  onEditClick = () => {
    this.setState({ isReadonly: false });
  };

  private setLoading(loading: boolean) {
    this.setState({
      isLoading: loading,
      //buttonHide:loading
    });
  }

  postData = (data: any) => {
    let patient = data.model;
    let isUpdate = false;
    patient.id = this.state.patient.id;
    if (patient.id) {
      isUpdate = true;
    }
    patient.guardianId = this.state.patient.guardianId;
    if (this.state.isLoading) {
      return;
    }
    this.setLoading(true);
    this.patientService
      .postUser(patient)
      .then((res: HttpResponse<any>) => {
        if (res && res.result) {
          let patientObj = this.state.patient;
          patientObj.id = res.result.patientId;
          patientObj.guardianId = res.result.guardianId;
          patientObj.addressModel.addressId = null;

          if (patient.isInviteSend) {
            ShowSuccessMessage("Invite Sent Successfully.");
          } else if (isUpdate) {
            ShowSuccessMessage("Data Updated Successfully.");
          } else {
            ShowSuccessMessage("Data Saved Successfully.");
          }
          this.setState({
            patient: patientObj,
          });

          this.setLoading(false);
          if (!data.isAutoSave) {
            if (patient.id != null && patient.id != "") {
              this.props.onPatientSave();
              this.setState(
                {
                  patient: patient,
                  isReadonly: true,
                  reRenderForm: true,
                },
                () => this.setState({ reRenderForm: false })
              );
              this.props.history.push(
                "/patient/addPatient/" + res.result.patientId
              ); //for now coz of autosav
            } else {
              this.props.history.push(
                "/patient/addPatient/" + res.result.patientId
              );
            }
          }
        }
      })
      .catch((ex) => {
        this.setLoading(false);
      });
  };
  render() {
    const { tab } = this.state;
    return (
      <div>
        <div className="row">
          <div className="patient__tabs_wrap">
            <div className="patient__tabs">
              <Tabs
                styleName="patientTab"
                text="Child & Parent Information"
                steps="Step 1 of 2"
                stepsAct="Step 1 of 2"
                fullText="Child & Parent Information"
                familyTextName=""
                image={family}
                activeImage={parentMissingHover}
                tabChange={() => this.changeTab(0)}
                selected={tab === 0}
              />
              <Tabs
                styleName="patientTab"
                text="Physician & Medication Information"
                steps="Step 2 of 2"
                stepsAct="Step 2 of 2"
                fullText="Physician & Medication Information"
                image={medical}
                familyTextName=""
                activeImage={medicalIcon}
                tabChange={() => this.ChangeTabIfParentExist(1)}
                selected={tab === 1}
              />
            </div>
          </div>
        </div>
        {tab === 0 && (
          <Fragment>
            {!this.state.reRenderForm && (
              <AddPatientForm
                isReadOnly={this.state.isReadonly}
                isSaving={this.state.isLoading}
                onEditClick={this.onEditClick}
                onSubmit={this.postData}
                patient={this.state.patient}
                tab={this.state.tab}
              />
            )}
          </Fragment>
        )}
        {tab === 1 && (
          <div>
            <PhysicianMedication
              physician={this.state.patient.physicianModel}
              patientId={this.state.patient.id}
            />
          </div>
        )}
      </div>
    );
  }
}
export default AddPatient;
