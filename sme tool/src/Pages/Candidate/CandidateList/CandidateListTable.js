import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../../../commoncomp/Header/navbar";
import SideNavbar from "../../../commoncomp/SideNavbar/sideNavbar";
import Footer from "../../../commoncomp/Footer/footer";
import { Table, Modal, Button } from "react-bootstrap";
import EditIcon from "../../../assets/images/Edit-blue.svg";
import DisableEditIcon from "../../../assets/images/disableEdit.svg";
import DeleteIcon from "../../../assets/images/delete.svg";
import DisableDelete from "../../../assets/images/newDelete.svg";
import CvIcon from "../../../assets/images/resume_download.svg";
import NoCvIcon from "../../../assets/images/newcv.svg";
import styled from "styled-components";
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
import "./tableComp.css";
import getPageIndexOptions from "../../../utils/paginateReact";
import {
  listCandidates,
  deleteCandidateById,
  downloadFile,
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
  candidateTypeChange,
} from "../../../Store/actions/actions";
import { Reducer } from "../../../Store/reducers/reducer";
import LoaderSectionComp from "../../../commoncomp/Loaders/loaderSectionComp";
import LoaderEmptyComp from "../../../commoncomp/Loaders/loaderEmptyComp";

const TableContainer = styled.div`
  display: block;
`;
let initialState = {
  queryPageIndex: 0,
  queryPageSize: 10,
  status: 1,
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

const CandidateListTable = () => {
  let navigate = useNavigate();

  const location = useLocation();

  const [show, setShow] = useState(false);
  const [candidateId, setCandidateId] = useState();
  const [apiData, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("");
  const [totalCountAPI, setTotalCountAPI] = useState(0);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [CandidateType, setCandidateType] = useState("1");

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
  const fetchCandidateList = () => {
    setIsDataLoading(true);
    let LCData = {
      limit: queryPageSize,
      offset: queryPageIndex,
      status: CandidateType,
      search: querySearch,
      order_by: queryOrderBy, //column name
      order: queryOrder, //asc/desc,
    };
    let sortingOrder = setSortByFn(sortBy);
    LCData = { ...LCData, ...filterPage, ...sortingOrder };
    const dataP = listCandidates(LCData);
    if (dataP) {
      dataP.then((res) => {
        if (res.data.total_count) {
          setTotalCountAPI(res.data.total_count);
          trimData(res.data);
          setIsDataLoading(false);
        } else {
          setTotalCountAPI(0);
          setData([]);
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
      totalCount,
      querySearch,
      queryOrderBy,
      queryOrder,
    },
    dispatch,
  ] = useReducer(Reducer, initialState);

  const { isLoading, error, data, isSuccess } = useQuery(
    [
      "candidateListTbl",
      queryPageIndex,
      queryPageSize,
      status,
      querySearch,
      order,
      orderBy,
    ],
    fetchCandidateList,
    {
      // keepPreviousData: true,
      // staleTime: Infinity,
    }
  );
  const trimData = (data = []) => {
    initialState = { ...initialState, totalCount: data.total_count };
    let setTblData = data.data.map((dt) => ({
      id: dt.id,
      fname: dt.fname,
      p_email: dt.p_email,
      qualification: dt.qualification,
      p_discipline: dt.p_discipline,
      country: dt.location,
      nda: dt.nda,
      projects_asigned: dt.projects_asigned,
      blacklist: dt.blacklist,
      status: dt.status,
      resume: dt.resume,
      file_name: dt.file_name,
      phone: dt.p_phone,
      profession: dt.profession,
      experience: dt.experience,
    }));
    setData(setTblData);
  };

  const routeChange = (row) => {
    let id = row.original.id;
    navigate(`/administrator/edit-candidate/${id}`);
  };

  const handleCandidateReview = (row) => {
    let id = row.original.id;
    if(row.original.status === 2){
      navigate(`/administrator/review-candidate/${id}`);
    }else{
      navigate(`/administrator/rejected-candidate/${id}`);
    }
    
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "fname",
        width: "8%",
        // sortType: (a, b, fname) => sortString(a, b, fname)
      },
      {
        Header: "Email",
        accessor: "p_email",
        width: "8%",
        // sortType: (a, b, p_email) => sortString(a, b, p_email)
      },
      {
        Header: "Qualification",
        accessor: "qualification",
        width: "12%",
        // sortType: (a, b, qualification) => sortString(a, b, qualification)
      },
      {
        Header: "Primary Discipline",
        accessor: "p_discipline",
        width: "16%",
        // sortType: (a, b, p_discipline) => sortString(a, b, p_discipline)
      },
      {
        Header: "Location",
        accessor: "country",
        width: "9%",
        // sortType: (a, b, country) => sortString(a, b, country)
      },
      {
        Header: "Project Assigned ",
        accessor: "projects_asigned",
        width: "18%",
        // sortType: (a, b, projects_asigned) => sortString(a, b, projects_asigned)
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
        width: "8%",
        // sortType: (a, b, status) => sortString(a, b, status),
        Cell: (props) => {
          // return props.value === 0 ? "Inactive" : "Active";
          if (props.value === 0) {
            return "InActive";
          } else if (props.value === 1) {
            return "Active";
          } else {
            return "Rejected";
          }
        },
      },
    ],
    []
  );

  const newRegistrationcolumns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "fname",
        width: "8%",
      },
      {
        Header: "Email",
        accessor: "p_email",
        width: "8%",
      },
      {
        Header: "Phone",
        accessor: "phone",
        width: "12%",
      },
      {
        Header: "Location",
        accessor: "country",
        width: "9%",
      },
      {
        Header: "Profession",
        accessor: "profession",
        width: "18%",
      },
      {
        Header: "Experience",
        accessor: "experience",
        width: "10%",
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
  } = useTable(
    {
      columns:
        CandidateType == 2 || CandidateType == 3
          ? newRegistrationcolumns
          : columns,
      defaultColumn,
      data: apiData,
      initialState: initialState,
      sortBy: { order: "", orderBy: "" },
      // pageIndex: 0,
      // pageSize: 10,
      manualPagination: true, // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      manualSortBy: true,
      pageCount: isSuccess ? Math.ceil(totalCount / queryPageSize) : null,
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
  }, []);

  useEffect(() => {
    dispatch(pageChange(pageIndex));
    // gotoPage(0);
  }, [pageIndex]);

  useEffect(() => {
    dispatch(pageSizeChange(pageSize));
    gotoPage(0);
  }, [pageSize, gotoPage]);

  useEffect(() => {
    dispatch(candidateTypeChange(CandidateType));
  }, [CandidateType]);

  useEffect(() => {
    let dataa = {
      type:"candidate"
    }
    updateNotification(dataa)
    .then((res) => {})
    .catch((err) => {
      console.error("error", err.message);
    });
  
   }, [])

  useEffect(() => {
    if (data?.data.total_count) {
      dispatch(totalCountChange(data.data.total_count));
      // gotoPage(0);
    }
  }, [data?.data.total_count]);

  useEffect(() => {
    dispatch(searchChange(searchText));
    gotoPage(0);
  }, [searchText]);

  // useEffect(() => {
  //   dispatch(orderByChange(orderBy));
  // }, [orderBy]);

  // useEffect(() => {
  //   dispatch(orderChange(order));
  // }, [order]);

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

  const resultT = getPageIndexOptions(5, pageIndex, totalCount, pageSize);

  if (error) {
    return <p>Error</p>;
  }

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
  const deleteHandler = () => {
    deleteCandidateById(candidateId)
      .then((res) => {
        setData(apiData.filter((item) => item.id !== candidateId));
        setShow(!show);
      })
      .catch((err) => {
        console.error("err", err);
      });
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
                <h4>Candidate Details</h4>
                <div className="row">
                  <div className="intial_section col-md-4">
                    <label className="label-contanet">Candidate Details</label>
                    <select
                      onChange={(e) => setCandidateType(e.target.value)}
                      className="form-control form-select category"
                    >
                      <option value="1">Active Candidates</option>
                      <option value="2">New Registration</option>
                      <option value="0">InActive candidates</option>
                      <option value="3">Rejected candidates</option>
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
                            page.map((row) => {
                              prepareRow(row);
                              return (
                                <tr {...row.getRowProps()}>
                                  {row.cells.map((cell) => {
                                    return (
                                      <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                      </td>
                                    );
                                  })}
                                  {CandidateType == 2 || CandidateType == 3 ? (
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
                                              <img
                                                src={DisableDelete}
                                                alt="deleteIcon"
                                                title="Delete"
                                              />
                                            </span>
                                          )}
                                        </span>
                                      </td>
                                      <td>
                                        <span>
                                          {" "}
                                          {row.original.resume === null ? (
                                            <span>
                                              <img
                                                src={NoCvIcon}
                                                alt="cvIcon"
                                                title="CV not Available"
                                              />
                                            </span>
                                          ) : (
                                            <span>
                                              <img
                                                src={CvIcon}
                                                alt="cvIcon"
                                                onClick={() =>
                                                  handleFileDownload(row)
                                                }
                                                className="table-icon"
                                                title="Download CV"
                                              />
                                            </span>
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
                          {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                              {pageSize}
                            </option>
                          ))}
                        </select>
                        <span> of {totalCount} Entries</span>
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
                            resultT.map((item, i) => (
                              <button
                                className={`custom_btn ${
                                  pageIndex === item - 1 ? "active" : ""
                                }`}
                                onClick={() => {
                                  gotoPage(item - 1);
                                }}
                                key={i}
                              >
                                {item}
                              </button>
                            ))}
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

export default CandidateListTable;
