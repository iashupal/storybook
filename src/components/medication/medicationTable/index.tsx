import React, { Component } from "react";
import { Table, Divider, Modal } from "antd";
import oops from "../../../assets/images/color_icon/oops_logo.png";
import "antd/dist/antd.css";
import "../styles.css";
import { HttpResponse } from "../../../core";
import { MedicationListViewModel } from "../../../models/medication/medication-list-view.model";
import { MedicationService } from "../../../services/medication";
import { MedicationListResponseModel } from "../../../models/medication/medication-list-response.model";
import { MedicationListFilterModel } from "../../../models/medication/medication-list-filter.model";
import { Pagination } from "../../../shared/pagination/Pagination";
import { ShowSuccessMessage } from "../../../shared/helpers";
import editImg from "../../../assets/images/svg-icons/edit.svg";
import { Loader } from "../../../shared/loaders";

interface IState {
  list: MedicationListViewModel[];
  result: MedicationListResponseModel | any;
  initials?: string;
  searchText: string;
  isLoading?: boolean;
  // pageNumber: number;
  pageSize: number;
  totalItems: number;
  currentPage: number;
  pageCount: number;
  isModalVisible: boolean;
  id: string | null;
}
class MedicationTable extends Component<any, IState> {
  private medicationService: MedicationService;
  constructor(props: any) {
    super(props);
    this.medicationService = new MedicationService();
    this.state = {
      result: {
        collection: [],
        paging: {
          currentPage: 1,
          pageSize: 0,
          totalItems: 0,
          pageCount: 0,
        },
      },
      currentPage: 1,
      searchText: "",
      isLoading: false,
      pageSize: 10,
      totalItems: 0,
      pageCount: 0,
      list: [],
      isModalVisible: false,
      id: null,
    };
  }
  toggleLoading = () => this.setState({ isLoading: !this.state.isLoading });
  componentWillUpdate(prevProps) {
    if (prevProps.counter != this.props.counter) {
      this.setState(
        {
          currentPage: 1,
        },
        () => {
          this.loadData();
        }
      );
    }
  }

  private setLoading(loading: boolean) {
    this.setState({ isLoading: loading });
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    // this.setLoading(true);
    this.setState({ isLoading: true });
    let filterModel: MedicationListFilterModel = {
      searchText: this.state.searchText,
      pageSize: this.state.pageSize,
      currentPage: this.state.currentPage,
      totalItems: this.state.totalItems,
      pageCount: this.state.pageCount,
    };
    this.medicationService
      .getMedicationList(filterModel)
      .then((res: HttpResponse<MedicationListResponseModel>) => {
        if (res && res.result) {
          // this.setLoading(false);
          this.setState(
            {
              result: res.result,
              list: res.result.collection,
              isLoading: false,
            },
            () => {}
          );
        }
        if (this.state.list.length <= 0) {
          this.setState(
            {
              currentPage: this.state.currentPage - 1,
            },
            () => {
              this.loadData();
            }
          );
        }
      })
      .catch((ex) => {
        this.setLoading(false);
      });
  };

  pageChange = (page: number) => {
    if (this.state.currentPage === page) return;
    this.setState(
      {
        currentPage: page,
      },
      () => {
        this.loadData();
      }
    );
  };

  handleDelete = () => {
    this.setLoading(true);
    this.medicationService
      .deleteMedication(this.state.id)
      .then((res: HttpResponse<boolean>) => {
        if (res && res.result) {
          ShowSuccessMessage("Data Deleted Successfully.");
          this.loadData();
          this.handleCancel();
          this.props.reset();
        }
      });
  };

  handleEdit = (id) => {
    this.props.onEditClick(id);
  };
  showDeleteConfirm = (id) => {
    this.setState({
      isModalVisible: true,
      id: id,
    });
  };
  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  columns: any = [
    {
      title: "Family",
      dataIndex: "family",
      key: "family",
      render: (text: any, record: any) => (
        <span className="cell-data-color">
          {" "}
          {record.family ? record.family : "-"}
        </span>
      ),
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      key: "brandName",
      render: (text: any, record: any) => (
        <span className="cell-data-color">
          {" "}
          {record.brandName ? record.brandName : "-"}
        </span>
      ),
    },
    {
      title: "Generic Name",
      dataIndex: "genericName",
      key: "genericName",
      render: (text: any, record: any) => (
        <span className="cell-data-color">
          {" "}
          {record.genericName ? record.genericName : "-"}
        </span>
      ),
    },
    {
      title: "Dosage",
      dataIndex: "dosage",
      key: "dosage",
      render: (text: any, record: any) => (
        <span className="cell-data-color">
          {" "}
          {record.dosage ? record.dosage : "-"}
        </span>
      ),
    },
    {
      title: "Format",
      dataIndex: "format",
      key: "format",
      render: (text: any, record: any) => (
        <span className="cell-data-color">
          {" "}
          {record.format ? record.format : "-"}
        </span>
      ),
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
      render: (text: any, record: any) => (
        <span className="cell-data-color">
          {" "}
          {record.duration ? record.duration : "-"}
        </span>
      ),
    },
    {
      title: "Releases",
      dataIndex: "release",
      key: "release",
      render: (text: any, record: any) => (
        <span className="cell-data-color">
          {" "}
          {record.release ? record.release : "-"}
        </span>
      ),
    },
    {
      title: "",
      render: (text: any, record: any) => (
        <div>
          <span>
            <i
              className="far fa-trash-alt delete"
              onClick={() => this.showDeleteConfirm(record.id)}
            ></i>
          </span>
          <Divider type="vertical" />
          <img
            className="edit-icon"
            src={editImg}
            alt="editImage"
            onClick={() => this.handleEdit(record.id)}
          />
        </div>
      ),
    },
  ];

  render() {
    const { isLoading, isModalVisible, list, currentPage, result } = this.state;
    return (
      <div className="med__table">
        <div className="header-section">
          <h3 className="header-title">Medication Settings</h3>
        </div>

        <Table
          columns={this.columns}
          dataSource={list}
          scroll={{ x: 1400 }}
          pagination={false}
          locale={{
            emptyText: <img src={oops} alt="oops" />,
          }}
        />
        {isLoading && (
          <div className="med_loader">
            <Loader
              loading={isLoading}
              marginBottom="0px"
              marginTop="8px"
              width="368px"
            ></Loader>
          </div>
        )}

        <div className="pull-right page-list">
          {!isLoading && (
            <Pagination
              currentPage={currentPage}
              pageCount={result?.paging.pageCount}
              onChangePage={this.pageChange}
            />
          )}
        </div>
        <Modal
          title="Delete"
          visible={isModalVisible}
          onOk={this.handleDelete}
          okType="primary"
          onCancel={this.handleCancel}
          okText="Yes"
          cancelText="No"
          className="modal__row"
          closable={false}
        >
          <p>Are you sure you want to delete this medication?</p>
        </Modal>
      </div>
    );
  }
}
export default MedicationTable;
