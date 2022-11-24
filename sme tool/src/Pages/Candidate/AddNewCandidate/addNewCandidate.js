import React, { useState, useEffect, useRef } from "react";
import "../AddNewCandidate/addNewCandidate.css";
import "../../../commoncomp/SideNavbar/responsive.css";
import Footer from "../../../commoncomp/Footer/footer";
import { useForm } from "react-hook-form";
import Navbar from "../../../commoncomp/Header/navbar";
import SideNavbar from "../../../commoncomp/SideNavbar/sideNavbar";
import { Modal, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { Accordion } from "react-bootstrap";
import ProjectDetail from "../../../commoncomp/ProjectDetail";
import InvoiceDetail from "../../../commoncomp/InvoiceDetails";
import AttachDocument from "../../../commoncomp/attachDocument";
import {
  getSmeCategories,
  getCountries,
  getSmeCategoryExpert,
  createCandidate,
  getPrimaryDisciplines,
} from "../../../Services/App.service";

const AddnewCandidate = () => {
  const [show, setShow] = useState(false);
  // const [submitting, setSubmitting] = useState(false);
  const [isDisable, setIsdisable] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [personalLink, setPersonalLink] = useState("");
  const [loading, setLoadiing] = useState(false);
  const [data, setData] = useState("");
  const [category, setCategory] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [phonenum, setPhonenum] = useState();
  const [country, setCountry] = useState([]);
  const [primaryDisciplines, setPrimaryDisciplines] = useState();  
  const [selectDate, setSelectDate] = useState("0");
  const primary_email = useRef(null);
  const primary_phone = useRef(null);

  const navigate = useNavigate();
  const AdminName = localStorage.getItem("admin_name");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isDirty, isValid, touched },
    reset,
    setError,
    getValues,
  } = useForm({
    defaultValues: {
      fname: "",
      p_email: "",
      s_email: "",
      p_phone: "",
      s_phone: "",
      p_discipline: "",
      s_discipline: "",
      profession: "",
      qualification: "",
      experience_yy: "",
      experience_mm: "",
      rel_experience_yy: "",
      rel_experience_mm: "",

      projects: [
        {
          project_name: "",
          available_hrs: "",
          available_min: "",
          currency: "",
          hourly_rate: "",
          project_manager: "",
          budget_rate: "",
          offer_rate: "",
          hrs_spent: "",
          expertise: "",
          status: "",
          feedback_for_sme: "",
          feedback_from_sme: "",
        },
      ],
      invoice: [
        {
          invoice_num: "",
          invoice_date: "",
          amount: "",
          currency: "",
          // frequency: "",
        },
      ],
      attachments_files: "",
      created_by: AdminName,
      sme_cat_expert_id: "",
      sme_cat_id: "",
      nda_signed: "",
    },
    mode: "onChange",
  });

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

  const onChangeCategory = (e) => {
    getSmeCategoryExpert(e.target.value).then((res) => {
      setExpertise(res.data.data);
    });
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhonenum(value);
  };

  const fetchData = () => {
    setLoadiing({ loading: false });
    setTimeout(() => {
      setLoadiing({ loading: false });
    }, 2000);
  };

  const onsubmit = async (data, event) => {
    setSubmitting(true);
    const formData = new FormData();
    event.preventDefault();
    fetchData();

    if (data.nda_start === undefined) {
      data.nda_start = null;
    }
    if (data.nda_end === undefined) {
      data.nda_end = null;
    }

    const resume = data.resume[0];
    data.resume = resume;
    formData.append("fname", data.fname);
    formData.append("p_email", data.p_email);
    formData.append("s_email", data.s_email);
    formData.append("p_phone", data.p_phone);
    formData.append("s_phone", data.s_phone);
    formData.append("p_discipline", data.p_discipline);
    formData.append("s_discipline", data.s_discipline);
    formData.append("profession", data.profession);
    formData.append("qualification", data.qualification);
    formData.append("experience_yy", data.experience_yy);
    formData.append("experience_mm", data.experience_mm);
    formData.append("rel_experience_yy", data.rel_experience_yy);
    formData.append("rel_experience_mm", data.rel_experience_mm);
    formData.append("created_by", data.created_by);
    formData.append("sme_cat_expert_id", data.sme_cat_expert_id);
    formData.append("sme_cat_id", data.sme_cat_id);
    formData.append("nda_signed", data.nda_signed);
    formData.append("nda_start", data.nda_start);
    formData.append("nda_end", data.nda_end);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("pincode", data.pincode);
    formData.append("country", data.country);
    formData.append("linkedin", data.linkedin);
    formData.append("resume", data.resume);
    formData.append("personal_folder", data.personal_folder_link);

    if (data.projects) {
      // data.projects.map((item) => {
      //   item.project_name === ""
      //     ? formData.append("projects", data.projects)
      //     : formData.append("projects", JSON.stringify(data.projects));
      // });
      const candProjects = data.projects?.filter((item) => {
        return item.project_name !== "";
      });
      formData.append("projects", JSON.stringify(candProjects));
    }
    if (data.invoice) {
      // data.invoice.map((item) => {
      //   item.invoice_num === ""
      //     ? data.invoice = ""
      //     : formData.append("invoice", JSON.stringify(data.invoice));
      // });
      const candInvoice = data.invoice?.filter((item) => {
        return item.invoice_num !== "";
      });
      formData.append("invoice", JSON.stringify(candInvoice));
    }
    for (let i = 0; i < data?.attachments_files.length; i++) {
      formData.append("attachments_files[]", data.attachments_files[i]);
    }
    // Object.keys(data).map((k) => {
    //   k === "projects" || k === "invoice"
    //     ? data[k].map((item) => {
    //         return item.project_name !== "" ||
    //           item.project_manager !== "" ||
    //           item.invoice_num ||
    //           item.amount
    //           ? formData.set(k, JSON.stringify(data[k]))
    //           : formData.set(k, data[k]);
    //       })
    //     : formData.set(k, data[k]);
    // });
    createCandidate(formData)
      .then((res) => {
        setShow(true);
        setSubmitting(false);
        setData(reset());
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          const errors = err.response.data.error_message;
          setSubmitting(false);
          const propertyNames = Object.keys(errors);
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
    setIsdisable(false);
  };

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid second-section">
        <div className="row">
          <div className="col-md-2 left-panel">
            <SideNavbar />
          </div>
          <div className="col-md-10 right-panel">
            <h3>Add New Candidate Detail</h3>
            <p className="valid-msg">*All Fields are Mandatory</p>
            <form onSubmit={handleSubmit(onsubmit)} name="myForm">
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

                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className="form-group">
                    <label className="label-contanet" for="exampleInputEmail1">
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

              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="form-detailed ac-header">
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
                      <div className="col-md-4 col-sm-12 colxs-12">
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
                      <div className="col-md-4 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label className="label-contanet">
                            Primary Email
                          </label>
                          <input
                            type="email"
                            ref={primary_email}
                            name="p_email"
                            {...register("p_email", {
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
                            })}
                            className="form-control"
                            onKeyDown={handleEnter}
                          />
                          <p className="error-msg">{errors.p_email?.message}</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label className="label-contanet">
                            Secondary Email
                          </label>
                          <input
                            type="email"
                            {...register(
                              "s_email",
                              {
                                minLength: {
                                  value: 4,
                                  message: "Please Enter Valid Email Address",
                                },
                                maxLength: {
                                  value: 32,
                                  message: "Please Enter Valid Email Address",
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
                                      getValues().p_email !== ""
                                    ) {
                                      return "secondary email cannot be same as primary email";
                                    }
                                  },
                                },
                              }
                            )}
                            className="form-control"
                            onKeyDown={handleEnter}
                          />
                          <p className="error-msg">{errors.s_email?.message}</p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label className="label-contanet">
                            Street/Locality
                          </label>
                          <textarea
                            type="text"
                            style={{ height: "60px" }}
                            {...register("address")}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-sm-12 colxs-12">
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
                      <div className="col-md-4 col-sm-12 colxs-12">
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
                      <div className="col-md-4 col-sm-12 colxs-12">
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
                      <div className="col-md-4 col-sm-12 colxs-12">
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
                          <p className="error-msg">{errors.country?.message}</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label className="label-contanet">
                            {" "}
                            Primary Phone
                          </label>
                          <input
                            type="text"
                            ref={primary_phone}
                            onChange={handleChange}
                            value={phonenum}
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
                              pattern: {
                                value: /[0-9]{4}/,
                                message: "Please Enter a Valid phone",
                              },
                            })}
                            className="form-control"
                            aria-describedby="phone_p"
                            onKeyDown={(evt) =>
                              evt.key === "e" && evt.preventDefault()
                            }
                          />
                          <p className="error-msg">{errors.p_phone?.message}</p>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 colxs-12">
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
                              pattern: {
                                value: /[0-9]{4}/,
                                message: "Please Enter a Valid phone",
                              },
                              validate: {
                                phoneEqual: (value) => {
                                  if (
                                    value === getValues().p_phone &&
                                    value !== "" &&
                                    getValues().p_phone !== ""
                                  ) {
                                    return "Secondary Phone cannot be same as Primary Phone";
                                  }
                                },
                              },
                            })}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="phone_p"
                            onKeyDown={handleEnter}
                          />
                          <p className="error-msg">{errors.s_phone?.message}</p>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              {/* second formsection */}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="form-detailed ac-header">
                    <span className="icon-background">
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="arrow-icon"
                      />
                    </span>
                    <span className="personal">Occupations and Experience</span>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="row">
                      <div className="col-md-4 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label
                            className="label-contanet"
                            for="exampleInputEmail1"
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
                      <div className="col-md-4 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label
                            className="label-contanet"
                            for="exampleInputEmail1"
                          >
                            Secondary Discipline
                          </label>
                          <input
                            type="text"
                            {...register("s_discipline")}
                            className="form-control"
                            id="exampleInputEmail1"
                            onKeyDown={handleEnter}
                            aria-describedby="emailHelp"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label
                            className="label-contanet"
                            for="exampleInputEmail1"
                          >
                            Profession
                          </label>
                          <input
                            type="text"
                            {...register("profession")}
                            className="form-control"
                            id="exampleInputEmail1"
                            onKeyDown={handleEnter}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 col-sm-12 colxs-12">
                        <div className="form-group">
                          <label
                            className="label-contanet"
                            for="exampleFormControlInput1"
                          >
                            Qualification<span className="manditory">*</span>
                          </label>
                          <input
                            type="text"
                            {...register("qualification", {
                              required: "Please Enter a Qualification",
                            })}
                            className="form-control"
                            id="exampleFormControlInput1"
                            onKeyDown={handleEnter}
                          />
                          <p className="error-msg">
                            {errors.qualification?.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-4 col-sm-12 colxs-12">
                        <label
                          className="label-contanet"
                          for="exampleFormControlSelect1"
                        >
                          Experience<span className="manditory">*</span>
                        </label>
                        <div className="row">
                          <div className="col-2 form-group drpDown">
                            <select
                              className="form-control form-select form-width"
                              {...register("experience_yy", {
                                required: "this field is required",
                              })}
                              onKeyDown={handleEnter}
                            >
                              <option value="">Select</option>
                              <option value="0">0 yrs</option>
                              <option value="1">1 yrs</option>
                              <option value="2">2 yrs </option>
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
                              <option value="13">13 yrs </option>
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
                                required: "this field is required",
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

                      <div className="col-md-4 col-sm-12 colxs-12">
                        <label
                          className="label-contanet"
                          for="exampleFormControlSelect1"
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
                              <option value="2">2 yrs </option>
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
                              <option value="13">13 yrs </option>
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
              {/* thirdsectio */}

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
                        for="exampleInputEmail1"
                      >
                        LinkedIn Profile
                      </label>
                      <input
                        type="text"
                        {...register("linkedin", {})}
                        className="form-control"
                        onKeyDown={handleEnter}
                      />
                      <p className="error-msg">{errors.linkedin?.message}</p>
                    </div>

                    <label className="label-contanet" for="exampleInputEmail1">
                      Attach Resume<span className="manditory">*</span>
                      <span className="error-msg">
                        {errors.resume?.message}{" "}
                      </span>
                      {errors.resume?.size === "lessThan10MB" && (
                        <span className="error-msg">
                          file must Be under 10MB
                        </span>
                      )}
                      {errors.resume?.type === "acceptedFormats" && (
                        <span className="error-msg">
                          resume must be .txt,.pdf,.doc format
                        </span>
                      )}
                    </label>

                    <div className="form-group fileUpload">
                      <label className="custom-file-upload">
                        <input
                          type="file"
                          ref={register}
                          name="resume"
                          className="align-input"
                          onKeyDown={handleEnter}
                          {...register("resume", {
                            required: "Please Upload your Resume",
                            validate: {
                              lessThan10MB: (files) =>
                                files[0]?.size < 10000000 || "Max 10MB",
                              acceptedFormats: (files) => {
                                return (
                                  files[0].type === "application/pdf" ||
                                  files[0].type === "text/plain" ||
                                  files[0].type === "application/msword" ||
                                  files[0].type ===
                                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                                  files[0].type === "application/vnd.ms-excel"
                                );
                              },
                            },
                          })}
                        />
                        Browse
                      </label>
                      <div>
                        <span className="fileName"></span>
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
                            s
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
                    <div>
                      <ProjectDetail
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
                <Accordion.Item eventKey="0">
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
                    <div>
                      <AttachDocument
                        register={register}
                        handleEnter={handleEnter}
                        errors={errors}
                        control={control}
                        setError={setError}
                      />
                      <div className="mb-5">
                        <div className="row">
                          <div className="col-12 col-sm-10 col-md-10  colxs-10">
                            <div className="form-group">
                              <label className="label-contanet">
                                Personal Folder Link
                              </label>
                              <input
                                type="text"
                                className="form-control personalFolderLink"
                                {...register("personal_folder_link", {
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
              <p className="btm-border"></p>
              <div className="from-group buttons">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => {
                    reset();
                  }}
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isDirty || !isValid}
                  onClick={() => setSubmitting(true)}
                >
                  Submit{" "}
                  {submitting && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                </button>
              </div>
            </form>
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
          <Modal.Title>Candidate Saved</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The detail of the Candidate has been saved successfully
        </Modal.Body>
        <Modal.Footer>
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

export default AddnewCandidate;
