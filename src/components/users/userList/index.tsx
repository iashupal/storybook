import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { HttpResponse } from "../../../core";
import {
  UserListFilterModel,
  UserListModel,
  UserResponseModel,
} from "../../../models/users";
import { UserService } from "../../../services/user";
import { Loader } from "../../../shared/loaders";
interface IState {
  result: UserResponseModel | any;
  initials?: string;
  searchText: string;
  visible: boolean;
  isLoading?: boolean;
  pageSize: number;
  totalItems: number;
  currentPage: number;
  pageCount: number;
}

export class UserList extends Component<any, IState> {
  private userService: UserService;
  constructor(props) {
    super(props);
    this.userService = new UserService();
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
      visible: false,
      isLoading: false,
      pageSize: 100,
      currentPage: 1,
      totalItems: 0,
      pageCount: 0,
    };
  }
  componentWillUpdate(prevProps) {
    if (prevProps.counter !== this.props.counter) {
      this.loadData();
    }
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.setLoading(true);
    let filterModel: UserListFilterModel = {
      searchText: this.state.searchText,
      pageSize: this.state.pageSize,
      currentPage: this.state.currentPage,
      totalItems: this.state.totalItems,
      pageCount: this.state.pageCount,
    };
    this.userService
      .getUserList(filterModel)
      .then((res: HttpResponse<UserResponseModel>) => {
        if (res && res.result) {
          this.setLoading(false);
          this.setState(
            {
              result: res.result,
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
            this.state.result.collection.map((item: UserListModel, index) => {
              return (
                <li className="user-list-item" key={index}>
                  <NavLink
                    to={"/user/adduser/" + item.id}
                    className="user-link"
                  >
                    <div className="user-icon">
                      <span>{item.initials}</span>
                    </div>
                    <div className="name-role">
                      <span className="name">
                      {item.lastName+","} {item.firstName} 
                      </span>
                      <span className="role">{item.roles}</span>
                    </div>
                  </NavLink>
                </li>
              );
            })}
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

export default UserList;
