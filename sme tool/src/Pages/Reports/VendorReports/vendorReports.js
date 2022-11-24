import React, { useEffect, useState, useRef, useReducer } from "react";
import "../../Candidate/AddNewCandidate/addNewCandidate.css";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Navbar from "../../../commoncomp/Header/navbar";
import SideNavbar from "../../../commoncomp/SideNavbar/sideNavbar";
import CardsPagination from "../../../utils/cardsPagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../commoncomp/Footer/footer";
import CvIcon from "../../../assets/images/download-2.svg";
import EditIcon from "../../../assets/images/edit-white.svg";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import "../../../commoncomp/SideNavbar/responsive.css";
import "./vendorReport.css";
import { Reducer } from "../../../Store/reducers/reducer";
import {
  getReportFilters,
  getCountries,
  getVendorServices,
  downloadFile,
  searchVendorReports,
} from "../../../Services/App.service";
import {
  vendorReportPageChange,
  vendorReportSearch,
} from "../../../Store/actions/actions";

const VendorReports = () => {
  const [info, setInfo] = useState();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const [primaryDisc, setPrimaryDisc] = useState([]);
  const [profession, setProfession] = useState([]);
  const [country, setCountry] = useState();
  const [vendorServices, setVendorServices] = useState();
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [totalCount, setTotalCount] = useState();
  const [laodNextPage, setLoadNextPage] = useState(false);
  const [showServices, setShowServices] = useState();
  const [searchValues, setSearchValues] = useState({
    key_word: "",
    services: [],
    p_discipline: "",
    company_size: "",
    city: "",
    country: "",
    nda_signed: "",
    assigned_project: "",
  });

  const initialState = {
    queryVendorCurrentIndex: currentPage - 1,
    queryPageSize: postsPerPage,
    queryVendorSearch: {},
  };

  const ref = useRef();
  let navigate = useNavigate();

  const fetchVendorReportList = () => {
    setInfo();
    setLoadNextPage(true);
    const formData = new FormData();
    // const values = {
    //   limit: queryPageSize,
    //   offset: queryVendorCurrentIndex - 1,
    //   key_word: queryVendorSearch.key_word,
    //   services: queryVendorSearch.services,
    //   p_discipline: queryVendorSearch.p_discipline,
    //   company_size: queryVendorSearch.company_size,
    //   city: queryVendorSearch.city,
    //   country: queryVendorSearch.country,
    //   nda_signed: queryVendorSearch.nda_signed,
    //   assigned_project: queryVendorSearch.assigned_project,
    // };

    formData.append("limit", queryPageSize);
    formData.append("offset", queryVendorCurrentIndex - 1);
    formData.append("key_word", queryVendorSearch.key_word);
    formData.append("services", JSON.stringify(queryVendorSearch.services));
    formData.append("p_discipline", queryVendorSearch.p_discipline);
    formData.append("company_size", queryVendorSearch.company_size);
    formData.append("city", queryVendorSearch.city);
    formData.append("country", queryVendorSearch.country);
    formData.append("nda_signed", queryVendorSearch.nda_signed);
    formData.append("assigned_project", queryVendorSearch.assigned_project);

    searchVendorReports(formData)
      .then((res) => {
        setLoadNextPage(false);
        setTotalCount(res.data.total_count);
        setErr(false);
        setInfo(res.data.data);
      })
      .catch((err) => {
        console.error("err", err.message);
      });
  };

  const [
    { queryVendorCurrentIndex, queryPageSize, queryVendorSearch },
    dispatch,
  ] = useReducer(Reducer, initialState);

  const { isLoading, error, data, isSuccess } = useQuery(
    [
      "smeSearchlist",
      queryVendorCurrentIndex,
      queryPageSize,
      queryVendorSearch,
    ],
    fetchVendorReportList,
    {
      enabled: isSubmitSuccessful,
    }
  );

  const routeChange = (id) => {
    navigate(`/administrator/edit-company/${id}`);
  };

  const showPopup = (id) => {
    if (id === showText) {
      return setShowText(false);
    }
    setShowText(id);
  };

  useEffect(() => {
    const outsideClick = (e) => {
      if (showText && ref.current && !ref.current.contains(e.target)) {
        setShowText(false);
      }
    };
    document.addEventListener("mousedown", outsideClick);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", outsideClick);
    };
  }, [showText]);
  useEffect(() => {
    getReportFilters()
      .then((res) => {
        setPrimaryDisc(res.data.data.p_discipline);
        setProfession(res.data.data.profession);
      })
      .catch((err) => {
        console.error("error", err.message);
      });

    getCountries()
      .then((res) => {
        setCountry(res.data.data);
      })
      .catch((err) => {
        console.error("err", err.menssage);
      });

    getVendorServices()
      .then((res) => {
        setVendorServices(res.data.data);
      })
      .catch((err) => {
        console.error("err", err.message);
      });
  }, []);

  const handleFileDownload = (item) => {
    if (item.resume === "") {
      return null;
    }
    downloadFile(item.resume)
      .then((response) => {
        return response.data.arrayBuffer();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", item.file_name);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };
  const onsubmit = async (data) => {
    setLoading(true);
    if (data.services === undefined) {
      data.services = [];
    }
    const formData = new FormData();
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000)

    const values = {
      limit: postsPerPage,
      offset: currentPage - 1,
      key_word: data.key_word,
      services: data.services,
      p_discipline: data.p_discipline,
      company_size: data.company_size,
      city: data.city,
      country: data.country,
      nda_signed: data.nda_signed,
      assigned_project: data.assigned_project,
    };

    formData.append("limit", values.limit);
    formData.append("offset", values.offset);
    formData.append("key_word", data.key_word);
    formData.append("services", JSON.stringify(data.services));
    formData.append("p_discipline", data.p_discipline);
    formData.append("company_size", data.company_size);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("nda_signed", data.nda_signed);
    formData.append("assigned_project", data.assigned_project);

    setCurrentPage(1);
    setSearchValues(values);
    searchVendorReports(formData)
      .then((res) => {
        setErr(false);
        setInfo(res.data.data);
        setTotalCount(res.data.total_count);
        setLoading(false);
      })
      .catch((err) => {
        console.error("err", err.message);
      });
  };

  useEffect(() => {
    dispatch(vendorReportPageChange(currentPage));
  }, [currentPage]);

  useEffect(() => {
    dispatch(vendorReportSearch(searchValues));
  }, [searchValues]);

  // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = info?.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const goToPrevPage = () => setCurrentPage(currentPage - 1);

  const goToNextPage = () => setCurrentPage(currentPage + 1);
  return (
    <div>
      <Navbar />
      <div className="second-section">
        <div className="row">
          <div className="col-md-2 left-panel">
            <SideNavbar />
          </div>
          <div className="col-md-10 right-panel">
            <h3 className="report-heading">Vendor Reports</h3>

            <h5>Filter By</h5>
            <form className="report-form" onSubmit={handleSubmit(onsubmit)}>
              <div className="row mb-3">
                <div className="col-12">
                  <label className="label-contanet">Keyword</label>
                  <input
                    type="text"
                    {...register("key_word")}
                    className="form-control"
                    placeholder="Search by Keyword"
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-xs-2 col-md-4">
                  <div className="form-group">
                    <label
                      className="label-contanet"
                      htmlFor="exampleFormControlSelect1"
                    >
                      Service Offering
                    </label>
                    <Controller
                      control={control}
                      name="services"
                      render={({ field: { onChange } }) => (
                        <CreatableSelect
                          isMulti
                          onChange={onChange}
                          options={vendorServices}
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="col-xs-2 col-md-4">
                  <div className="form-group">
                    <label
                      className="label-contanet"
                      htmlFor="exampleFormControlSelect1"
                    >
                      Primary Discipline
                    </label>
                    <input
                      type="text"
                      {...register("p_discipline")}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-xs-2 col-md-4">
                  <div className="form-group">
                    <label
                      className="label-contanet"
                      htmlFor="exampleFormControlSelect1"
                    >
                      Company Size
                    </label>
                    <input
                      type="text"
                      {...register("company_size")}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-2 col-md-4">
                  <div className="form-group">
                    <label className="label-contanet">City</label>
                    <input
                      type="text"
                      {...register("city")}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-xs-2 col-md-4">
                  <div className="form-group">
                    <label
                      className="label-contanet"
                      htmlFor="exampleFormControlSelect1"
                    >
                      Country
                    </label>
                    <select
                      className="form-control form-select"
                      {...register("country")}
                      id="exampleFormControlSelect1"
                    >
                      <option value="">Select</option>
                      {country?.map((country, index) => (
                        <option key={index} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 pt-4">
                  <label className="mt-2">NDA Signed</label>
                  <div
                    className="d-inline-block"
                    style={{ marginLeft: "15px" }}
                  >
                    <label htmlFor="assigned_yes" className="radio-label">
                      <input
                        {...register("nda_signed")}
                        type="radio"
                        name="nda_signed"
                        value="yes"
                        id="assigned_yes"
                        className="me-2"
                      />
                      Yes
                    </label>
                    <span className="ms-3">
                      <label htmlFor="assigned_no" className="radio-label">
                        <input
                          {...register("nda_signed")}
                          type="radio"
                          name="nda_signed"
                          value="no"
                          id="assigned_no"
                          className="me-2"
                        />
                        No
                      </label>
                    </span>
                  </div>
                </div>
                <div className="col-md-4 pt-4">
                  <label className="mt-2">Assigned to Project</label>
                  <div
                    className="d-inline-block"
                    style={{ marginLeft: "15px" }}
                  >
                    <label htmlFor="assigned_yes" className="radio-label">
                      <input
                        {...register("assigned_project")}
                        type="radio"
                        name="assigned_project"
                        value="yes"
                        id="assigned_yes"
                        className="me-2"
                      />
                      Yes
                    </label>
                    <span className="ms-3">
                      <label htmlFor="assigned_no" className="radio-label">
                        <input
                          {...register("assigned_project")}
                          type="radio"
                          name="assigned_project"
                          value="no"
                          id="assigned_no"
                          className="me-2"
                        />
                        No
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              <div className="from-group buttons-report">
                <button className="btn btn-primary">
                  Search{" "}
                  <span
                    className={
                      loading ? "spinner-border spinner-border-sm mr-1" : null
                    }
                  ></span>
                </button>
              </div>
            </form>
            {/* <p className="form-detailed-2"></p> */}
            {loading || laodNextPage ? (
              <div className="no-match">loading vendors....</div>
            ) : err ? (
              <div className="no-match">No Match Found</div>
            ) : info?.length === 0 && info != undefined ? (
              <div className="no-match">No Match Found</div>
            ) : (
              <div className="cards-block">
                <div className="row">
                  {info?.map((item, index) => (
                    <div
                      className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-3"
                      key={index}
                    >
                      <div className="report-cards">
                        <div className="report-icon">
                          <FontAwesomeIcon
                            className="ellipsis"
                            icon={faEllipsis}
                            onClick={() => showPopup(item.id)}
                          />
                          {showText === item.id ? (
                            <div className="download-section">
                              <div
                                className="editCard"
                                onClick={() => routeChange(item.id)}
                              >
                                <span>
                                  <img
                                    src={EditIcon}
                                    alt="editIcon"
                                    className="table-icon"
                                  />
                                </span>
                                <span>Edit</span>
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className="content-block">
                          <div className="content-exp">{item.city}</div>
                          <div className="content-name">
                            {item.company_name}
                          </div>
                          <div className="content-disc">
                            {item.p_discipline}
                          </div>
                          <div
                            className="content-proff"
                            onMouseEnter={() => setShowServices(item.id)}
                          >
                            {item.services.length != 0 &&
                              item.services
                                ?.map(({ service_name }) => service_name)
                                .join(", ")
                                .substring(0, 40) + "..."}
                          </div>
                          <div>
                            {showServices === item.id ? (
                              <div
                                className="service-list-tip"
                                onMouseLeave={() => setShowServices(false)}
                              >
                                <div className="editCard">
                                  {/* <span>
                                    <img
                                      src={EditIcon}
                                      alt="editIcon"
                                      className="table-icon"
                                    />
                                  </span> */}
                                  <ul>
                                    {item.services?.map(({ service_name }) => (
                                      <li>{service_name}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="content-mail">{item.email}</div>
                          <div className="content-mail">{item.phone}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {info != undefined && info?.length !== 0 ? (
                  <CardsPagination
                    postsPerPage={postsPerPage}
                    totalPosts={totalCount}
                    currentPage={currentPage}
                    goToPage={goToPage}
                    goToPrevPage={goToPrevPage}
                    goToNextPage={goToNextPage}
                  />
                ) : null}
              </div>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default VendorReports;
