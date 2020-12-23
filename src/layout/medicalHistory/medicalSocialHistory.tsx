import React, { Component } from "react";
import Heading from "../../components/heading";
import ChildGuardianInfo from "../../components/childGuardianInfo";
import Tabs from "../../components/tabs";
import generalInfo from "../../assets/images/svg-icons/general-info.svg";
import patient from "../../assets/images/svg-icons/patient.svg";
import family from "../../assets/images/svg-icons/family.svg";
import birth from "../../assets/images/svg-icons/birth.svg";
import referral from "../../assets/images/svg-icons/referral.svg";
import medical from "../../assets/images/svg-icons/medical.svg";
import development from "../../assets/images/svg-icons/development.svg";
import behaviour from "../../assets/images/svg-icons/behaviour.svg";
import therapy from "../../assets/images/svg-icons/therapy.svg";
import psychology from "../../assets/images/svg-icons/psychology.svg";
import diagnosis from "../../assets/images/svg-icons/diagnosis.svg";
import parentMissingHover from "../../assets/images/icons/parent-missing-hover.png";
import birthIcon from "../../assets/images/white_icon/birth.png";
import referralIcon from "../../assets/images/white_icon/referral.png";
import medicalIcon from "../../assets/images/white_icon/medical.png";
import developmentIcon from "../../assets/images/white_icon/development.png";
import behaviourIcon from "../../assets/images/white_icon/behaviour.png";
import therapyIcon from "../../assets/images/white_icon/therapy.png";
import physcoIcon from "../../assets/images/white_icon/physco_test.png";
import diagnosisIcon from "../../assets/images/white_icon/diagnosis.png";
import MedicalFamilyForm from "../../components/medical/family";
import GeneralForm from "../../components/medical/generalForm";
import "./styles.scss";
import ContentCard from "../../components/contentCard";
import MedicationStatus from "../../components/medicationStatus";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PatientService } from "../../components/patient/services/patient.service";
import { PatientsListByParentIdModel } from "../../components/patient/models/patients-list-By-parentId.model";
import { GetUserInfo } from "../../shared/helpers";
import { HttpResponse } from "../../core";
import MedicalBirthHistory from "../../components/medical/birthHistory";
interface IState {
  tab: number;
  percentage: number;
  isLoading: boolean;
  patientsListByParentIdModel: PatientsListByParentIdModel;
  id: "";
}

