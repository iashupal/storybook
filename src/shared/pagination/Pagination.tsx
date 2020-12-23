import React, { Component, Fragment } from "react";
import "./styles.css";
interface IProps {
  currentPage: number;
  onChangePage: Function;
  pageCount: number;
}
interface IState {
  pager: any;
}
export class Pagination extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    if (this.props.pageCount && this.props.pageCount > 0) {
      this.setPage(this.props.currentPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pageCount !== prevProps.pageCount) {
      this.setState(
        {
          pager: {
            ...this.state.pager,
            totalPages: this.props.pageCount,
            pages: [],
          },
        },
        () => {
          this.setPage(this.props.currentPage);
        }
      );
    }
  }

  setPage(page) {
    var pageCount = this.props.pageCount;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(pageCount, page);

    // get new page of items from items array

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(page);
  }

  getPager(pageCount, currentPage) {
    // default to first page
    currentPage = currentPage || 1;

    // calculate total pages
    var totalPages = pageCount;

    var startPage, endPage;
    if (totalPages <= 8) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 4) {
        startPage = 1;
        endPage = 8;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 7;
        endPage = totalPages;
      } else {
        startPage = currentPage - 4;
        endPage = currentPage + 3;
      }
    }

    // calculate start and end item indexes

    // create an array of pages to ng-repeat in the pager control
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      currentPage: currentPage,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      pages: pages,
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <Fragment>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className={
                pager.currentPage === 1 ? "page-item disabled" : "page-item"
              }
            >
              <a className="page-link" onClick={() => this.setPage(1)}>
                First
              </a>
            </li>
            <li
              className={
                pager.currentPage === 1 ? "page-item disabled" : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => this.setPage(pager.currentPage - 1)}
              >
                Previous
              </a>
            </li>
            {pager.pages.map((page, index) => (
              <li
                key={index}
                className={
                  pager.currentPage === page ? "page-item active" : "page-item"
                }
              >
                <a className="page-link" onClick={() => this.setPage(page)}>
                  {page}
                </a>
              </li>
            ))}
            <li
              className={
                pager.currentPage === pager.totalPages
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => this.setPage(pager.currentPage + 1)}
              >
                Next
              </a>
            </li>
            <li
              className={
                pager.currentPage === pager.totalPages
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => this.setPage(pager.totalPages)}
              >
                Last
              </a>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
