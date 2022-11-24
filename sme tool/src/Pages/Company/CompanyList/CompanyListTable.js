import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../../../commoncomp/Header/navbar";
import SideNavbar from "../../../commoncomp/SideNavbar/sideNavbar";
import Footer from "../../../commoncomp/Footer/footer";
import { Table, Modal, Button } from "react-bootstrap";
import EditIcon from "../../../assets/images/Edit-blue.svg";
import DisableEditIcon from "../../../assets/images/disableEdit.svg";
import OpenPersonalFolder from "../../../assets/images/_x36_9-google_drive.svg";
import DeleteIcon from "../../../assets/images/delete.svg";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faSortDesc,
  faSortAsc,
  faSort,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate, useLocation } from "react-router-dom";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table/dist/react-table.development";
import "../../Company/CompanyList/companyList.css";
import "../../../commoncomp/SideNavbar/responsive.css";
import getPageIndexOptions from "../../../utils/paginateReact";
import {
  downloadFile,
  getCompanyTypes,
  listVendors,
  deleteVendorById,
  updateNotification,
} from "../../../Services/App.service";
import { useQuery } from "react-query";
import {
  pageChange,
  pageSizeChange,
  totalCountChange,
  searchChange,
  orderByChange,
  orderChange,
  partnerStatusChange,
} from "../../../Store/actions/actions";
import { Reducer } from "../../../Store/reducers/reducer";
import LoaderSectionComp from "../../../commoncomp/Loaders/loaderSectionComp";

const TableContainer = styled.div`
  display: block;
`;
let initialState = {
  queryPageIndex: 0,
  queryPageSize: 10,
  status: 2,
  totalCount: 0,
  querySearch: "",
  queryOrderBy: "",
  queryOrder: "",
};
const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  setSearchText,
}) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((val) => {
    setGlobalFilter(val || undefined);
    setSearchText(val);
  }, 1000);

  useEffect(() => {
    let dataa = {
      type:"vendor"
    }
    updateNotification(dataa)
    .then((res) => {})
    .catch((err) => {
      console.error("error", err.message);
    });
  
   }, [])

  return (
    <span>
      Search:
      <input
        value={value || setSearchText || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        style={{
          fontSize: "1.1rem",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          border: "1px solid #C7C7C7",
          borderRadius: "3px",
        }}
      />
    </span>
  );
};

