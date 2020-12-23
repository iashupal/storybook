import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { HttpResponse } from "../../../core";
import { Loader } from "../../../shared/loaders";
import { PatientListFilterModel } from "../models/patient-list-filter.model";
import { PatientListResponseModel } from "../models/patient-list-response.model";
import { PatientListModel } from "../models/patient-list.model";
import InfiniteScroll from "react-infinite-scroller";
import { PatientService } from "../services";
import "./index.scss";
interface IState {
  result: PatientListResponseModel | any;
  results: PatientListModel[];
  initials?: string;
  searchText: string;
  isLoading?: boolean;
  totalItems: number;
  scrolling?: boolean;
  pageSize: number;
  currentPage: number;
  pageCount: number;
}
export class PatientList extends Component<any, IState> {
  private patientService: PatientService;
  scrollListener: any;
  constructor(props) {
    super(props);
    this.patientService = new PatientService();
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
      searchText: "",
      initials: "",
      isLoading: false,
      scrolling: false,
      results: [],
      pageSize: 10,
      currentPage: 1,
      totalItems: 0,
      pageCount: 0,
    };
  }
  componentDidMount() {
    this.loadData();
  }
  componentWillUpdate(prevProps) {
    if (prevProps.counter !== this.props.counter) {
      this.loadData();
    }
  }
  componentWillMount() {
    this.scrollListener = window.addEventListener("clickd", (e) => {
      this.handleScroll(e);
    });
  }
  //todo
  handleScroll = (e) => {
    this.loadMore();
    const { scrolling, currentPage } = this.state;
    if (scrolling) return;
    //if(totalpage<=page) return
    const lastLi = document.querySelector("ul.user-list> li:last-child");
    //  const lastLiOfSet = lastLi?.offsetTop + lastLi?.clientHeight;
    const pageOffSet = window.pageYOffset + window.innerHeight;
    var bottomOffSet = 20;
    //   if (pageOffSet > lastLiOfSet - bottomOffSet)
  };

  loadData = () => {
    this.setLoading(true);
    let filterModel: PatientListFilterModel = {
      searchText: this.state.searchText,
      pageSize: this.state.pageSize,
      currentPage: this.state.currentPage,
      totalItems: this.state.totalItems,
    };
    this.patientService
      .getPatientList(filterModel)
      .then((res: HttpResponse<PatientListResponseModel>) => {
        this.setLoading(false);
        if (res && res.result) {
          let patientList = this.state.scrolling
            ? this.state.result?.collection || []
            : [];
          patientList = patientList.concat(res.result.collection);
          let result = res.result;
          result.collection = patientList;
          this.setState(
            {
              result: result,
              scrolling: false,
            },
            () => {}
          );
        }
      })
      .catch((ex) => {
        this.setLoading(false);
      });
  };

  handleSearchChange = (event: any) => {
    this.setState(
      {
        currentPage: 1,
        scrolling: false,
        searchText: event.target.value,
      },
      () => {
        this.loadData();
      }
    );
  };
  private setLoading(loading: boolean) {
    this.setState({ isLoading: loading });
  }
  loadMore = () => {
    this.setState(
      (prevState) => ({
        currentPage: prevState.currentPage + 1,
        scrolling: true,
      }),
      () => {
        this.loadData();
      }
    );
  };

  render() {
    return (
      <section className="list-container">
        <div>
          <input
            type="text"
            name="searchText"
            className="form-control search-user"
            placeholder="Search by Name"
            value={this.state.searchText}
            onChange={this.handleSearchChange}
          />
        </div>

        <ul className="user-list scrollBar">
          {!this.state.isLoading &&
            this.state.result.paging.totalItems > 0 &&
            this.state.result.collection.map(
              (item: PatientListModel, index) => {
                return (
                  <li className="user-list-item" key={index}>
                    <NavLink
                      to={"/patient/addPatient/" + item.id}
                      className="user-link"
                    >
                      <div className="user-icon">
                        <span>{item.initials}</span>
                      </div>
                      <div className="name-role">
                        <span className="name">
                        {item.lastName+","} {item.firstName} 
                        </span>
                        <span className="mrNo">{item.mr_No} </span>
                        <span className="role">{item.age} Yr Old</span>
                      </div>
                    </NavLink>
                  </li>
                );
              }
            )}
          {!this.state.isLoading && this.state.result.paging.totalItems === 0 && (
            <div className="text-danger text-center">
              <img
                src="../../no-data.jpg"
                className="img-fluid"
                alt="No Data Found"
              />
            </div>
          )}
          {this.state.isLoading && <Loader loading={this.state.isLoading} />}
        </ul>
      </section>
    );
  }
}

export default PatientList;
