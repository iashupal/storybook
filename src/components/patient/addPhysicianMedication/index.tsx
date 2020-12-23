import React, { Component, Fragment } from "react";
import { HttpResponse } from "../../../core/HttpResponse";
import { MedicationListResponseModel } from "../../../models/medication/medication-list-response.model";
import { MedicationListViewModel } from "../../../models/medication/medication-list-view.model";
import { MedicationService } from "../../../services/medication";
import { ShowErrorMessage, ShowSuccessMessage } from "../../../shared/helpers";
import { Loader } from "../../../shared/loaders";
import { AddPatientModel } from '../models/add-patient';
import { AddPatientMedicationModel } from "../models/add-patient-medication.model";
import { AddPhysicianModel } from '../models/add-physician';
import { PatientDetailModel } from '../models/patient-detail.model';
import { PatientMedicationDetail } from "../models/patient-medication-detail";
import { PatientService } from '../services';
import { PatientMedicationService } from "../services/patient.medication.service";
import { PhysicianService } from '../services/physician.service';
import { AddPhysicianMedicationForm } from "./addPhysicianMedicationForm";

interface IState {
    isLoading: boolean;
    tab: number;
    isReadonly: boolean;
    reRenderForm: boolean;
    physician: AddPhysicianModel;
    medication: AddPatientMedicationModel;
    medicationListViewModel: MedicationListViewModel[];
    patientId: string;
}
export class PhysicianMedication extends React.Component<any, IState> {
    private physicianService: PhysicianService;
    private patientService: PatientService;
    private patientMedicationService: PatientMedicationService;
    isComponentMounted: boolean = false;
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.physicianService = new PhysicianService();
        this.patientService = new PatientService();
        this.patientMedicationService = new PatientMedicationService();
    }
    private getInitialState() {
        let initialState: IState = {
            isLoading: false,
            tab: 1,
            isReadonly: false,
            physician: {} as AddPhysicianModel,
            medication: {} as AddPatientMedicationModel,
            medicationListViewModel: {} as MedicationListViewModel[],
            reRenderForm: false,
            patientId: this.props.patientId,
        };
        return initialState;
    }

    private setLoading(loading: boolean) {
        this.setState({
            isLoading: loading,
            //buttonHide:loading
        });
    }
    onEditClick = () => {
        this.setState({ isReadonly: false });
    };
    componentDidMount() {
        if (this.props.physician.id) {
            this.setState(
                {
                    physician: this.props.physician,
                    isReadonly: true,
                    reRenderForm: true,
                },
                () => this.setState({ reRenderForm: false })
            );
        }
        this.loadData();
        this.loadMedicineList();
    }
    loadMedicineList = () => {
        this.patientMedicationService
            .getMedicineList()
            .then((res: HttpResponse<MedicationListViewModel[]>) => {
                if (res && res.result) {
                    this.setState({ medicationListViewModel: res.result })
                }
            })
            .catch((ex) => {
                this.setLoading(false);
            });
    };

    loadData() {
        if (this.props.patientId) {
            this.patientMedicationService
                .getmedicationByPatientId(this.props.patientId)
                .then((res: HttpResponse<PatientMedicationDetail>) => {
                    if (res && res.result) {
                        let medication: AddPatientMedicationModel = {
                            isActive: res.result.isActive,
                            patientId: res.result.patientId,
                            patientTrialId: res.result.patientTrialId,
                            trialNoOfWeeks: res.result.trialNoOfWeeks,
                            trialStartDate: res.result.trialStartDate,
                            trialEndDate: res.result.trialEndDate,
                            createPatientVisitModels: res.result.patientVisitDetails,
                            createPatientTrialWeekModels: res.result.patientTrialWeekDetails
                        }
                        this.setState(
                            {
                                medication: medication
                            }
                        );
                    }
                })
                .catch((ex) => { });
        }
    }
    postPatientMedication = (medication: AddPatientMedicationModel) => {
        this.patientMedicationService
            .postMedication(medication)
            .then((res: HttpResponse<any>) => {
                if (res && res.result) {
                    if (res.result) {
                        this.setState(
                            {
                                medication: medication,
                            }
                        );
                    }
                }
            })
            .catch((ex) => {
                ShowErrorMessage("Error in creating medication.");
                this.setLoading(false);
            });
    }
    postData = (data: any) => {
        let physician = data.physicianModel;
        physician.id = this.state.physician.id;
        physician.patientId = this.props.patientId;
        this.setLoading(true);
        this.physicianService
            .postPhysician(physician)
            .then((res: HttpResponse<any>) => {
                if (res && res.result) {
                    if(data.medicationModel != undefined){
                    this.postPatientMedication(data.medicationModel);
                    }
                    if (physician.id != null && physician.id != "") {
                        ShowSuccessMessage("Data Updated Successfully.");
                    }
                    else {
                        ShowSuccessMessage("Data Saved Successfully.");
                    }
                    physician.id = res.result;
                    this.setLoading(false);
                    if (!data.isAutoSave) {
                        if (res.result) {
                            this.setState(
                                {
                                    physician: physician,
                                    isReadonly: true,
                                    reRenderForm: true,
                                },
                                () => this.setState({ reRenderForm: false })
                            );
                        }
                    }
                }
            })
            .catch((ex) => {
                ShowErrorMessage("Error in creating physician.");
                this.setLoading(false);
            });
    }
    assignModel = (data: any) => {
        this.setState(
            {
                medication: data.medication,
            }
           
        );
    }
    render() {
        return (
            <Fragment>
                {!this.state.reRenderForm && (
                    <AddPhysicianMedicationForm
                        isReadOnly={this.state.isReadonly}
                        onSubmit={this.postData}
                        onEditClick={this.onEditClick}
                        isSaving={this.state.isLoading}
                        physician={this.state.physician}
                        medication={this.state.medication}
                        medicationListViewModel={this.state.medicationListViewModel}
                        tab={this.state.tab}
                        patientId={this.props.patientId}
                        assignModel={this.assignModel}
                    />
                )}
            </Fragment>
        )
    }


}

export default PhysicianMedication;
