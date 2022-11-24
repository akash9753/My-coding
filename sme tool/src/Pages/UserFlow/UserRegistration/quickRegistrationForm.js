import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../assets/images/smequickregistrationlogo.svg";
import groupPeopleProfilePic from "../../../assets/images/Group241@2x.png";
import HurixLogo from "../../../assets/images/Hurix_digital_logo.svg";
import "./quickRegistrationForm.css";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import {
  getSmeCategories,
  getCountries,
  getSmeCategoryExpert,
  registerCandidate,
  getPrimaryDisciplines,
} from "../../../Services/App.service";

const QuickRegistration = () => {
  const [show, setShow] = useState(false);
  const [isDisable, setIsdisable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");

  const [category, setCategory] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [phonenum, setPhonenum] = useState();
  const [country, setCountry] = useState([]);
  const [primaryDisciplines, setPrimaryDisciplines] = useState();
  const primary_email = useRef(null);
  const secondary_email = useRef(null);
  const primary_phone = useRef(null);

  const navigate = useNavigate();

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
      sme_cat_expert_id: "",
      sme_cat_id: "",
      fname: "",
      p_email: "",
      p_phone: "",
      resume: "",

      address: "",
      country: "",
      city: "",
      state: "",
      pincode: "",
      s_phone: "",
      s_email: "",

      p_discipline: "",
      s_discipline: "",
      profession: "",
      qualification: "",
      experience_yy: "",
      experience_mm: "",
      rel_experience_yy: "",
      rel_experience_mm: "",
      resume: "",
      linkedin: "",
    },
    mode: "onTouched",
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

  const handleEnter = (event) => {
    if (event.key.toLowerCase() === "enter") {
      event.preventDefault();
    }
  };

  const onsubmit = async (data, event) => {
    setLoading(true);
    const formData = new FormData();
    event.preventDefault();
    console.log(data);
    const resume = data.resume[0];
    data.resume = resume;
    formData.append("sme_cat_expert_id", data.sme_cat_expert_id);
    formData.append("sme_cat_id", data.sme_cat_id);
    formData.append("fname", data.fname);
    formData.append("p_email", data.p_email);
    formData.append("p_phone", data.p_phone);
    formData.append("resume", data.resume);

    formData.append("address", data.address);
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("state", data.state);
    formData.append("pincode", data.pincode);
    formData.append("s_phone", data.s_phone);
    formData.append("s_email", data.s_email);

    formData.append("p_discipline", data.p_discipline);
    formData.append("s_discipline", data.s_discipline);
    formData.append("profession", data.profession);
    formData.append("qualification", data.qualification);
    formData.append("experience_yy", data.experience_yy);
    formData.append("experience_mm", data.experience_mm);
    formData.append("rel_experience_yy", data.rel_experience_yy);
    formData.append("rel_experience_mm", data.rel_experience_mm);
    formData.append("created_by", data.created_by);
    formData.append("linkedin", data.linkedin);

    registerCandidate(formData)
      .then((res) => {
        setShow(true);
        setLoading(false);
        setData(reset());
      })
      .catch((err) => {
        setLoading(false);
        if (err.response?.status === 400) {
          const errors = err.response.data.error_message;
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

  return (
    <>
      <div className="container-fluid">
        <div className="row header">
          <div className="col-md-1"></div>
          <div className="col-md-10 ">
            <div className="logoPosition">
              <Link to="/">
                <img src={Logo} width="200px" />
              </Link>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>

        <div className="row">
          <div className="imageContainer">
            <div className="profileText">
              <div className="profileHeadingText">Quick Registration</div>
              <p className="profileHeadingPara">
                Please provide basic information for Register in our Supplier
                Connect portal!
              </p>
            </div>
            <img
              height={"100%"}
              width={"100%"}
              src={groupPeopleProfilePic}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row formBackColor">
          <div className="col-md-1"></div>
          <div className="col-md-10 mainForm">
            <div className="row formHeading">
              <div className="col-md-6 formHeadingText">
                Fill the basic information
              </div>
              <div className="col-md-6 mandatoryFieldtext">
                *Fields are Mandatory
              </div>
            </div>
            <form onSubmit={handleSubmit(onsubmit)} name="myForm">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <label className="label-content">
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
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <label className="label-content" htmlFor="exampleInputEmail1">
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
                <div className="col-md-4"></div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <label className="label-content">
                    Name<span className="manditory">*</span>
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
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <label className="label-content">
                    Email Id<span className="manditory">*</span>
                  </label>
                  <input
                    type="email"
                    ref={primary_email}
                    name="p_email"
                    {...register("p_email", {
                      required: "This field is required",
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
                  <p className="error-msg">{errors.p_email?.message}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <label className="label-content">
                    {" "}
                    Phone Number<span className="manditory">*</span>
                  </label>
                  <input
                    type="text"
                    ref={primary_phone}
                    onChange={handleChange}
                    value={phonenum}
                    {...register(
                      "p_phone",

                      {
                        required: "This field is required",
                        minLength: {
                          value: 10,
                          message: "Please Enter Valid Phone Number",
                        },

                        maxLength: {
                          value: 12,
                          message:
                            "phone number must contain 8 to 12 numbers only",
                        },
                        pattern: {
                          message: "Please Enter a Valid phone",
                        },
                      }
                    )}
                    className="form-control"
                    id=""
                    aria-describedby="phone_p"
                    onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
                  />
                  <p className="error-msg">{errors.p_phone?.message}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-xs-12 form-group">
                  <label className="label-content" htmlFor="exampleInputEmail1">
                    Attach Resume<span className="manditory">*</span>
                    <span className="error-msg">{errors.resume?.message} </span>
                    {errors.resume?.size === "lessThan10MB" && (
                      <span className="error-msg">file must Be under 10MB</span>
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
                        className="align-input-quick"
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
                </div>
              </div>

              <div className="row personalDetailsBack">
                <span className="personal-quick">Personal Details</span>

                <div className="col-12 col-sm-12 col-md-6 col-xs-12 form-group">
                  <div className="form-group">
                    <label className="label-content">Current Address</label>
                    <textarea
                      type="text"
                      style={{ height: "199px" }}
                      {...register("address", {})}
                      className="form-control"
                    />
                    <p className="error-msg">{errors.address?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-2 col-xs-12 form-group">
                  <div className="form-group">
                    <label className="label-content">City</label>
                    <input
                      type="text"
                      {...register("city", {
                        // pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
                      })}
                      className="form-control"
                      onKeyDown={handleEnter}
                    />
                    <p className="error-msg">{errors.city?.message}</p>
                  </div>
                  <div className="form-group">
                    <label className="label-content">State</label>
                    <input
                      type="text"
                      {...register("state", {
                        // pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
                      })}
                      className="form-control"
                      onKeyDown={handleEnter}
                    />
                    <p className="error-msg">{errors.state?.message}</p>
                  </div>
                  <div className="form-group">
                    <label className="label-content">Pincode/Zipcode</label>
                    <input
                      type="number"
                      {...register("pincode", {
                        // required: "please enter pincode",
                        //pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
                      })}
                      className="form-control"
                      onKeyDown={handleEnter}
                    />
                    <p className="error-msg">{errors.pincode?.message}</p>
                  </div>
                </div>

                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <div className="form-group">
                    <label className="label-content">Secondary Email</label>
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
                            emailEqual: (value) =>
                              getValues().p_email === ""
                                ? null
                                : value !== getValues().p_email ||
                                  "secondary email cannot be same as primary email",
                          },
                        }
                        // pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
                      )}
                      className="form-control"
                      onKeyDown={handleEnter}
                    />
                    <p className="error-msg">{errors.s_email?.message}</p>
                  </div>
                  <div className="form-group">
                    <label className="label-content">Secondary Phone</label>
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
                          // phoneEqual: (value) =>
                          //   value !== getValues().p_phone ||
                          phoneEqual: (value) =>
                            getValues().p_phone === ""
                              ? null
                              : value !== getValues().p_phone ||
                                "Secondary Phone cannot be same as Primary Phone",
                        },
                      })}
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="phone_p"
                      onKeyDown={handleEnter}
                    />
                    <p className="error-msg">{errors.s_phone?.message}</p>
                  </div>

                  <div className="form-group">
                    <label className="label-content">Country</label>
                    <select
                      className="form-control form-select"
                      {...register("country", {})}
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
              </div>

              <div className="row occupationAndExpback">
                <span className="personal">Occupation and Experience</span>
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <div className="form-group">
                    <label
                      className="label-content"
                      htmlFor="exampleInputEmail1"
                    >
                      Primary Discipline
                      {/* <span className="manditory">*</span> */}
                    </label>
                    {/* <input
                            type="text"
                            {...register("p_discipline", {
                              required: "Please Enter Primary Discipline",
                            })}
                            className="form-control"
                            id="exampleInputEmail1"
                            onKeyDown={handleEnter}
                            aria-describedby="emailHelp"
                          /> */}
                    <select
                      className="form-control form-select category"
                      {...register("p_discipline", {
                        // required: "this field is required",
                        // onChange: (e) => onChangeCategory(e),
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
                    <p className="error-msg">{errors.p_discipline?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <div className="form-group">
                    <label
                      className="label-content"
                      htmlFor="exampleInputEmail1"
                    >
                      Secondary Discipline
                      {/* <span className="manditory">*</span> */}
                    </label>
                    <input
                      type="text"
                      {...register("s_discipline", {
                        // required: "Please Enter Secondary Discipline",
                      })}
                      className="form-control"
                      id="exampleInputEmail1"
                      onKeyDown={handleEnter}
                      aria-describedby="emailHelp"
                    />
                    <p className="error-msg">{errors.s_discipline?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <div className="form-group">
                    <label
                      className="label-content"
                      htmlFor="exampleInputEmail1"
                    >
                      Profession
                    </label>
                    <input
                      type="text"
                      {...register("profession", {
                        // required: "Please Enter a Profession",
                      })}
                      className="form-control"
                      id="exampleInputEmail1"
                      onKeyDown={handleEnter}
                    />
                    <p className="error-msg">{errors.profession?.message}</p>
                  </div>
                </div>
              </div>

              <div className="row occupationAndExpback">
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <div className="form-group">
                    <label
                      className="label-content"
                      htmlFor="exampleFormControlInput1"
                    >
                      Qualification
                    </label>
                    <input
                      type="text"
                      {...register("qualification", {
                        // required: "Please Enter a Qualification",
                      })}
                      className="form-control"
                      id="exampleFormControlInput1"
                      onKeyDown={handleEnter}
                    />
                    <p className="error-msg">{errors.qualification?.message}</p>
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <label
                    className="label-content"
                    htmlFor="exampleFormControlSelect1"
                  >
                    Experience(YY/MM)
                  </label>
                  <div className="row">
                    <div className="col-6 form-group drpDown">
                      <select
                        className="form-control form-select form-width"
                        {...register("experience_yy", {
                          // required: "this field is required",
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
                    <div className="col-6 form-group drpDown">
                      <select
                        className="form-control form-select form-width"
                        {...register("experience_mm", {
                          // required: "this field is required",
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
                <div className="col-12 col-sm-12 col-md-4 col-xs-12 form-group">
                  <label
                    className="label-content"
                    htmlFor="exampleFormControlSelect1"
                  >
                    Relevent Experience(YY/MM)
                  </label>
                  <div className="row">
                    <div className="col-6 form-group drpDown">
                      <select
                        className="form-control form-select form-width"
                        {...register("rel_experience_yy", {
                          // required: "this field is required",
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
                        {errors.rel_experience_yy?.message}
                      </p>
                    </div>
                    <div className="col-6 form-group drpDown">
                      <select
                        className="form-control form-select form-width"
                        {...register("rel_experience_mm", {
                          // required: "this field is required",
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
                        {errors.rel_experience_mm?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row occupationAndExpback">
                <div className="col-12 col-sm-12 col-md-12 col-xs-12 form-group">
                  <div className="form-group">
                    <label
                      className="label-content"
                      htmlFor="exampleInputEmail1"
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
                </div>
              </div>

              <div className="row occupationAndExpback">
                <div className="col-12 col-sm-12 col-md-12 col-xs-12 form-group">
                  {/* <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => {
                    reset();
                  }}
                >
                  Clear
                </button> */}
                  <button
                    type="submit"
                    className="btn btn-primary button-style-quick"
                    disabled={!isDirty || !isValid}
                  >
                    Register
                    <span
                      className={
                        loading ? "spinner-border spinner-border-sm mr-1" : null
                      }
                    ></span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="row quick_footer">
            <div className="col-md-1"> </div>
            <div className="col-md-4 hurixDigitalName">
              <div className="">
                <img src={HurixLogo} width="100px" />
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

        {/* <div className="row quick_footer">
          <div className="col-md-1"> </div>
          <div className="col-md-4 hurixDigitalName">
            <div className="">
              <img src={HurixLogo} width="100px" />
            </div>
          </div>
          <div className="col-md-7 termsAndCondition">
            <a className="nav-link-footer" style={{marginRight:"0.4rem"}} href="/#">
              Terms of Use
            </a>{" "}
            <span style={{ color: "blue",marginRight:"0.4rem" }}> | </span>
            <a className="nav-link-footer" href="/#">
              Privacy Policy
            </a>{" "}
            <a style={{marginLeft:"0.4rem"}}>Copyright @2022.Hurix Digital .All Rights Reserved.</a>
          </div>
        </div> */}
        <Modal
          show={show}
          onHide={() => setShow(!show)}
          centered
          dialogClassName="modal-box"
        >
          <Modal.Header>
            <Modal.Title>Submitted Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Thank you for registering with us! We will verify your details and
            get back to you soon.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                setShow(!show);
                navigate("/");
              }}
            >
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default QuickRegistration;
