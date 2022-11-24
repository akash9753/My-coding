import React, { useState, useEffect } from "react";
import "./editCandidate.css";
import { useForm } from "react-hook-form";
import Navbar from "../../../commoncomp/Header/navbar";
import SideNavbar from "../../../commoncomp/SideNavbar/sideNavbar";
import { FormCheck, Modal, Button } from "react-bootstrap";
import Footer from "../../../commoncomp/Footer/footer";
import { useNavigate, useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CvIcon from "../../../assets/images/cv.svg";

import {
  faAngleDown,
  faXmark,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import ProjectDetail from "../../../commoncomp/ProjectDetail";
import InvoiceDetail from "../../../commoncomp/InvoiceDetails";
import {
  getPrimaryDisciplines,
  getSmeCategories,
  getCountries,
  editCandidateById,
  getSmeCategoryExpert,
  updateCandidateById,
  downloadFile,
} from "../../../Services/App.service";

const EditCandidate = () => {
  const [show, setShow] = useState(false);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [country, setCountry] = useState([]);
  const [primaryDisciplines, setPrimaryDisciplines] = useState();
  const [deleteFile, setDeleteFile] = useState();
  const [personalLink, setPersonalLink] = useState("");
  const [validateResume, setValidateResume] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [selectDate, setSelectDate] = useState("0");
  const [blacklist, setBlacklist] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    editCandidateById(id)
      .then(async (response) => {
        await getSmeCategoryExpert(response.data.data.sme_cat_id).then(
          (res) => {
            setExpertise(res.data.data);
          }
        );
        if (response.data.data.blacklist === 0) {
          setBlacklist(false);
        } else {
          setBlacklist(true);
        }
        if (response.data.data.status === 1) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        setUser(response.data.data);
        setPersonalLink(response.data.data.personal_folder);
      setSelectDate(response.data.data.nda_signed);
      })
      .catch((err) => {
        return console.error(err.message);
      });
  }, [id]);
  //Category Api
  useEffect(() => {
    getSmeCategories()
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.error("error", err.message);
      });

    getCountries()
      .then((res) => {
        setCountry(res.data.data);
      })
      .catch((err) => {
        console.error("err", err.message);
      });
    getPrimaryDisciplines()
      .then((res) => {
        setPrimaryDisciplines(res.data.data);
      })
      .catch((err) => {
        console.error("error", err.message);
      });
  }, []);

  useEffect(() => {
    // reset form with user data
    reset(user);
  }, [user]);

  const onChangeCategory = async (e) => {
    getSmeCategoryExpert(e.target.value).then((res) => {
      setExpertise(res.data.data);
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
    control,
    getValues,
  } = useForm({
    defaultValues: {
      fname: user?.fname,
      p_email: user?.p_email,
      s_email: user?.s_email,
      p_phone: user?.p_phone,
      s_phone: user?.s_phone,
      p_discipline: user?.p_discipline,
      s_discipline: user?.s_discipline,
      profession: user?.profession,
      qualification: user?.qualification,
      experience_yy: user?.experience_yy,
      experience_mm: user?.experience_mm,
      rel_experience_yy: user?.rel_experience_yy,
      rel_experience_mm: user?.rel_experience_mm,
      hourly_rate: user?.hourly_rate,
      available_hrs: user?.available_hrs,
      currency: user?.currency,
      available_min: user?.available_min,
      projects: user?.projects,
      invoice: user?.invoice,
      // attachments_file: "",
      sme_cat_expert_id: user?.sme_cat_expert_id,
      sme_cat_id: user?.sme_cat_id,
      nda_signed: user?.nda_signed,
    },
    mode: "onChange",
  });

  const submitHandler = async (userInfo) => {
    if (status) {
      userInfo.status = 1;
    } else {
      userInfo.status = 0;
    }
    if (blacklist) {
      userInfo.blacklist = 1;
    } else {
      userInfo.blacklist = 0;
    }
    setLoading(true);

    const formData = new FormData();
    Object.keys(userInfo).forEach((k) => {
      if (userInfo[k] === null) {
        userInfo[k] = "";
      }
    });

    let resume = "";
    if (userInfo.resume[0]?.type) {
      resume = userInfo.resume[0];
      userInfo.resume = resume;
    } else {
      delete userInfo.resume;
    }
    for (let i = 0; i < userInfo?.attachment.length; i++) {
      formData.append("attachments_files[]", userInfo.attachment[i]);
    }
    if (userInfo.invoice) {
      const candInvoice = userInfo.invoice?.filter((item) => {
        return item.invoice_num !== "";
      });
      userInfo.invoice = candInvoice;
    }

    Object.keys(userInfo).forEach((k) => {
      k === "projects" || k === "invoice" || k === "attachments"
        ? userInfo[k].map((item) => {
            return item.project_name !== "" || item.project_manager !== ""
              ? formData.set(k, JSON.stringify(userInfo[k]))
              : formData.set(k, userInfo[k]);
          })
        : formData.set(k, userInfo[k]);
    });

    updateCandidateById(id, formData)
      .then((res) => {
        setShow(true);
        setLoading(false);
      })
      .catch((err) => {
        // console.error("ERROR", err.response);
        if (err.response.status === 400) {
          const errors = err.response.data.error_message;
          const propertyNames = Object.keys(errors);
          setLoading(false);
          propertyNames.forEach((item) => {
            setError(
              item,
              {
                type: "server",
                message: errors[item][0],
              },
              {
                shouldFocus: true,
              }
            );
          });
        }
      });
  };

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();
    }
  };

  const handleFileChange = (e) => {
    e.target.value === "" ? setValidateResume(false) : setValidateResume(true);
  };
  const handleResumeDownload = () => {
    downloadFile(user.resume).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", user.file_name); //or any other extension
      document.body.appendChild(link);
      link.click();
      // return response.data.arrayBuffer()
    });
    // axios
    //   .get(`${Baseurl}/sme/storage/app/${user.resume}`, {
    //     responseType: "blob",
    //   })
    //   .then((response) => response.data.arrayBuffer())
    // .then((blob) => {
    //   const url = window.URL.createObjectURL(new Blob([blob]));
    //   const link = document.createElement("a");
    //   link.href = url;
    //   link.setAttribute("download", user.file_name);
    //   document.body.appendChild(link);
    //   link.click();
    //   link.parentNode.removeChild(link);
    // });
  };

  const handleFileDownload = (item) => {
    downloadFile(item.attachment_url).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", item.attachment_name); //or any other extension
      document.body.appendChild(link);
      link.click();
      // return response.data.arrayBuffer()
    });
  };

  const selectHandler = (id) => {
    setDeleteFile(id);
    setAttachmentModal(!attachmentModal);
  };

  const fileRemoveHandler = () => {
    const item = user.attachments?.filter((item) => item.id !== deleteFile);
    setUser((prevValues) => {
      return { ...prevValues, ["attachments"]: item };
    });
    setAttachmentModal(!attachmentModal);
  };
  return (
    <div>
      <Navbar />
      <div className="second-section">
        <div className="row">
          <div className="col-md-2 left-panel">
            <SideNavbar />
          </div>
          <div className="col-md-10 right-panel">
            <h5>
              Edit Detail -<span className="candidate-name">{user?.fname}</span>
            </h5>
            <p className="valid-msg">*All Fields are Mandatory</p>
            {user && (
              <form onSubmit={handleSubmit(submitHandler)} name="myForm">
                <div className="row intial_section">
                  <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label className="label-contanet">
                        Working as<span className="manditory">*</span>
                      </label>
                      <select
                        className="form-control form-select category"
                        name="category"
                        {...register("sme_cat_id", {
                          required: "this field is required",
                          onChange: (e) => onChangeCategory(e),
                        })}
                        onKeyDown={handleEnter}
                      >
                        <option value="">Select</option>
                        {category?.map((item, key) => (
                          <option key={key} value={item.id}>
                            {item.category_name}
                          </option>
                        ))}
                      </select>
                      <p className="error-msg">{errors.sme_cat_id?.message}</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 col-xs-3">
                    <div className="form-group">
                      <label
                        className="label-contanet"
                        htmlFor="exampleInputEmail1"
                      >
                        Expertise<span className="manditory">*</span>
                      </label>
                      <select
                        className="form-control form-select category"
                        {...register("sme_cat_expert_id", {
                          required: "this field is required",
                        })}
                        onKeyDown={handleEnter}
                      >
                        <option value="">Select</option>
                        {expertise?.map((item, key) => (
                          <option key={key} value={item.id}>
                            {item.experties_name}
                          </option>
                        ))}
                      </select>
                      <p className="error-msg">
                        {errors.sme_cat_expert_id?.message}
                      </p>
                    </div>
                  </div>

                  <div className="col-md-1">
                    <div style={{ display: "flex", marginTop: 37 }}>
                      <FormCheck
                        type="switch"
                        defaultChecked={user.status}
                        {...register("status")}
                        checked={status}
                        label="Active"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setBlacklist(false);
                            setStatus(true);
                          } else {
                            setBlacklist(true);
                            setStatus(false);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div
                      style={{ display: "flex", marginTop: 37, marginLeft: 13 }}
                    >
                      <FormCheck
                        type="switch"
                        {...register("blacklist")}
                        checked={blacklist}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setStatus(false);
                            setBlacklist(true);
                          } else {
                            setStatus(true);
                            setBlacklist(false);
                          }
                        }}
                        label="Blacklist"
                      />
                    </div>
                  </div>
                  <div />
                </div>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="form-detailed ac-header  ">
                      <span className="icon-background">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="arrow-icon"
                        />
                      </span>
                      <span className="personal">Personal Details</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Candidate Name<span className="manditory">*</span>
                            </label>
                            <input
                              type="text"
                              {...register("fname", {
                                required: "This field is required",
                              })}
                              className="form-control"
                              onKeyDown={handleEnter}
                            />
                            <p className="error-msg">{errors.fname?.message}</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Primary Email
                            </label>
                            <input
                              type="email"
                              {...register("p_email", {
                                minLength: {
                                  value: 4,
                                  message: "Please Enter a Valid Email Address",
                                },
                                maxLength: {
                                  value: 32,
                                  message: "Please Enter a Valid Email Address",
                                },
                                pattern: {
                                  value:
                                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: "Please Enter a Valid email Address",
                                },
                                // pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
                              })}
                              className="form-control"
                              onKeyDown={handleEnter}
                            />
                            <p className="error-msg">
                              {errors.p_email?.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Secondary Email
                            </label>
                            <input
                              type="email"
                              {...register("s_email", {
                                minLength: {
                                  value: 4,
                                  message: "Please Enter a Valid email Address",
                                },
                                maxLength: {
                                  value: 32,
                                  message: "Please Enter a Valid email Address",
                                },
                                pattern: {
                                  value:
                                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                  message: "Please Enter a Valid email Address",
                                },
                                validate: {
                                  emailEqual: (value) => {
                                    if (
                                      value === getValues().p_email &&
                                      value !== "" &&
                                      value !== null &&
                                      getValues().p_email !== "" &&
                                      getValues().p_email !== null
                                    ) {
                                      return "secondary email cannot be same as primary email";
                                    }
                                  },
                                },
                              })}
                              className="form-control"
                              onKeyDown={handleEnter}
                            />
                            <p className="error-msg">
                              {errors.s_email?.message}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Street/Locality
                            </label>
                            <textarea
                              type="text"
                              {...register("address")}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">City</label>
                            <input
                              type="text"
                              {...register("city")}
                              className="form-control"
                              onKeyDown={handleEnter}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">State</label>
                            <input
                              type="text"
                              {...register("state")}
                              className="form-control"
                              onKeyDown={handleEnter}
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">Pincode</label>
                            <input
                              type="number"
                              {...register("pincode")}
                              className="form-control"
                              onKeyDown={handleEnter}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Country<span className="manditory">*</span>
                            </label>
                            <select
                              className="form-control form-select"
                              {...register("country", {
                                required: "This field is required",
                              })}
                              onKeyDown={handleEnter}
                            >
                              <option value="">Select</option>
                              {country?.map((country, index) => (
                                <option key={index} value={country.id}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                            <p className="error-msg">
                              {errors.country?.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              {" "}
                              Primary Phone
                            </label>
                            <input
                              type="text"
                              {...register("p_phone", {
                                minLength: {
                                  value: 10,
                                  message: "Please Enter valid Phone Number",
                                },

                                maxLength: {
                                  value: 12,
                                  message:
                                    "phone number must contain 8 to 12 numbers only",
                                },
                              })}
                              className="form-control"
                              id="phonenumber"
                              aria-describedby="phone_p"
                              onKeyDown={handleEnter}
                            />
                            <p className="error-msg">
                              {errors.p_phone?.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Secondary Phone
                            </label>
                            <input
                              type="text"
                              {...register("s_phone", {
                                maxLength: {
                                  value: 12,
                                  message:
                                    "phone number must contain 8 to 12 numbers only",
                                },
                                validate: {
                                  phoneEqual: (value) => {
                                    if (
                                      value === getValues().p_phone &&
                                      value !== "" &&
                                      value !== null &&
                                      getValues().p_phone !== "" &&
                                      getValues().p_phone !== null
                                    ) {
                                      return "secondary phone cannot be same as primary phone";
                                    }
                                  },
                                },
                              })}
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="phone_p"
                              onKeyDown={handleEnter}
                            />
                            <p className="error-msg">
                              {errors.s_phone?.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="form-detailed ac-header">
                      <span className="icon-background">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="arrow-icon"
                        />
                      </span>
                      <span className="personal">
                        Occupations and Experience
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="label-contanet"
                              htmlFor="exampleInputEmail1"
                            >
                              Primary Discipline
                              <span className="manditory">*</span>
                            </label>

                            <select
                              className="form-control form-select category"
                              {...register("p_discipline", {
                                required: "this field is required",
                              })}
                              onKeyDown={handleEnter}
                            >
                              <option value="">Select</option>
                              {primaryDisciplines?.map((item, key) => (
                                <option key={key} value={item.id}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                            <p className="error-msg">
                              {errors.p_discipline?.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="label-contanet"
                              htmlFor="exampleInputEmail1"
                            >
                              Secondary Discipline
                            </label>
                            <input
                              type="text"
                              {...register("s_discipline")}
                              className="form-control"
                              onKeyDown={handleEnter}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="label-contanet"
                              htmlFor="exampleInputEmail1"
                            >
                              Profession
                            </label>
                            <input
                              type="text"
                              {...register("profession")}
                              className="form-control"
                              onKeyDown={handleEnter}
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              className="label-contanet"
                              htmlFor="exampleFormControlInput1"
                            >
                              Qualification<span className="manditory">*</span>
                            </label>
                            <input
                              type="text"
                              {...register("qualification", {
                                required: "This field is required",
                              })}
                              className="form-control"
                              onKeyDown={handleEnter}
                              id="exampleFormControlInput1"
                            />

                            <p className="error-msg">
                              {errors.qualification?.message}
                            </p>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <label
                            className="label-contanet"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Experience<span className="manditory">*</span>
                          </label>
                          <div className="row">
                            <div className="col-2 form-group drpDown">
                              <select
                                className="form-control form-select form-width"
                                {...register("experience_yy", {
                                  required: "This is required",
                                })}
                                onKeyDown={handleEnter}
                              >
                                <option value="">Select</option>
                                <option value="0">0 yrs</option>
                                <option value="1">1 yrs</option>
                                <option value="2">2 yrs</option>
                                <option value="3">3 yrs</option>
                                <option value="4">4 yrs</option>
                                <option value="5">5 yrs</option>
                                <option value="6">6 yrs</option>
                                <option value="7">7 yrs</option>
                                <option value="8">8 yrs</option>
                                <option value="9">9 yrs</option>
                                <option value="10">10 yrs</option>
                                <option value="11">11 yrs</option>
                                <option value="12">12 yrs</option>
                                <option value="13">13 yrs</option>
                                <option value="14">14 yrs</option>
                                <option value="15">15 yrs</option>
                                <option value="16">16 yrs</option>
                                <option value="17">17 yrs</option>
                                <option value="18">18 yrs</option>
                                <option value="19">19 yrs</option>
                                <option value="20">20 yrs</option>
                                <option value="21">21 yrs</option>
                                <option value="22">22 yrs</option>
                                <option value="23">23 yrs</option>
                                <option value="24">24 yrs</option>
                                <option value="25">25 yrs</option>
                              </select>
                              <p className="error-msg">
                                {errors.experience_yy?.message}
                              </p>
                            </div>
                            <div className="col-2 form-group drpDown">
                              <select
                                className="form-control form-select form-width"
                                {...register("experience_mm", {
                                  required: "This is required",
                                })}
                                onKeyDown={handleEnter}
                              >
                                <option value="">Select</option>
                                <option value="0">0 months</option>
                                <option value="1">1 months</option>
                                <option value="2">2 months</option>
                                <option value="3">3 months</option>
                                <option value="4">4 months</option>
                                <option value="5">5 months</option>
                                <option value="6">6 months</option>
                                <option value="7">7 months</option>
                                <option value="8">8 months</option>
                                <option value="9">9 months</option>
                                <option value="10">10 months</option>
                                <option value="11">11 months</option>
                                <option value="12">12 months</option>
                              </select>
                              <p className="error-msg">
                                {errors.experience_mm?.message}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 col-sm-12 col-xs-12">
                          <label
                            className="label-contanet"
                            htmlFor="exampleFormControlSelect1"
                          >
                            Relevent Experience
                          </label>
                          <div className="row">
                            <div className="col-2 form-group drpDown">
                              <select
                                className="form-control form-select form-width"
                                {...register("rel_experience_yy")}
                                onKeyDown={handleEnter}
                              >
                                <option value="">Select</option>
                                <option value="0">0 yrs</option>
                                <option value="1">1 yrs</option>
                                <option value="2">2 yrs</option>
                                <option value="3">3 yrs</option>
                                <option value="4">4 yrs</option>
                                <option value="5">5 yrs</option>
                                <option value="6">6 yrs</option>
                                <option value="7">7 yrs</option>
                                <option value="8">8 yrs</option>
                                <option value="9">9 yrs</option>
                                <option value="10">10 yrs</option>
                                <option value="11">11 yrs</option>
                                <option value="12">12 yrs</option>
                                <option value="13">13 yrs</option>
                                <option value="14">14 yrs</option>
                                <option value="15">15 yrs</option>
                                <option value="16">16 yrs</option>
                                <option value="17">17 yrs</option>
                                <option value="18">18 yrs</option>
                                <option value="19">19 yrs</option>
                                <option value="20">20 yrs</option>
                                <option value="21">21 yrs</option>
                                <option value="22">22 yrs</option>
                                <option value="23">23 yrs</option>
                                <option value="24">24 yrs</option>
                                <option value="25">25 yrs</option>
                              </select>
                            </div>
                            <div className="col-2 form-group drpDown">
                              <select
                                className="form-control form-select form-width"
                                {...register("rel_experience_mm")}
                                onKeyDown={handleEnter}
                              >
                                <option value="">Select</option>
                                <option value="0">0 months</option>
                                <option value="1">1 months</option>
                                <option value="2">2 months</option>
                                <option value="3">3 months</option>
                                <option value="4">4 months</option>
                                <option value="5">5 months</option>
                                <option value="6">6 months</option>
                                <option value="7">7 months</option>
                                <option value="8">8 months</option>
                                <option value="9">9 months</option>
                                <option value="10">10 months</option>
                                <option value="11">11 months</option>
                                <option value="12">12 months</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="form-detailed ac-header">
                      <span className="icon-background">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="arrow-icon"
                        />
                      </span>
                      <span className="personal">Preferences and Resume</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="form-group">
                        <label
                          className="label-contanet"
                          htmlFor="exampleInputEmail1"
                        >
                          LinkedIn Profile
                        </label>
                        <input
                          type="text"
                          {...register("linkedin")}
                          className="form-control"
                          onKeyDown={handleEnter}
                        />
                        <p className="error-msg">{errors.linkedin?.message}</p>
                      </div>
                      <div className="form-group">
                        <label
                          className="label-contanet"
                          htmlFor="exampleInputEmail1"
                        >
                          Attach Resume<span className="manditory">*</span>
                        </label>

                        <div className="form-group fileUpload">
                          <label className="custom-file-upload">
                            <input
                              type="file"
                              className="align-input hide-file"
                              {...register(
                                "resume",
                                validateResume
                                  ? {
                                      validate: {
                                        lessThan10MB: (files) =>
                                          files[0]?.size < 10000000 ||
                                          "Max 10MB",
                                        acceptedFormats: (files) => {
                                          return (
                                            files[0].type ===
                                              "application/pdf" ||
                                            files[0].type === "text/plain" ||
                                            files[0].type === "application/doc"
                                          );
                                        },
                                      },
                                    }
                                  : {
                                      validate: false,
                                    }
                              )}
                              onKeyDown={handleEnter}
                              onChange={(e) => handleFileChange(e)}
                              accept=".pdf,.docx,.xlsx"
                            />
                            Browse
                          </label>

                          <div>
                            {/* <span className="empty"></span> */}
                            {user.file_name ? (
                              <div>
                                <span className="fileName"></span>
                                <span className="file-name">{`(${user.file_name})`}</span>

                                <span onClick={handleResumeDownload}>
                                  <span>
                                    <img
                                      src={CvIcon}
                                      alt="cvIcon"
                                      className="table-icon"
                                    />
                                  </span>
                                  <span className="resume_download">
                                    Download Resume
                                  </span>
                                </span>
                              </div>
                            ) : (
                              ""
                            )}

                            <span className="error-msg">
                              {errors.resume?.message}
                            </span>
                            {errors.resume?.size === "lessThan10MB" && (
                              <span className="error-msg">
                                {" "}
                                Must Be Under 10MB
                              </span>
                            )}
                            {errors.resume?.type === "acceptedFormats" && (
                              <span className="error-msg">
                                File Must be txt,pdf,doc
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="form-detailed ac-header">
                    <span className="icon-background">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="arrow-icon"
                      />
                    </span>
                    <span className="personal">NDA</span>
                  </Accordion.Header>
                  <Accordion.Body>
                  <div className="row">
                        <div className="col-md-2 col-sm-12 col-xs-12">
                          <div className="label-contanet">
                            NDA Signed <span className="manditory">*</span>
                          </div>
                          <div className="radio-block pt-2">
                            <label htmlFor="nda-yes" className="radio-label">
                              <input
                                {...register("nda_signed", {
                                  required: "This field is required",
                                  onChange: (e) =>
                                    setSelectDate(e.target.value),
                                })}
                                type="radio"
                                name="nda_signed"
                                value="yes"
                                className="me-2"
                              />
                              Yes
                            </label>
                            <span className="ms-3">
                              <label htmlFor="nda-no" className="radio-label">
                                <input
                                  {...register("nda_signed", {
                                    required: "This field is required",
                                    onChange: (e) =>
                                      setSelectDate(e.target.value),
                                  })}
                                  type="radio"
                                  name="nda_signed"
                                  value="no"
                                  className="me-2"
                                />
                                No
                              </label>
                            </span>
                          </div>
                          <p className="error-msg">
                            {errors.nda_signed?.message}
                          </p>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12  form-group">
                          <label
                            className="label-contanet"
                            for="exampleFormControlSelect1"
                          >
                            NDA Start Date
                          </label>
                          <input
                            type="date"
                            {...register("nda_start", {
                              disabled: selectDate === "yes" ? false : true,
                            })}
                            className="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12  form-group">
                          <label
                            className="label-contanet"
                            for="exampleFormControlSelect1"
                          >
                            NDA End Date
                          </label>
                          <input
                            type="date"
                            {...register("nda_end", {
                              disabled: selectDate === "yes" ? false : true,
                            })}
                            className="form-control"
                            id="exampleInputEmail1"
                          />
                        </div>
                      </div>
                  </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="form-detailed ac-header">
                      <span className="icon-background">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="arrow-icon"
                        />
                      </span>
                      <span className="personal">Project Details</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ProjectDetail
                        register={register}
                        handleEnter={handleEnter}
                        errors={errors}
                        control={control}
                      />
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="form-detailed ac-header">
                      <span className="icon-background">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="arrow-icon"
                        />
                      </span>
                      <span className="personal">Invoice Details</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div>
                        <InvoiceDetail
                          register={register}
                          handleEnter={handleEnter}
                          errors={errors}
                          control={control}
                        />
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0" className="mb-5 mb">
                    <Accordion.Header className="form-detailed ac-header">
                      <span className="icon-background">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="arrow-icon"
                        />
                      </span>
                      <span className="personal">Attach Documents</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="mb-5 mb">
                        <div
                          className="p-4 mb-2"
                          style={{
                            background: "#eff6fc 0% 0% no-repeat padding-box",
                            borderRadius: "3px",
                          }}
                        >
                          <div className="row">
                            <div className="col-12 form-group">
                              <div className="form-group fileUpload">
                                <label
                                  className="label-contanet"
                                  htmlFor="exampleFormControlSelect1"
                                >
                                  Attachment
                                  {/* <span className="manditory">*</span> */}
                                </label>
                                <label className="custom-file-upload bg-white">
                                  <input
                                    type="file"
                                    {...register("attachment")}
                                    className="align-input res-file-position"
                                    onKeyDown={handleEnter}
                                    multiple
                                  />
                                  Browse
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex flex-row">
                              {user.attachments?.map((item, i) => (
                                <div key={i}>
                                  <span className="file-name">
                                    {(i ? ",  " : "") +
                                      item.attachment_name +
                                      " "}
                                  </span>
                                  <span
                                    onClick={() => handleFileDownload(item)}
                                  >
                                    <span>
                                      <img
                                        src={CvIcon}
                                        alt="cvIcon"
                                        className="table-icon"
                                      />
                                    </span>
                                  </span>
                                  <FontAwesomeIcon
                                    icon={faXmark}
                                    className="table-icon text-danger"
                                    style={{
                                      paddingLeft: "3px",
                                      paddingRight: "4px",
                                    }}
                                    onClick={() => selectHandler(item.id)}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <Modal
                            show={attachmentModal}
                            onHide={() => setAttachmentModal(!attachmentModal)}
                            centered
                            dialogClassName="modal-box"
                          >
                            <Modal.Header>
                              <Modal.Title>Remove Attachment</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              Are you sure you want to remove this attachment?
                            </Modal.Body>
                            <Modal.Footer>
                              <Button
                                variant="secondary"
                                onClick={() =>
                                  setAttachmentModal(!attachmentModal)
                                }
                              >
                                Cancel
                              </Button>
                              <Button
                                variant="primary"
                                onClick={fileRemoveHandler}
                              >
                                OK
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </div>

                        <div className="mb-5">
                          <div className="row">
                            <div className="col-10 col-sm-10 col-md-10  colxs-10">
                              <div className="form-group">
                                <label className="label-contanet">
                                  Personal Folder Link
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  {...register("personal_folder", {
                                    onChange: (e) =>
                                      setPersonalLink(e.target.value),
                                  })}
                                />
                              </div>
                            </div>

                            <div
                              className="col-md-2 col-sm-12 colxs-12 personal-link"
                              style={{ paddingTop: "33px" }}
                            >
                              {personalLink === "" || personalLink === null ? (
                                ""
                              ) : (
                                <a
                                  href={personalLink}
                                  target="blank"
                                  style={{ color: "#333333" }}
                                >
                                  {" "}
                                  <span>
                                    {" "}
                                    <FontAwesomeIcon
                                      icon={faPaperclip}
                                      style={{ color: "#1f88d5" }}
                                    />
                                  </span>{" "}
                                  Open
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="form-detailed ac-header">
                      <span className="icon-background">
                        <FontAwesomeIcon
                          icon={faAngleDown}
                          className="arrow-icon"
                        />
                      </span>
                      <span className="personal">Additional Details</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="row mb-4 detail-block ">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                          <p className="label-contanet">Email Sent</p>
                          <div className="radio-block">
                            <label htmlFor="email-yes" className="radio-label">
                              <input
                                {...register("email_sent")}
                                type="radio"
                                name="email_sent"
                                value="yes"
                                id="email-yes"
                                className="me-2"
                              />
                              Yes
                            </label>
                            <span className="ms-3">
                              <label htmlFor="email-no" className="radio-label">
                                <input
                                  {...register("email_sent")}
                                  type="radio"
                                  name="email_sent"
                                  value="no"
                                  id="email-no"
                                  className="me-2"
                                />
                                No
                              </label>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                          <p className="label-contanet">
                            LinkedIn Request Sent
                          </p>
                          <div className="radio-block">
                            <label
                              htmlFor="request-yes"
                              className="radio-label"
                            >
                              <input
                                {...register("link_req_sent")}
                                type="radio"
                                name="link_req_sent"
                                value="yes"
                                id="request-yes"
                                className="me-2"
                              />
                              Yes
                            </label>
                            <span className="ms-3">
                              <label
                                htmlFor="request-no"
                                className="radio-label"
                              >
                                <input
                                  {...register("link_req_sent")}
                                  type="radio"
                                  name="link_req_sent"
                                  value="no"
                                  id="request-no"
                                  className="me-2"
                                />
                                No
                              </label>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                          <p className="label-contanet">
                            LinkedIn Request Accepted
                          </p>
                          <div className="radio-block">
                            <label
                              htmlFor="linkedin-yes"
                              className="radio-label"
                            >
                              <input
                                {...register("link_req_accept")}
                                type="radio"
                                name="link_req_accept"
                                value="yes"
                                id="linkedin-yes"
                                className="me-2"
                              />
                              Yes
                            </label>
                            <span className="ms-3">
                              <label
                                htmlFor="linkedin-no"
                                className="radio-label"
                              >
                                <input
                                  {...register("link_req_accept")}
                                  type="radio"
                                  name="link_req_accept"
                                  value="no"
                                  id="linkedin-no"
                                  className="me-2"
                                />
                                No
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-4 detail-block">
                        <div className="col-9">
                          <p className="label-contanet">Availability</p>
                          <div className="radio-block">
                            <label
                              htmlFor="available-yes"
                              className="radio-label"
                            >
                              <input
                                {...register("availability")}
                                type="radio"
                                name="availability"
                                value="yes"
                                id="available-yes"
                                className="me-2"
                              />
                              Yes
                            </label>
                            <span className="ms-3">
                              <label
                                htmlFor="available-no"
                                className="radio-label"
                              >
                                <input
                                  {...register("availability")}
                                  type="radio"
                                  name="availability"
                                  value="no"
                                  id="available-no"
                                  className="me-2"
                                />
                                No
                              </label>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <div className="btm-border mb-3" />
                <div className="from-group buttons">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => navigate("/administrator/candidateList")}
                  >
                    Cancel
                  </button>
                  <button
                    disabled={isSubmitting}
                    className="btn btn-primary mr-1"
                    style={{ width: "100px" }}
                  >
                    Submit{" "}
                    <span
                      className={
                        loading ? "spinner-border spinner-border-sm mr-1" : null
                      }
                    ></span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <Footer />
      </div>
      <Modal
        show={show}
        onHide={() => setShow(!show)}
        centered
        dialogClassName="modal-box"
      >
        <Modal.Header>
          <Modal.Title>Candidate Updated</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The detail of the Candidate has been updated successfully
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={() => setShow(!show)}>
          Cancel
        </Button> */}
          <Button
            variant="primary"
            onClick={() => {
              setShow(!show);
              navigate("/administrator/candidateList");
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditCandidate;