const CompanyListTable = () => {
  let navigate = useNavigate();

  const location = useLocation();

  const [show, setShow] = useState(false);
  const [candidateId, setCandidateId] = useState();
  const [apiData, setData] = useState([]);
  const [countryType, setCountryType] = useState([]);
  const [selectedCompanyType, setSelectedCompanyType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("");
  // const [result, setResult] = useState(0);
  const [totalCountAPI, setTotalCountAPI] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [statusType, setStatusType] = useState("1");

  const role = localStorage.getItem("role");
  let filterPage = location.search;
  filterPage = filterPage.substring(1);
  if (filterPage) {
    filterPage = JSON.parse(
      '{"' + filterPage.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );
  } else {
    filterPage = {};
  }

  const setSortByFn = (sortBy) => {
    if (sortBy && sortBy.length > 0) {
      return {
        order_by: sortBy[0].id,
        order: sortBy[0].desc ? "desc" : "asc",
      };
    } else {
      return {
        order_by: "",
        order: "",
      };
    }
  };

  const fetchCompanyList = () => {
    setIsDataLoading(true);
    let LCData = {
      limit: queryPageSize,
      offset: queryPageIndex,
      status: statusType,
      cType: queryCompanyType,
      search: querySearch,
      order_by: queryOrderBy, //column name
      order: queryOrder, //asc/desc,
    };
    let sortingOrder = setSortByFn(sortBy);
    LCData = {
      ...LCData,
      cType: selectedCompanyType,
      ...filterPage,
      ...sortingOrder,
    };
    const dataP = loadVendorList(LCData);
    if (dataP) {
      dataP.then((res) => {
        if (res.data.total_count) {
          setTotalCountAPI(res.data.total_count);
          trimData(res.data);
          setIsDataLoading(false);
        } else {
          setTotalCountAPI(0);
          setIsDataLoading(false);
        }
      });
      return dataP;
    }
  };

  const [
    {
      queryPageIndex,
      queryPageSize,
      status,
      queryCompanyType,
      querySearch,
      queryOrderBy,
      queryOrder,
    },
    dispatch,
    c,
  ] = useReducer(Reducer, initialState);

  const { isLoading, error, data, isSuccess } = useQuery(
    [
      "companyListTbl",
      queryPageIndex,
      queryPageSize,
      status,
      selectedCompanyType,
      queryCompanyType,
      querySearch,
      order,
      orderBy,
    ],
    fetchCompanyList,
    {
      // keepPreviousData: true,
      // staleTime: Infinity,
    }
  );
  const trimData = (data = []) => {
    if (data.total_count) {
      setTotalCountAPI(data.total_count);
      let setTblData = data.data.map((dt) => ({
        id: dt.id,
        company_name: dt.company_name,
        contact_name: dt.contact_name,
        phone: dt.phone,
        email: dt.email,
        city: dt.city,
        projects: dt.projects,
        gst: dt.gst,
        blacklist: dt.blacklist,
        status: dt.status,
        personal_folder_link: dt.personal_folder_link,
        services: dt.services,
      }));
      setData(setTblData);
    } else {
      setTotalCountAPI(0);
    }
  };

  const routeChange = (row) => {
    let id = row.original.id;
    navigate(`/administrator/edit-company/${id}`);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "company_name",
        width: "17%",
        // sortType: (a, b, company_name) => sortString(a, b, company_name),
      },
      {
        Header: "Contact Name",
        accessor: "contact_name",
        width: "15%",
        // sortType: (a, b, contact_name) => sortString(a, b, contact_name),
      },
      {
        Header: "Email",
        accessor: "email",
        width: "10%",
        // sortType: (a, b, email) => sortString(a, b, email),
      },
      {
        Header: "City",
        accessor: "city",
        width: "9%",
        // sortType: (a, b, city) => sortString(a, b, city),
      },

      {
        Header: "Project",
        accessor: "projects",
        width: "15%",
        // sortType: (a, b, contact_name) => sortString(a, b, contact_name),
        Cell: (row) => {
          let text = row.value.substring(0, 15);
          let l = row.value.length;
          let newData = replaceCommaLine(row.value);

          function replaceCommaLine(data) {
            let dataToArray = data.split(",").map((item) => item.trim());
            return dataToArray.join("\n");
          }

          return (
            <div className="tooltipProjects">
              {l > 8 ? <span>{text}...</span> : <span>{text}</span>}
              {l > 10 ? (
                <span className="tooltipTextProects">{newData}</span>
              ) : (
                <span></span>
              )}
            </div>
          );
        },
      },
      {
        Header: "Blacklist",
        accessor: "blacklist",
        width: "10%",
        // sortType: (a, b, blacklist) => sortNumber(a, b, blacklist),
        Cell: (props) => {
          // return props.value === 0 ? "No" : "Yes";
          return props.value === 0 ? (
            <div className="">No</div>
          ) : (
            <div className="blacklist-col">Yes</div>
          );
        },
      },
      {
        Header: "Status",
        accessor: "status",
        width: "9%",
        // sortType: (a, b, status) => sortString(a, b, status),
        Cell: (props) => {
          // return props.value === 0 ? "Active" : "Inactive";
          return props.value === 0 ? "Inactive" : "Active";
        },
      },
    ],
    []
  );

  const newRegistrationcolumns = React.useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "company_name",
        width: "17%",
      },
      {
        Header: "Contact Name",
        accessor: "contact_name",
        width: "15%",
      },
      {
        Header: "Email",
        accessor: "email",
        width: "10%",
      },
      {
        Header: "City",
        accessor: "city",
        width: "9%",
      },
      {
        Header: "Service Offering",
        accessor: "services",
        width: "15%",

        Cell: (row) => {
          let text = row.value.substring(0, 15);
          let l = row.value.length;
          let newData = replaceCommaLine(row.value);

          function replaceCommaLine(data) {
            let dataToArray = data.split(",").map((item) => item.trim());
            return dataToArray.join("\n");
          }

          return (
            <div className="tooltipProjects">
              {l > 8 ? <span>{text}...</span> : <span>{text}</span>}
              {l > 10 ? (
                <span className="tooltipTextProects">{newData}</span>
              ) : (
                <span></span>
              )}
            </div>
          );
        },
      },
    ],
    []
  );
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 10,
      width: 10,
      maxWidth: 10,
    }),
    []
  );

  const sortString = (a, b, column) => {
    if (a.values[column].toLowerCase() > b.values[column].toLowerCase())
      return 1;
    if (b.values[column].toLowerCase() > a.values[column].toLowerCase())
      return -1;
    return 0;
  };

  const sortNumber = (a, b, column) => {
    if (a.values[column] > b.values[column]) return 1;
    if (b.values[column] > a.values[column]) return -1;
    return 0;
  };
  const {
    formState: { errors },
  } = useForm();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageSize, globalFilter, pageIndex, sortBy },
    gotoPage,
    pageCount,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    getRowProps,
    pageOptions,
  } = useTable(
    {
      columns:
        statusType == 2 || statusType == 3 ? newRegistrationcolumns : columns,
      defaultColumn,
      data: apiData,
      initialState: initialState,
      sortBy: { order: "", orderBy: "" },
      pageIndex: 0,
      pageSize: 10,
      getRowProps: (row) => {
        if (row.original.blacklist) {
          return {
            className: row.original.blacklist === 1 ? "blackListed" : "",
          };
        }
      },
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      manualSortBy: true,
      pageCount: isSuccess ? Math.ceil(totalCountAPI / queryPageSize) : null,
      autoResetSortBy: false,
      autoResetExpanded: false,
      autoResetPage: false,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    getCompanyTypes().then((res) => {
      setCountryType(res.data.data);
    });
  }, []);

  useEffect(() => {
    dispatch(pageChange(pageIndex));
  }, [pageIndex]);

  useEffect(() => {
    dispatch(pageSizeChange(pageSize));
    gotoPage(0);
  }, [pageSize, gotoPage]);

  useEffect(() => {
    dispatch(partnerStatusChange(statusType));
  }, [statusType]);

  useEffect(() => {
    if (data?.data.total_count) {
      dispatch(totalCountChange(data.data.total_count));
      gotoPage(0);
    }
  }, [data?.data.total_count, totalCountAPI]);

  useEffect(() => {
    setIsDataLoading(true);
    gotoPage(0);
  }, [selectedCompanyType]);

  useEffect(() => {
    dispatch(searchChange(searchText));
    gotoPage(0);
  }, [searchText]);

  useEffect(() => {
    setIsDataLoading(true);
    let sortingOrder = setSortByFn(sortBy);

    if (sortBy && sortBy.length > 0) {
      setOrderBy(sortingOrder.order_by);
      setOrder(sortingOrder.order);
    } else {
      setOrderBy("");
      setOrder("");
    }
    dispatch(orderByChange(orderBy));
    dispatch(orderChange(order));
    gotoPage(0);
    return () => {};
  }, [sortBy]);

  // const resultT = getPageIndexOptions(5, pageIndex, totalCountAPI, pageSize)
  const resultT = getPageIndexOptions(5, pageIndex, totalCountAPI, pageSize);

  if (error) {
    return <p>Error</p>;
  }

  const loadVendorList = (candListData) => {
    // setLoading((prevState) => ({ loading: !prevState.loading }));
    listVendors(candListData)
      .then((res) => {
        if (res.data.status_code === 200) {
          setData(res.data.data);
          trimData(res.data);
          setIsDataLoading(false);
        } else {
          setData([]);
          trimData([]);
          setIsDataLoading(false);
        }
        // setLoading(false);
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const selectHandler = (row) => {
    let id = row.original.id;
    setCandidateId(id);
    setShow(!show);
  };
  const handleFileDownload = (row) => {
    downloadFile(row.original.resume).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", row.original.file_name); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };

  const navigateToPersonalFolder = (row) => {
    const url = row.original.personal_folder_link;
    // window.open("https://google.com", "_blank")
    if (url != null) {
      window.open(url, "_blank");
    } else {
      return;
    }
  };

  const deleteHandler = () => {
    deleteVendorById(candidateId)
      .then((res) => {
        setData(apiData.filter((item) => item.id !== candidateId));
        setShow(!show);
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  const handleCompanyTypeChange = (e) => {
    setSelectedCompanyType(parseInt(e.target.value));
    setIsDataLoading(true);
  };

  const handleCandidateReview = (row) => {
    let id = row.original.id;
    if (row.original.status === 2) {
      navigate(`/administrator/review-partner/${id}`);
    } else {
      navigate(`/administrator/rejected-partner/${id}`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid second-section">
        <div className="row">
          <div className="col-md-2 col-sm-12 col-xs-12 left-panel">
            <SideNavbar />
          </div>
          <div className="col-md-10 col-sm-12 col-xs-12 table-panel">
            <div className="container cnt-clss">
              <div className="txt-top">
                <h4>Company Details</h4>
                <div className="row">
                  <div className="intial_section col-md-4 m-20">
                    <label className="label-contanet">Company Type</label>
                    <select
                      onChange={(e) => handleCompanyTypeChange(e)}
                      className="form-control form-select category"
                    >
                      {countryType.map((item, key) => (
                        <option key={key} value={item.id}>
                          {item.c_type_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="intial_section col-md-4">
                    <label className="label-contanet">Status</label>
                    <select
                      onChange={(e) => setStatusType(e.target.value)}
                      className="form-control form-select category"
                    >
                      <option value="1">Active Partners</option>
                      <option value="2">New Registrations</option>
                      <option value="0">InActive Partners</option>
                      <option value="3">Rejected Partners</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="table-box-container">
                <div className="search-block">
                  <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                    setSearchText={setSearchText}
                  />
                </div>
                <div className="table-box table-box-candiate-list">
                  <TableContainer>
                    <div className="table-container">
                      {isDataLoading ? <LoaderSectionComp /> : null}
                      <Table
                        striped
                        {...getTableProps()}
                        pageCount={pageCount}
                        className="-striped -highlight"
                      >
                        <thead>
                          {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                              {headerGroup.headers.map((column) => (
                                <th
                                  colSpan="0"
                                  className="sorting"
                                  {...column.getHeaderProps(
                                    column.getSortByToggleProps()
                                  )}
                                  width={column.width}
                                >
                                  {column.render("Header")}
                                  <span>
                                    {column.isSorted ? (
                                      column.isSortedDesc ? (
                                        <i style={{ color: "#1f88d5" }}>
                                          &nbsp;
                                          <FontAwesomeIcon icon={faSortAsc} />
                                        </i>
                                      ) : (
                                        <i style={{ color: "#1f88d5" }}>
                                          {" "}
                                          &nbsp;
                                          <FontAwesomeIcon icon={faSortDesc} />
                                        </i>
                                      )
                                    ) : (
                                      <i
                                        className="check"
                                        style={{ color: "#95989A" }}
                                      >
                                        &nbsp; <FontAwesomeIcon icon={faSort} />
                                      </i>
                                    )}
                                  </span>
                                </th>
                              ))}
                              <th
                                className="action-col"
                                colSpan={3}
                                width="10%"
                              >
                                Action
                              </th>
                            </tr>
                          ))}
                        </thead>
                        <tbody className="table-space" {...getTableBodyProps()}>
                          {page.length !== 0 ? (
                            page.map((row, i) => {
                              prepareRow(row);
                              return (
                                <tr {...row.getRowProps(getRowProps(row))}>
                                  {row.cells.map((cell) => {
                                    return (
                                      <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                      </td>
                                    );
                                  })}
                                  {statusType == 2 || statusType == 3 ? (
                                    <>
                                      <td>
                                        <div className="register-action-box">
                                          <div
                                            onClick={() =>
                                              handleCandidateReview(row)
                                            }
                                          >
                                            View
                                          </div>
                                        </div>
                                      </td>
                                    </>
                                  ) : (
                                    <>
                                      <td>
                                        <span>
                                          {role === "Viewer" ? (
                                            <span>
                                              <img
                                                src={DisableEditIcon}
                                                alt="editIcon"
                                                title="Edit"
                                              />
                                            </span>
                                          ) : (
                                            <span>
                                              <img
                                                src={EditIcon}
                                                alt="editIcon"
                                                onClick={() => routeChange(row)}
                                                className="table-icon"
                                                title="Edit"
                                              />
                                            </span>
                                          )}
                                        </span>
                                      </td>
                                      <td>
                                        <span>
                                          {role === "Super Admin" ? (
                                            <span>
                                              <img
                                                src={DeleteIcon}
                                                alt="deleteIcon"
                                                onClick={() =>
                                                  selectHandler(row)
                                                }
                                                className="table-icon"
                                                title="Delete"
                                              />
                                            </span>
                                          ) : (
                                            <span>
                                              <FontAwesomeIcon
                                                icon={faTrashAlt}
                                                style={{ color: "#6f7880ba" }}
                                                title="Delete"
                                              />
                                            </span>
                                          )}
                                        </span>
                                      </td>
                                      <td>
                                        <span>
                                          {" "}
                                          {row.original.personal_folder_link !==
                                          null ? (
                                            <img
                                              src={OpenPersonalFolder}
                                              alt="cvIcon"
                                              onClick={() =>
                                                navigateToPersonalFolder(row)
                                              }
                                              className="table-icon"
                                              title="Open Personal Folder Link"
                                            />
                                          ) : (
                                            <img
                                              src={OpenPersonalFolder}
                                              alt="cvIcon"
                                              className="table-icon-disabled"
                                              title="Personal Folder Link not available"
                                            />
                                          )}
                                        </span>
                                      </td>
                                    </>
                                  )}
                                </tr>
                              );
                            })
                          ) : (
                            <tr>
                              <td colSpan={12}>
                                {isLoading
                                  ? "Loading Data..."
                                  : "No Data Found"}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </div>
                    <div className="main_pagination row">
                      <div className="col-md-6 col-sm-12 col-xs-12">
                        <span className="showing-space">Showing</span>
                        <select
                          value={pageSize}
                          onChange={(e) => {
                            setPageSize(Number(e.target.value));
                          }}
                        >
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                              {pageSize}
                            </option>
                          ))}
                        </select>
                        <span> of {totalCountAPI} Entries</span>
                      </div>
                      <div className="pagination_2 col-md-6 col-sm-12 col-xs-12">
                        <button
                          className="btn btn-default arrowFont"
                          onClick={() => {
                            previousPage();
                          }}
                          disabled={!canPreviousPage}
                        >
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </button>

                        <span>
                          {resultT &&
                            resultT.length > 0 &&
                            resultT.map((item, i) => {
                              return (
                                <button
                                  className={`custom_btn ${
                                    pageIndex === item - 1 ? "active" : ""
                                  }`}
                                  onClick={(e) => {
                                    gotoPage(item - 1);
                                  }}
                                  key={i}
                                >
                                  {item}
                                </button>
                              );
                            })}
                        </span>
                        <button
                          className="btn btn-default arrowFont"
                          onClick={() => {
                            nextPage();
                          }}
                          disabled={!canNextPage}
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  </TableContainer>
                </div>
              </div>
            </div>
            <Modal
              show={show}
              onHide={() => setShow(!show)}
              centered
              dialogclassName="modal-box"
            >
              <Modal.Body>Are you sure you want to delete?</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(!show)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={deleteHandler}>
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CompanyListTable;
