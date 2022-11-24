import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../assets/images/smequickregistrationlogo.svg";
import groupPeopleProfilePic from "../../../assets/images/Group241@2x.png";
import HurixLogo from "../../../assets/images/Hurix_digital_logo.svg";
import "./partnerRegistration.css";
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { useNavigate, Link } from "react-router-dom";
import PartnerModal from "./PartnerModal";
import {
  getCountries,
  getCompanyTypes,
  getVendorServices,
  getPrimaryDisciplines,
  registerCompany,
} from "../../../Services/App.service";

const PartnerRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState();
  const [companyTypes, setCompanyTypes] = useState();
  const [vendorServices, setVendorServices] = useState();
  const [primaryDisciplines, setPrimaryDisciplines] = useState();
  const [enterGstin, setEnterGstin] = useState("0");
  const [enterGstCerificate, setEnterGstCerificate] = useState("0");
  const [showModal, setShowModal] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [dropDownValues, setDropDownValues] = useState([]);
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);

  const fileChangeHandler = (e) => {
    console.log(`akash`);
    const data = [];
    for (let i = 0; i < e.target.files.length; i++) {
      data.push(e.target.files[i]);
    }
    setFiles(data);
    console.log(files);
  };

  const [formValues, setFormValues] = useState({
    company_type: "",
    company_name: "",
    contact_name: "",
    phone: "",
    address: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    pan: "",
    gstin: "",
    gst_certificate: "",
  });
  const [disableBasicDetails, setDisableBasicDetails] = useState(true);
  const [disableGSTDetails, setDisableGSTDetails] = useState(true);
  const [disableAttachments, setDisableAttachments] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isDirty, isValid, touched },
    reset,
    setError,
    getValues,
  } = useForm({
    defaultValues: {},
    mode: "onTouched",
  });

  useEffect(() => {
    if (
      formValues.company_type !== "" &&
      formValues.company_name !== "" &&
      formValues.contact_name !== "" &&
      formValues.phone !== "" &&
      formValues.address !== "" &&
      formValues.email !== "" &&
      formValues.city !== "" &&
      formValues.state !== "" &&
      formValues.zip !== "" &&
      formValues.country !== "" &&
      formValues.pan !== "" &&
      Object.keys(errors).length === 0
    ) {
      setDisableBasicDetails(false);
      setDisableGSTDetails(false);
    } else {
      setDisableBasicDetails(true);
      setDisableGSTDetails(true);
    }

    // if (
    //   formValues.gstin !== "" &&
    //   formValues.gst_certificate !== "" &&
    //   Object.keys(errors).length === 0
    // ) {
    //   setDisableAttachments(false);
    // } else {
    //   setDisableAttachments(true);
    // }
    let regex = /^[a-zA-Z0-9]{15}$/;
    if (
      (formValues.gstin !== "" &&
      regex.test(formValues.gstin)) &&
      formValues.gst_certificate !== ""
    ) {
      setDisableBasicDetails(false);
      setDisableGSTDetails(false);
      setDisableAttachments(false);
    } else {
      setDisableAttachments(true);
    }
  }, [formValues, errors]);

  const handleOnChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getCountries()
      .then((res) => {
        setCountries(res.data.data);
      })
      .catch((err) => {
        console.error("err", err.message);
      });

    getCompanyTypes()
      .then((res) => {
        const filterTypes = res.data.data?.filter((item) => {
          return item.c_type_name !== "All";
        });
        setCompanyTypes(filterTypes);
      })
      .catch((err) => {
        console.error("err", err.message);
      });

    getVendorServices()
      .then((res) => {
        setVendorServices(res.data.data);
      })
      .catch((err) => {
        console.error("err", err.message);
      });

    getPrimaryDisciplines()
      .then((res) => {
        setPrimaryDisciplines(res.data.data);
      })
      .catch((err) => {
        console.error("err", err.message);
      });
  }, []);

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();
    }
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("test", data);
    setLoading(true);
    const formData = new FormData();
    // const attachment = data.attachment[0];
    // data.attachment = attachment;
    if (data.gstin === undefined) {
      data.gstin = null;
    }

    Object.keys(data).forEach((item) => {
      return data[item] === null ? (data[item] = "") : data[item];
    });

    formData.append("company_type", data.company_type);
    formData.append("company_name", data.company_name);
    formData.append("contact_name", data.contact_name);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("email", data.email);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("zip", data.zip);
    formData.append("country", data.country);
    formData.append("pan", data.pan);

    formData.append("service_segment", data.service_segment);
    formData.append("p_discipline", data.p_discipline);
    formData.append("company_size", data.company_size);

    formData.append("gstin", data.gstin);
    formData.append("hsn_code", data.hsn_code);
    formData.append("gst_certificate", data.gst_certificate);

    // formData.append("attachment", data.attachment);
    for (let i = 0; i < data?.attachments_files.length; i++) {
      formData.append("attachments_files[]", data.attachments_files[i]);
    }

    if (dropDownValues) {
      const companyServices = dropDownValues?.filter((item) => {
        return item.value !== "";
      });
      formData.append("services", JSON.stringify(companyServices));
    }

    registerCompany(formData)
      .then((res) => {
        setDropDownValues([]);
        setFiles([]);
        reset({
          company_name: "",
          contact_name: "",
          phone: "",
          address: "",
          email: "",
          city: "",
          state: "",
          zip: "",
          country: "",
          pan: "",
          service_segment: "",
          p_discipline: "",
          company_size: "",
          gstin: "",
          hsn_code: "",
          gst_certificate: "",
          attachments_files: "",
          company_type: "",
        });
        setShowModal(true);
        setLoading(false);
      })
      .catch((err) => {
        if (err.response?.status === 400) {
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
          setToggleState(1);
        }
      });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row header_partner">
          <div className="col-md-1"></div>
          <div className="col-md-10 ">
            <div className="logoPosition_partner">
              <Link to="/">
                <img src={Logo} width="200px" alt="image" />
              </Link>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="imageContainer_partner">
            <div className="profileText_partner">
              <div className="profileHeadingText_partner">
                New Partner Registration
              </div>
              <p className="profileHeadingPara_partner">
                Please provide basic information for Register in our Supplier
                Connect portal!
              </p>
            </div>
            <img
              height={"100%"}
              width={"100%"}
              alt="image"
              src={groupPeopleProfilePic}
            />
          </div>
        </div>

        <div className="row formBackColor_partner">
          <div className="col-md-1"></div>
          <div className="col-md-10 mainForm_partner">
            <div className="row formHeading">
              <div className="col-md-8 formHeadingText_partner">
                Please provide basic information for Register in our Supplier
                Connect portal!
              </div>
              <div className="col-md-4 mandatoryFieldtext_partner">
                *Fields are Mandatory
              </div>
            </div>
            <form name="myForm" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 intial_section_partner">
                  <div className="form-group">
                    <label className="label-content-partner">
                      Company Type<span className="manditory">*</span>
                    </label>
                    <select
                      className="form-control form-select category"
                      {...register("company_type", {
                        required: "This field is required",
                        onChange: (e) => {
                          handleOnChange(e);
                        },
                      })}
                    >
                      <option value="">Select</option>
                      {companyTypes?.map((item, i) => (
                        <option key={i} value={item.id}>
                          {item.c_type_name}
                        </option>
                      ))}
                    </select>
                    <p className="error-msg">{errors.company_type?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
              </div>
            </form>

            <div className="row content_tab_middle__partner">
              <div className="account_section_partner">
                <div className="container_partner">
                  <div className="bloc_tabs_partner">
                    <button
                      className={
                        toggleState === 1
                          ? "tabs_partner active_tabs_partner"
                          : "tabs_partner"
                      }
                      onClick={() => toggleTab(1)}
                    >
                      <span className="tabName_partner ">Basic Details</span>
                    </button>
                    <button
                      disabled={disableBasicDetails}
                      className={
                        toggleState === 2
                          ? "tabs_partner active_tabs_partner"
                          : "tabs_partner"
                      }
                      onClick={() => toggleTab(2)}
                    >
                      <span className="tabName_partner">
                        Professional Details
                      </span>
                    </button>
                    <button
                      disabled={disableGSTDetails}
                      className={
                        toggleState === 3
                          ? "tabs_partner active_tabs_partner"
                          : "tabs_partner"
                      }
                      onClick={() => toggleTab(3)}
                    >
                      <span className="tabName_partner">GST Details</span>
                    </button>
                    <button
                      disabled={disableAttachments}
                      className={
                        toggleState === 4
                          ? "tabs_partner active_tabs_partner"
                          : "tabs_partner"
                      }
                      onClick={() => toggleTab(4)}
                    >
                      <span className="tabName_partner">Attachments</span>
                    </button>
                  </div>

                  <div className="content_tabs_partner">
                    <div
                      className={
                        toggleState === 1
                          ? "content_partner  active_content_partner"
                          : "content_partner"
                      }
                    >
                      <form name="myForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div className="form-group">
                              <label className="label-content">
                                Company Name
                                <span className="manditory"style={{fontStyle:"italic"}}>(As per GST certificate)*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("company_name", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              />
                              <p className="error-msg">
                                {errors.company_name?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-content">
                                Contact Name
                                <span className="manditory">*</span>
                              </label>
                              <input
                                className="form-control"
                                {...register("contact_name", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              />
                              <p className="error-msg">
                                {errors.contact_name?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-content">
                                Phone Number
                                <span className="manditory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("phone", {
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                  required: "This field is required",
                                  minLength: {
                                    value: 8,
                                    message: "Please Enter valid Phone Number",
                                  },

                                  maxLength: {
                                    value: 12,
                                    message:
                                      "phone number must contain 8 to 12 numbers only",
                                  },
                                  pattern: {
                                    message: "Please Enter a Valid phone",
                                  },
                                })}
                              />
                              <p className="error-msg">
                                {errors.phone?.message}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <div className="form-group">
                              <label className="label-content">
                                Registered Address
                                <span className="manditory" style={{fontStyle:"italic"}}>(As per GST certificate)*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("address", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              />
                              <p className="error-msg">
                                {errors.address?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="form-group">
                              <label className="label-contanet">
                                Email<span className="manditory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("email", {
                                  required: "email Address is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                  minLength: {
                                    value: 4,
                                    message:
                                      "Please Enter a Valid email Address",
                                  },
                                  maxLength: {
                                    value: 32,
                                    message:
                                      "Please Enter a Valid email Address",
                                  },
                                  pattern: {
                                    value:
                                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message:
                                      "Please Enter a Valid email Address",
                                  },
                                })}
                              />
                              <p className="error-msg">
                                {errors.email?.message}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-contanet">
                                City<span className="manditory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("city", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              />
                              <p className="error-msg">
                                {errors.city?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-contanet">
                                State<span className="manditory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("state", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              />
                              <p className="error-msg">
                                {errors.state?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-contanet">
                                Pincode/Zipcode
                                <span className="manditory">*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                {...register("zip", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              />
                              <p className="error-msg">{errors.zip?.message}</p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-contanet">
                                Country<span className="manditory">*</span>
                              </label>
                              <select
                                className="form-control form-select category"
                                {...register("country", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              >
                                <option value="">Select</option>
                                {countries?.map((item, i) => (
                                  <option key={i} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              </select>
                              <p className="error-msg">
                                {errors.country?.message}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-content">
                                Pan Card
                                <span className="manditory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("pan", {
                                  required: "This field is required",
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                })}
                              />
                              <p className="error-msg">{errors.pan?.message}</p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button
                              type="button"
                              disabled={disableBasicDetails}
                              className="btn btn-primary button_style_partner"
                              style={{ backgroundColor: "#1F88D5" }}
                              onClick={() => {
                                toggleTab(2);
                                setDisableGSTDetails(false);
                              }}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div
                      className={
                        toggleState === 2
                          ? "content_partner  active_content_partner"
                          : "content_partner"
                      }
                    >
                      <form name="myForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="form-group">
                              <label className="label-content">
                                Service Offering
                              </label>
                              <CreatableSelect
                                isMulti
                                onChange={(newValues, action) => {
                                  setDropDownValues(newValues);
                                }}
                                options={vendorServices}
                                value={dropDownValues}
                              />
                              <p className="error-msg">
                                {errors.services?.message}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                            <div className="form-group">
                              <label className="label-content">
                                Service Segment
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("service_segment")}
                              />
                              <p className="error-msg">
                                {errors.service_segment?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div className="form-group">
                              <label className="label-content">
                                Primary Discipline
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("p_discipline")}
                              />
                              <p className="error-msg">
                                {errors.p_discipline?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-content">
                                Company Size / Breakup of team members
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                {...register("company_size")}
                              />
                              <p className="error-msg">
                                {errors.company_size?.message}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button
                              type="button"
                              className="btn btn-primary button_style_partner"
                              style={{
                                backgroundColor: "#1F88D5",
                                marginTop: 200,
                              }}
                              onClick={() => toggleTab(3)}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div
                      className={
                        toggleState === 3
                          ? "content_partner  active_content_partner"
                          : "content_partner"
                      }
                    >
                      <form name="myForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                            <div className="label-contanet">
                              GST Certificate{" "}
                              <span className="manditory">*</span>
                            </div>
                            <div className="radio-block pt-2">
                              <label htmlFor="gst-yes" className="radio-label">
                                <input
                                  type="radio"
                                  {...register("gst_certificate", {
                                    required: "This field is required",
                                    onChange: (e) =>
                                      setEnterGstin(e.target.value),
                                    onChange: (e) => {
                                      console.log(7777, e.target.value);
                                    },
                                  })}
                                  name="gst_certificate"
                                  value="1"
                                  className="me-2"
                                />
                                Yes
                              </label>
                              <span className="ms-3">
                                <label htmlFor="gst-no" className="radio-label">
                                  <input
                                    {...register("gst_certificate", {
                                      required: "This field is required",
                                      onChange: (e) =>
                                        setEnterGstin(e.target.value),
                                      onChange: (e) => {
                                        handleOnChange(e);
                                      },
                                    })}
                                    type="radio"
                                    name="gst_certificate"
                                    value="0"
                                    className="me-2"
                                  />
                                  No
                                </label>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-contanet">
                                GSTIN<span className="manditory">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("gstin", {
                                  required: "This field is required",
                                  // minLength: {
                                  //   value: 14,
                                  //   message:
                                  //     "GSTIN must contain 15 characters or numbers",
                                  // },
                                  // maxLength: {
                                  //   value: 15,
                                  //   message:
                                  //     "GSTIN must contain 15 characters or numbers",
                                  // },
                                  pattern: {
                                    value: /^[a-zA-Z0-9]{15}$/,
                                    message:
                                      "GSTIN must contain combination of 15 letters and digit",
                                  },
                                  onChange: (e) => {
                                    handleOnChange(e);
                                  },
                                  // disabled: enterGstin === "1" ? false : true,
                                })}
                              />
                              {/* <a
                                href="https://services.gst.gov.in/services/searchtp"
                                target="_blank"
                                className="label-contanet validate-num"
                              >
                                Validate GST Number
                              </a> */}
                              <p className="error-msg">
                                {errors.gstin?.message}
                              </p>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                            <div className="form-group">
                              <label className="label-content">HSN Code</label>
                              <input
                                type="text"
                                className="form-control"
                                {...register("hsn_code")}
                              />
                              <p className="hsn_code">
                                {errors.hsn_code?.message}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button
                              disabled={disableAttachments}
                              type="button"
                              className="btn btn-primary button_style_partner"
                              style={{
                                backgroundColor: "#1F88D5",
                                marginTop: 230,
                              }}
                              onClick={() => toggleTab(4)}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div
                      className={
                        toggleState === 4
                          ? "content_partner  active_content_partner"
                          : "content_partner"
                      }
                    >
                      <form name="myForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label
                              className="label-content"
                              htmlFor="exampleInputEmail1"
                            >
                              Attachment<span className="manditory">*</span>
                              <span className="error-msg">
                                {errors.attachments_files?.message}{" "}
                              </span>
                              {errors.attachments_files?.size ===
                                "lessThan10MB" && (
                                <span className="error-msg">
                                  file must Be under 10MB
                                </span>
                              )}
                              {errors.attachments_files?.type ===
                                "acceptedFormats" && (
                                <span className="error-msg">
                                  resume must be .pdf, .doc, .png, .jpg, .jpeg format
                                </span>
                              )}
                            </label>

                            <div className="form-group fileUpload">
                              <label className="custom-file-upload">
                                <input
                                  type="file"
                                  ref={register }
                                  
                                  multiple
                                  name="attachments_files"
                                  className="align-input-quick"
                                  onKeyDown={handleEnter}
                                  
                                  {...register("attachments_files", {
                                    required: "Please Upload attachment",
                                    onChange:(e) => fileChangeHandler(e),
                                    validate: {
                                      lessThan10MB: (files) =>
                                        files[0]?.size < 10000000 || "Max 10MB",
                                      acceptedFormats: (files) => {
                                        return (
                                          files[0].type === "application/pdf" ||
                                          
                                          files[0].type ===
                                            "application/msword" ||
                                          files[0].type ===
                                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
                                          
                                          files[0].type === "image/jpeg" ||
                                          files[0].type === "image/png"
                                        );
                                      },
                                    },
                                  })}
                                />
                                Browse
                              </label>
                              {/* <div>
                                <span className="fileName"></span>
                              </div> */}
                            </div>
                            <span className="attachment_span_partner">Mandatory docs to be attached . (Company profile, pan card, GST certificate, cancelled cheque of the company) file format must be  .pdf,.doc,.png,.jpg,.jpeg </span>
                          </div>
                          <div className="row">
                            <div className="col-12 d-flex flex-row inputUploadFileName">
                              {files?.map((item, i) => (
                                <div key={i}>
                                  <p>{(i ? ",  " : "") + item.name}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-xs-12 form-group register_button_right">
                              <button
                                type="submit"
                                className="btn btn-primary button_style_partner"
                                disabled={!isDirty || !isValid}
                              >
                                Register
                                <span
                                  className={
                                    loading
                                      ? "spinner-border spinner-border-sm mr-1"
                                      : null
                                  }
                                ></span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row quick_footer">
            <div className="col-md-1"> </div>
            <div className="col-md-4 hurixDigitalName">
              <div className="">
                <img src={HurixLogo} width="100px" alt="image" />
              </div>
            </div>
            <div className="col-md-7 termsAndCondition">
              <a
                className="nav-link-footer"
                style={{ marginRight: "0.4rem" }}
                href="/#"
              >
                Terms of Use
              </a>{" "}
              <span style={{ color: "blue", marginRight: "0.4rem" }}> | </span>
              <Link className="nav-link-footer" to="/privacy-policy">
                Privacy Policy
              </Link>{" "}
              <a style={{ marginLeft: "0.4rem" }}>
                Copyright @2022.Hurix Digital .All Rights Reserved.
              </a>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>
        <PartnerModal
          showModal={showModal}
          setShowModal={setShowModal}
          onClose={() => {
            setShowModal(false);
            navigate("/");
          }}
        ></PartnerModal>
      </div>
    </>
  );
};

export default PartnerRegistration;
