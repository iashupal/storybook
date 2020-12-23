import React, { Component } from "react";
import MedicationForm from "./medicationForm";
import MedicationTable from "./medicationTable";
import Heading from "../heading";
import "./styles.css";
import { MedicationService } from "../../services/medication";
import { HttpResponse } from "../../core";
import { AddMedicationModel } from "../../models/medication/add-medication.model";
import { ShowSuccessMessage } from "../../shared/helpers";
import { DropdownItemModel } from "../../shared/models/dropdown.model";

interface IState {
  isLoading: boolean;
  formatModel: DropdownItemModel[];
  durationModel: DropdownItemModel[];
  releaseModel: DropdownItemModel[];
  medicationModel: AddMedicationModel;
  counter: number;
  isEditMode: boolean;
  reRenderForm: boolean;
}
class Medication extends Component<any, IState> {
  private medicationService: MedicationService;
  constructor(props) {
    super(props);
    this.medicationService = new MedicationService();
    this.state = this.initialState;
  }
  initialState: IState = {
    counter: 1,
    medicationModel: {
      id: null,
      family: "",
      brandName: "",
      genericName: "",
      dosage: "",
      duration: "",
      format: "",
      release: "",
    } as AddMedicationModel,
    durationModel: [] as DropdownItemModel[],
    formatModel: [] as DropdownItemModel[],
    releaseModel: [] as DropdownItemModel[],
    isLoading: false,
    isEditMode: false,
    reRenderForm: false,
  };
  componentDidMount() {
    if (this.state.formatModel.length <= 0) {
      this.loadInitialFormatData();
    }
    if (this.state.durationModel.length <= 0) {
      this.loadInitialDurationData();
    }
    if (this.state.releaseModel.length <= 0) {
      this.loadInitialReleaseData();
    }
  }

  onEditClick = (id) => {
    this.medicationService
      .getMedicationDetail(id)
      .then((res: HttpResponse<AddMedicationModel>) => {
        if (res && res.result) {
          let medication: AddMedicationModel = {
            id: res.result.id,
            family: res.result.family,
            brandName: res.result.brandName,
            genericName: res.result.genericName,
            dosage: res.result.dosage,
            format: res.result.format,
            duration: res.result.duration,
            release: res.result.release,
          };
          this.setState(
            {
              medicationModel: medication,
              isEditMode: true,
              reRenderForm: true,
            },
            () => this.setState({ reRenderForm: false })
          );
        }
      });
  };

  loadInitialFormatData = () => {
    this.medicationService
      .getFormat()
      .then((res: HttpResponse<DropdownItemModel[]>) => {
        if (res && res.result) {
          this.setState({
            formatModel: res.result,
          });
        }
      });
  };

  loadInitialDurationData = () => {
    this.medicationService
      .getDuration()
      .then((res: HttpResponse<DropdownItemModel[]>) => {
        if (res && res.result) {
          this.setState({
            durationModel: res.result,
          });
        }
      });
  };

  loadInitialReleaseData = () => {
    this.medicationService
      .getRelease()
      .then((res: HttpResponse<DropdownItemModel[]>) => {
        if (res && res.result) {
          this.setState({
            releaseModel: res.result,
          });
        }
      });
  };

  private setLoading(loading: boolean) {
    this.setState({ isLoading: loading });
  }

  saveData = (model: AddMedicationModel) => {
    this.setLoading(true);
    this.medicationService
      .addMedication(model)
      .then((res: HttpResponse<any>) => {
        if (res && res.result) {
          if (model.id != null && model.id != "") {
            ShowSuccessMessage("Data Updated Successfully.");
          } else {
            ShowSuccessMessage("Data Saved Successfully.");
          }
          this.setLoading(false);
          this.clearData();
          this.setState(
            {
              counter: this.state.counter + 1,
              isEditMode: false,
              reRenderForm: true,
            },
            () => this.setState({ reRenderForm: false })
          );
        }
      })
      .catch((ex) => {
        this.setLoading(false);
        this.clearData();
        this.setState({
          isEditMode: false,
        });
      });
  };
  clearData = () => {
    this.setState({
      medicationModel: {
        id: "",
        family: "",
        brandName: "",
        genericName: "",
        dosage: "",
        duration: "",
        format: "",
        release: "",
      },
    });
  };

  reset = () => {
    if (this.state.isEditMode) {
      this.setState(
        {
          isEditMode: false,
          reRenderForm: true,
        },
        () => {
          this.setState({ reRenderForm: false });
          this.clearData();
        }
      );
    }
  };
  handleDurationChange = (value: string) => {
    this.setState({
      medicationModel: {
        ...this.state.medicationModel,
        duration: value,
      },
    });
  };
  handleFormatChange = (value: string) => {
    this.setState({
      medicationModel: {
        ...this.state.medicationModel,
        format: value,
      },
    });
  };
  handleReleaseChange = (value: string) => {
    this.setState({
      medicationModel: {
        ...this.state.medicationModel,
        release: value,
      },
    });
  };
  render() {
    return (
      <div className="medication">
        <div className="medication__form">
          <Heading
            heading="Add/Update Medication"
            subHeading=""
            styleName="medicationHeading__style"
          />
          {!this.state.reRenderForm && (
            <MedicationForm
              medicationModel={this.state.medicationModel}
              isSaving={this.state.isLoading}
              saveData={this.saveData}
              formatModel={this.state.formatModel}
              durationModel={this.state.durationModel}
              releaseModel={this.state.releaseModel}
              isEditMode={this.state.isEditMode}
              reset={this.reset}
              onDurationChange={this.handleDurationChange}
              onReleaseChange={this.handleReleaseChange}
              onFormatChange={this.handleFormatChange}
            />
          )}
        </div>
        <div className="medication__table">
          <MedicationTable
            {...this.props}
            counter={this.state.counter}
            onEditClick={this.onEditClick}
            reset={this.reset}
          />
        </div>
      </div>
    );
  }
}
export default Medication;
