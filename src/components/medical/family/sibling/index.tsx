import React, { Fragment } from "react";
import { HttpResponse } from "../../../../core";
import { AddSiblingPostModel } from "../../../../models/familyBackground/sibling/add-sibling-post.model";
import { AddSiblingModel } from "../../../../models/familyBackground/sibling/add-sibling.model";
import { FamilyBackgroundService } from "../../../../services/familyBackground";
import { ShowSuccessMessage } from "../../../../shared/helpers";
import MedicalSiblingsAndBirthOrderForm from "./medicalSiblingsAndBirthOrderForm";

interface IState {
  patientId: string;
  isLoading: boolean;
  siblingList: AddSiblingPostModel;
}
export class MedicalSiblingsAndBirthOrder extends React.Component<any, IState> {
  private familyBackgroundService: FamilyBackgroundService;

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.familyBackgroundService = new FamilyBackgroundService();
  }
  private getInitialState() {
    let initialState: IState = {
      isLoading: false,
      patientId: this.props.patientId,
      siblingList: {
        patientId: this.props.patientId,
        siblings: [
          {
            id: "",
            name: "",
          },
        ],
      } as AddSiblingPostModel,
    };
    return initialState;
  }
  componentDidMount() {
    this.loadData();
  }

  postData = (data) => {
    let siblingPostData = data.siblingListModel;
    if (this.state.isLoading) {
      return;
    }
    this.setLoading(true);
    this.familyBackgroundService
      .postSibling(siblingPostData)
      .then((res: HttpResponse<boolean>) => {
        if (res && res.result) {
          ShowSuccessMessage("Data Saved Successfully.");
        }
        this.setLoading(false);
        if (!data.isAutoSave) {
          this.props.nextTabChange();
        }
        this.loadData();
      })
      .catch((ex) => {
        this.setLoading(false);
      });
  };
  previousTabChange = () => {
    this.props.previousTabChange();
  };

  private setLoading(loading: boolean) {
    this.setState({
      isLoading: loading,
    });
  }
  loadData = () => {
    this.setLoading(true);
    this.familyBackgroundService
      .getSiblingDetail(this.props.patientId)
      .then((res: HttpResponse<AddSiblingModel[]>) => {
        if (res && res.result) {
          this.setLoading(false);
          this.setState({
            siblingList: {
              ...this.state.siblingList,
              siblings: res.result,
            },
          });
        }
      });
  };
  assignModel = (data: any) => {
    this.setState({
      siblingList: data.siblingListModel,
    });
  };

  deleteSibling = (siblingId) => {
    this.familyBackgroundService
      .deleteSibling(siblingId)
      .then((res: HttpResponse<boolean>) => {
        if (res && res.result) {
          this.loadData();
        }
      });
  };

  render() {
    return (
      <Fragment>
        <MedicalSiblingsAndBirthOrderForm
          onSubmit={this.postData}
          isSaving={this.state.isLoading}
          patientId={this.props.patientId}
          assignModel={this.assignModel}
          siblingList={this.state.siblingList}
          previousTabChange={this.previousTabChange}
          deleteSibling={this.deleteSibling}
        />
      </Fragment>
    );
  }
}