export class MedicalSocialHistory extends Component<any, any> {
  private patientService: PatientService;
  isComponentMounted: boolean = false;
  patientId: string;
  parentId: string;
  changeTab(tab: any) {
    this.setState({
      tab,
    });
  }
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.patientId = "";
    this.parentId = "";
    this.patientService = new PatientService();
    this.changeTab = this.changeTab.bind(this);
  }
  componentDidUpdate() {
    if (this.props.match.params.id && this.state.id != this.props.match.params.id) {
      this.setState({ id: this.props.match.params.id });
    }
  }
  componentDidMount() {
    window.addEventListener("beforeunload", function (e) {
      // Cancel the event
      e.preventDefault();
      e.returnValue = "You have unsaved data. Save data before you proceed.";
    });
    this.isComponentMounted = true;
    this.loadPatientList();
  }
  private getInitialState() {
    let initialState: IState = {
      isLoading: false,
      tab: 0,
      percentage: 75,
      patientsListByParentIdModel: {} as PatientsListByParentIdModel,
      id: "",
    };

    return initialState;
  }

  isFormSave = () => {
    this.loadPatientList();
  };

  loadPatientList() {
    let parentInfo = GetUserInfo();
    this.setLoading(true);
    this.patientService
      .getPatientsListByParentId(parentInfo.userId)
      .then((res: HttpResponse<PatientsListByParentIdModel>) => {
        if (res && res.result) {
          this.setState({ patientsListByParentIdModel: res.result });
          debugger;
          if (res.result.patientDetails.length > 0) {
            this.patientId = res.result.patientDetails[0].id;
            this.parentId = res.result.parentId;
            this.props.history.push("/medical/medicalhistory/" + res.result.patientDetails[0].id);
          } else {
            this.props.history.push("/medical/medicalhistory/");
          }
        }
      })
      .catch((ex) => {});
  }

  private setLoading(loading: boolean) {
    this.setState({
      isLoading: loading,
    });
  }

  render() {
    const { tab, percentage } = this.state;
    return (
      <div>
        {/* <TopHeader
          heading="Child Weekly Status"
          username="Ryan Becker"
          designation="Parent"
        /> */}
        <div className="child__status">
          {this.state.patientsListByParentIdModel?.patientDetails?.map((patient, index) => {
            return (
              <ContentCard
                key={index}
                styleName="childTab__status"
                contents={[
                  <div
                    className="status__wrapper"
                    onClick={() => {
                      this.props.history.push("/medical/medicalhistory/" + patient.id);
                    }}
                  >
                    {/* <div className="statusInfo__cover"> */}
                    <div className="statusInfo__cover">
                      <div>
                        <span className="name_wrap">{patient.initials}</span>
                        <p className="ccfChild_username">
                          {patient.lastName + ","} {patient.firstName} <br />{" "}
                          {/* <span>
                              {patient.age}, {patient.genderText}
                            </span> */}
                          <span>MRN:{patient.mr_No}</span> <br />
                          <span>
                            Date of Birth: {new Date(patient.dateOfBirth).toLocaleDateString()},{" "}
                            {patient.genderText}{" "}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="statusInfo__cover">
                      {patient.teacherDetail?.firstName && (
                        <ChildGuardianInfo
                          designation="Teacher"
                          name={
                            (patient.teacherDetail?.firstName ?? "") +
                            " " +
                            (patient.teacherDetail?.lastName ?? "")
                          }
                          email={patient.teacherDetail?.emailId ?? ""}
                        />
                      )}
                    </div>
                    <div style={{ display: "none" }}>
                      <ChildGuardianInfo designation="Medication Status" name="" email="" />
                      <div>
                        <MedicationStatus
                          text="BL1"
                          backgroundColor="var(--color-parrot)"
                          color="var(--color-white)"
                        />
                        <MedicationStatus
                          text="W1"
                          backgroundColor="var(--color-parrot)"
                          color="var(--color-white)"
                        />
                        <MedicationStatus
                          text="W2"
                          backgroundColor="var(--color-yellow)"
                          color="var(--color-white)"
                        />
                        <MedicationStatus
                          text="W3"
                          backgroundColor="var(--color-lightWhite)"
                          color="var(--color-navyBlue)"
                        />
                        <MedicationStatus
                          text="W4"
                          backgroundColor="var(--color-lightWhite)"
                          color="var(--color-navyBlue)"
                        />
                        <MedicationStatus
                          text="W5"
                          backgroundColor="var(--color-lightWhite)"
                          color="var(--color-navyBlue)"
                        />
                      </div>
                    </div>
                    <div className="statusInfo__cover">
                      {patient.physicianDetail?.firstName && (
                        <ChildGuardianInfo
                          designation="Physician"
                          name={
                            (patient.physicianDetail?.firstName ?? "") +
                            " " +
                            (patient.physicianDetail?.lastName ?? "")
                          }
                          email={patient.physicianDetail?.emailId ?? ""}
                        />
                      )}
                    </div>
                    {/* </div> */}
                    <div className="statusInfo__cover">
                      {this.state.patientsListByParentIdModel?.patientDetails?.length < 3 && (
                        // <div className="status__rightside">
                        <div className="status_pending">
                          <CircularProgressbar
                            value={patient.completePercentage ?? 0}
                            text={`${patient.completePercentage ?? 0}%`}
                            styles={buildStyles({
                              strokeLinecap: "butt",
                              textColor: "var(--color-slaty)",
                              pathColor: "var(--color-parrot)",
                              trailColor: "var(--color-slaty)",
                            })}
                            className="graphStroke"
                          />
                          <ChildGuardianInfo
                            designation=""
                            name={`${patient.completePercentage ?? 0}%` + " " + "Completed"}
                            email={
                              "Complete Remaining" +
                              " " +
                              (100 - (patient.completePercentage ?? 0)) +
                              "%"
                            }
                            guardianStyle="guardianStyle"
                          />
                          {/* <p>
                              {`${patient.completePercentage ?? 0}%`} Completed
                            </p> */}
                          {/* <div className="childstatus__percent"> */}
                          {/* <p>
                              Complete Remaining{" "}
                              {100 - (patient.completePercentage ?? 0)}%
                            </p> */}
                          {/* </div> */}
                          {/* <i
                             className="fa fa-check-square-o checkIcon"
                             aria-hidden="true"
                           ></i> */}
                        </div>
                        // </div>
                      )}
                    </div>
                  </div>,
                ]}
              />
            );
          })}
        </div>
        <div className="medical__wrapper">
          <Heading
            heading="Patient Medical Social History"
            subHeading="ADHD form for evaluation and treatment"
            styleName="medicalHeading__style"
          />
          <div className="medical__tabs">
            <Tabs
              styleName="profileTab"
              text="General"
              steps="Step 1 of 10"
              stepsAct=""
              fullText="General Information"
              familyTextName=""
              image={patient}
              activeImage={generalInfo}
              tabChange={() => this.changeTab(0)}
              selected={tab === 0}
            />

            <Tabs
              styleName="profileTab"
              text="Family"
              steps="Step 2 of 10"
              stepsAct=""
              fullText="Family Background"
              image={family}
              familyTextName=""
              activeImage={parentMissingHover}
              tabChange={() => this.changeTab(1)}
              selected={tab === 1}
            />
            <Tabs
              styleName="profileTab"
              text="Birth"
              steps="Step 3 of 10"
              stepsAct=""
              fullText="Birth History"
              image={birth}
              familyTextName=""
              activeImage={birthIcon}
              tabChange={() => this.changeTab(2)}
              selected={tab === 2}
            />
            <Tabs
              styleName="profileTab"
              text="Referral"
              steps="Step 4 of 10"
              stepsAct=""
              fullText="Referral Concerns"
              image={referral}
              familyTextName=""
              activeImage={referralIcon}
              tabChange={() => this.changeTab(3)}
              selected={tab === 3}
            />
            <Tabs
              styleName="profileTab"
              text="Medical"
              steps="Step 5 of 10"
              stepsAct=""
              fullText="Medical History"
              image={medical}
              familyTextName=""
              activeImage={medicalIcon}
              tabChange={() => this.changeTab(4)}
              selected={tab === 4}
            />
            <Tabs
              styleName="profileTab"
              text="Development"
              steps="Step 6 of 10"
              stepsAct=""
              fullText="Development Profile"
              image={development}
              familyTextName=""
              activeImage={developmentIcon}
              tabChange={() => this.changeTab(5)}
              selected={tab === 5}
            />
            <Tabs
              styleName="profileTab"
              text="Behaviour"
              steps="Step 7 of 10"
              stepsAct=""
              fullText="Behaviour Profile"
              image={behaviour}
              familyTextName=""
              activeImage={behaviourIcon}
              tabChange={() => this.changeTab(6)}
              selected={tab === 6}
            />
            <Tabs
              styleName="profileTab"
              text="Therapy"
              steps="Step 8 of 10"
              stepsAct=""
              fullText="Therapy/Counseling"
              image={therapy}
              familyTextName=""
              activeImage={therapyIcon}
              tabChange={() => this.changeTab(7)}
              selected={tab === 7}
            />
            <Tabs
              styleName="profileTab"
              text="Psychology"
              steps="Step 9 of 10"
              stepsAct=""
              fullText="Psychological Testing"
              image={psychology}
              familyTextName=""
              activeImage={physcoIcon}
              tabChange={() => this.changeTab(8)}
              selected={tab === 8}
            />
            <Tabs
              styleName="profileTab"
              text="Diagnosis"
              steps="Step 10 of 10"
              stepsAct=""
              fullText="Previous Diagnosis"
              image={diagnosis}
              familyTextName=""
              activeImage={diagnosisIcon}
              tabChange={() => this.changeTab(9)}
              selected={tab === 9}
            />
          </div>
          {tab === 0 && (
            <div>
              <GeneralForm id={this.state.id} isFormSave={this.isFormSave} />
            </div>
          )}
          {tab === 1 && (
            <MedicalFamilyForm
              tab={1}
              patientId={this.patientId}
              parentId={this.parentId}
              parentTab={this.changeTab}
            />
          )}
          {tab === 2 && <MedicalBirthHistory tab={2} />}
          {tab === 3 && <p>Physician</p>}
          {tab === 4 && <p>Child Information</p>}
          {tab === 5 && <p>parent</p>}
          {tab === 6 && <p>Teacher</p>}
          {tab === 7 && <p>Therapy</p>}
          {tab === 8 && <p>Psychology</p>}
          {tab === 9 && <p>Diagnosis</p>}
        </div>
      </div>
    );
  }
}

export default MedicalSocialHistory;
