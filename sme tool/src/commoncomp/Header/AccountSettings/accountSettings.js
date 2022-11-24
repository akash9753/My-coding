import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../navbar";
import SideNavbar from "../../SideNavbar/sideNavbar";
import Footer from "../../Footer/footer";
import "./accountSettings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useForm } from "react-hook-form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Nophoto from "../../../assets/images/nophoto.svg";

import AccountImg from "../../../assets/images/account-image2x.png";
import KeyOUtline from "../../../assets/images/key-outline.svg";
import Account from "../../../../src/assets/images/settings.svg";
import User from "../../../assets/images/user2.svg";
import Lock from "../../../assets/images/Lock81.svg";
import LockIcon from "../../../assets/images/Group175.svg";
import EyeOutline from "../../../assets/images/eye-off-outline.svg";

import { faBell, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../../assets/images/img_avatar.png";

import { adminLogin } from "../../../Services/App.service";
import { updateAdminPassword } from "../../../Services/App.service";
import { adminProfileUpdate } from "../../../Services/App.service";
import { updatePassword } from "../../../Services/App.service";
import { Modal, Button } from "react-bootstrap";

const AccountSettings = () => {
  const [toggleState, setToggleState] = useState(1);
  const [loading, setLoading] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [openModalpass, setOpenModalpass] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [show, setShow] = useState(true);
  const [show_pass, setShow_pass] = useState(true);
  const [show_newPassword, setShow_newPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [viewPassword, setViewPassword] = useState(false);
  const [closePopup, setClosePopup] = useState(true);
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const [Invalid, setInvalid] = useState(false);
  const [remember, setRemember] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [updatePass, setUpdatePass] = useState(null);
  const [data, setData] = useState("");

  const [toggleModal, setToggleModal] = useState(false);

  const id = localStorage.getItem("id");
  const name = localStorage.getItem("admin_name");
  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const profile_pic = localStorage.getItem("profile_pic");

  const [image, setImage] = useState(profile_pic);

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [file, setFile] = useState(null);
  const [uploadedImageError, setUploadedImageError] = useState("");
  const [uploadedImg, setUploadedImg] = useState("");
  const [changePassword, setChangepassword] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const imageInputRef = useRef();
  const [fileImage, setfileImage] = useState(null);
  var body = {
    id: data.id,
    email: data.email,
    password: data.password,
    role: data.role_name,
  };
  const fetchData = () => {
    setLoading(true);
    // setTimeout(() => {
    //   setLoading({ loading: true });
    // }, 2000);
  };
  useEffect(() => {
    localStorage.getItem("firstname");
  }, [firstname]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setError,
    getValues,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      firstname: firstname,
      lastname: lastname,
      email: email,
      role,
    },
  });
  useEffect(() => {}, []);
  const onsubmit = (data, event) => {
    setLoading(true);
    event.preventDefault();
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("firstname");
    const formData = new FormData();
    formData.append("firstname", data.firstname);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("profile_pic", data.profile_pic[0]);
    if (data.profile_pic[0] == undefined) {
      formData.append("profile_pic", "");
    }
    adminProfileUpdate(id, formData)
      .then((res) => {
        setAdmin(res.data.data);
        //   localStorage.setItem("id",res.data.id);
        // localStorage.setItem("token", res.data.token);
        setOpenModal(!openModal);
        setLoading(false);
        localStorage.setItem("admin_name", res.data.data.fullname);
        localStorage.setItem("firstname", res.data.data.firstname);
        localStorage.setItem("lastname", res.data.data.lastname);
        localStorage.setItem("profile_pic", res.data.data.profile_pic);
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
        }
      });
  };

  //securyty tab form 2
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: {
      errors: errors2,
      isSubmitting: isSubmitting2,
      touched: touched2,
    },
    reset: reset2,
    watch: watch2,
  } = useForm({
    defaultValues: { old_password: "", new_password: "", confirm_password: "" },
  });
  const new_password = useRef({});

  new_password.current = watch2("new_password", "");
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setShow(!show);
  };
  const togglePassword1 = () => {
    setPasswordShown1(!passwordShown1);
    setShow_newPassword(!show_newPassword);
  };
  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onsubmitFunc = async (data, event) => {
    setLoading(true);

    var body = {
      password: data.password,
    };
    const formData = new FormData();
    event.preventDefault();
    formData.append("old_password", data.old_password);
    formData.append("new_password", data.new_password);
    formData.append("confirm_password", data.confirm_password);
    const id = localStorage.getItem("id");

    updatePassword(id, formData)
      .then((res) => {
        setUpdatePass(res.data.data);

        setOpenModalpass(!openModalpass);
        setLoading(false);
        reset2();
      })
      .catch((err) => {
        setInvalid(true);
        setLoading(false);
      });
  };
  const resetFile = () => {
    const file = document.querySelector(".file");
    file.value = "";
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/jpg"
      ) {
        const reader = new FileReader();
        const { current } = uploadedImage;
        current.file = file;
        reader.onload = (e) => {
          current.src = e.target.result;
        };
        setFile(file.name);
        setfileImage();
        setUploadedImageError("");
        reader.readAsDataURL(file);
      } else {
        setFile(null);
        setUploadedImageError(
          "Only *.jpg, *.jpeg and *.png, images are allowed"
        );
      }
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
          <div className="col-md-10 col-sm-12 col-xs-12 right-panel">
            <h3 className="right-panel-title">
              <span>
                <img
                  src={Account}
                  alt="dashboard"
                  height="22px"
                  width="22px"
                  style={{ marginBottom: "6px" }}
                />
              </span>{" "}
              Account Settings
            </h3>
            <div className="account-section">
              <div className="container">
                <div className="bloc-tabs">
                  <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                    <span>
                      <img
                        src={User}
                        height="20px"
                        width="20px"
                        style={{ paddingBottom: "5px" }}
                      />
                    </span>{" "}
                    <span className="tabName">PROFILE</span>
                  </button>
                  <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
                    <span>
                      {" "}
                      <img
                        src={LockIcon}
                        height="20px"
                        width="20px"
                        style={{ paddingBottom: "5px" }}
                      />
                    </span>{" "}
                    <span className="tabName">CHANGE PASSWORD</span>
                  </button>
                </div>

                <div className="content-tabs">
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }
                  >
                    <form
                      key={1}
                      onSubmit={handleSubmit(onsubmit)}
                      name="myForm"
                    >
                      <div className="row">
                        <div className="col-md-8 col-xs-12 col-sm-12">
                          <div className="form-group fileUpload">
                            <div className="upload-image-section">
                              <label className="custom-file-upload-1">
                                <input
                                  type="file"
                                  name="profile_pic"
                                  {...register("profile_pic")}
                                  accept=".png, .jpeg, .jpg"
                                  onChange={handleImageUpload}
                                  className="file"
                                />
                                <span className="upload-button-sec">
                                  Upload New Photo
                                </span>{" "}
                              </label>
                              <div className="image-box">
                                {image ? (
                                  <span style={{ width: "130px" }}>
                                    <img
                                      ref={uploadedImage}
                                      src={profile_pic}
                                      style={{
                                        width: "129px",
                                        height: "146px",
                                        position: "absolute",
                                        borderRadius: "10%",
                                      }}
                                    />
                                  </span>
                                ) : (
                                  <span>
                                    <img
                                      src={Nophoto}
                                      style={{
                                        width: "129px",
                                        height: "146px",
                                        position: "absolute",
                                        borderRadius: "10%",
                                      }}
                                    />
                                  </span>
                                )}
                              </div>
                              <p className="error-msg">
                                {errors.profile_img?.message}
                              </p>
                              <span className="upload-error-msg">
                                {uploadedImageError}
                              </span>
                            </div>
                          </div>
                          <span className="upload-error-msg1">
                            Allowed PNG or JPG. Max size 800K.
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4 col-sm-12 colxs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              First Name<span className="manditory">*</span>
                            </label>
                            <input
                              type="text"
                              {...register("firstname", {
                                required: "This field is required",
                              })}
                              className="form-control"
                            />
                            <p className="error-msg">
                              {errors.firstname?.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 colxs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Last Name<span className="manditory">*</span>
                            </label>
                            <input
                              type="text"
                              {...register("lastname", {
                                required: "This field is required",
                              })}
                              className="form-control"
                            />
                            <p className="error-msg">
                              {errors.lastname?.message}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 colxs-12">
                          <div className="form-group">
                            <label className="label-contanet">
                              Email<span className="manditory">*</span>
                            </label>
                            <input
                              type="email"
                              //  value={email}
                              name="email"
                              {...register("email", {
                                required: "Email Address is required",

                                // pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
                              })}
                              className="form-control"
                              readOnly
                            />
                            <p className="error-msg">{errors.email?.message}</p>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="label-contanet">
                              Role<span className="manditory">*</span>
                            </label>
                            <input
                              type="text"
                              {...register("role", {
                                required: "This field is required",
                              })}
                              className="form-control"
                              value={role}
                              onChange={(e) => e.target.value}
                              readOnly
                            />

                            <p className="error-msg">{errors.role?.message}</p>
                          </div>
                        </div>
                      </div>

                      {/* <div className="row">
                <div className="col-md-12">
                   <div className="success-msg">
                   <h6>Your email is not confirmed. Please check your inbox.<span className="close-popup">+</span></h6>
                   <h6>Resend Confirmation</h6>
                   </div>
                </div>
            </div> */}

                      <div>
                        <div
                          className="border-bottom"
                          style={{ marginBottom: "15px", marginTop: "15px" }}
                        ></div>

                        <div className="from-group">
                          {/* <button
                  type="submit"
                
                 className="btn btn-primary  button-style"> Save Changes
                </button> */}
                          <button
                            type="submit"
                            className="btn btn-primary button-style"
                          >
                            Save Changes{" "}
                            <span
                              className={
                                loading
                                  ? "spinner-border spinner-border-sm mr-1"
                                  : null
                              }
                            ></span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary reset-btn"
                            onClick={() => {
                              navigate("/");
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
                    <Modal
                      show={openModal}
                      onHide={() => setOpenModal(!openModal)}
                      centered
                      dialogClassName="modal-box"
                    >
                      <Modal.Header>
                        <Modal.Title>Profile Updated</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        The detail of the profile has been updated successfully
                      </Modal.Body>
                      <Modal.Footer>
                        {/* <Button variant="secondary" onClick={() => setShow(!show)}>
          Cancel
        </Button> */}
                        <Button
                          variant="primary"
                          onClick={() => {
                            setOpenModal(!openModal);
                          }}
                        >
                          OK
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>

                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }
                  >
                    <div className="row">
                      <div>
                        <form key={2} onSubmit={handleSubmit2(onsubmitFunc)}>
                          <div className="row">
                            <div className="col-md-6 password-section">
                              <label className="label-contanet">
                                Current Password
                              </label>
                              <div className="newPass">
                                <input
                                  type={passwordShown ? "text" : "password"}
                                  className="form-control"
                                  {...register2("old_password", {
                                    required: "Please enter current password",
                                    minLength: {
                                      value: 4,
                                      message:
                                        "Password must have at least 4 characters",
                                    },
                                  })}
                                />

                                {show ? (
                                  <span
                                    onClick={togglePassword}
                                    className="show-password_old"
                                  >
                                    <img
                                      src={EyeOutline}
                                      height="20px"
                                      width="20px"
                                    />
                                  </span>
                                ) : (
                                  <span
                                    onClick={togglePassword}
                                    className="show-password_old"
                                  >
                                    <FontAwesomeIcon icon={faEye} />
                                  </span>
                                )}

                                <span>
                                  {" "}
                                  {errors2.old_password && (
                                    <p className="error-msg">
                                      {errors2.old_password.message}
                                    </p>
                                  )}
                                </span>
                              </div>
                              <div>
                                <label className="label-contanet">
                                  New Password
                                </label>
                                <div className="newPass">
                                  <input
                                    type={passwordShown1 ? "text" : "password"}
                                    className="form-control"
                                    {...register2("new_password", {
                                      required: "Please enter password",
                                      minLength: {
                                        value: 4,
                                        message:
                                          "Password must have at least 4 characters",
                                      },
                                    })}
                                  />

                                  {show_newPassword ? (
                                    <span
                                      onClick={togglePassword1}
                                      className="show-password_eye1"
                                    >
                                      <img
                                        src={EyeOutline}
                                        height="20px"
                                        width="20px"
                                      />
                                    </span>
                                  ) : (
                                    <span
                                      onClick={togglePassword1}
                                      className="show-password_eye1"
                                    >
                                      <FontAwesomeIcon icon={faEye} />
                                    </span>
                                  )}
                                  <span>
                                    {" "}
                                    {errors2.new_password && (
                                      <p className="error-msg">
                                        {errors2.new_password.message}
                                      </p>
                                    )}
                                  </span>
                                </div>
                              </div>
                              <div></div>
                              <label className="label-contanet">
                                Confirm Password
                              </label>
                              <div className="confirmPass">
                                <input
                                  type={passwordShown2 ? "text" : "password"}
                                  className="form-control"
                                  {...register2("confirm_password", {
                                    required: "Please enter confirm password",

                                    validate: (value) =>
                                      value === new_password.current ||
                                      "The passwords do not match",
                                  })}
                                />
                                {showConfirmPassword ? (
                                  <span
                                    onClick={togglePassword2}
                                    className="show-password3"
                                  >
                                    <img
                                      src={EyeOutline}
                                      height="20px"
                                      width="20px"
                                    />
                                  </span>
                                ) : (
                                  <span
                                    onClick={togglePassword2}
                                    className="show-password3"
                                  >
                                    <FontAwesomeIcon icon={faEye} />
                                  </span>
                                )}
                                {errors2.confirm_password && (
                                  <p className="error-msg">
                                    {errors2.confirm_password.message}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <span>
                                <img
                                  src={AccountImg}
                                  height="167px"
                                  width="104px"
                                  className="account-img"
                                />
                              </span>
                            </div>
                            {Invalid ? (
                              <span className="err-msg err-14">
                                Old Password not matched{" "}
                              </span>
                            ) : (
                              ""
                            )}
                            <div
                              className="border-bottom"
                              style={{
                                marginBottom: "10px",
                                marginTop: "10px",
                              }}
                            ></div>
                          </div>
                          {/* <div className="row">
                  <div className="col-md-12 authentication-section">
                    <h6 className="authenticatio-title"><span><img  src={KeyOUtline} height="22px" width="22px"/></span>Two-factor authentication</h6>
                    <div className="content-section">
                          <div className="lock-img">
                            <img src={Lock} />
                          </div>
                          <h6 className="authentication-message">Two factor authentication is not enabled yet.</h6>
                          <p>Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>
                            <p> Learn more.</p> 
                    </div>
                  </div>
                </div> */}

                          <button
                            type="submit"
                            className="btn btn-primary  button-style"
                          >
                            Save Changes
                            <span
                              className={
                                loading
                                  ? "spinner-border spinner-border-sm mr-1"
                                  : null
                              }
                            ></span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-primary reset-btn"
                            onClick={() => {
                              reset2();
                            }}
                          >
                            {" "}
                            Reset
                          </button>
                        </form>
                        <Modal
                          show={openModalpass}
                          onHide={() => setOpenModalpass(!openModalpass)}
                          centered
                          dialogClassName="modal-box"
                        >
                          <Modal.Header>
                            <Modal.Title>Password Updated</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            password has been updated successfully
                          </Modal.Body>
                          <Modal.Footer>
                            {/* <Button variant="secondary" onClick={() => setShow(!show)}>
          Cancel
        </Button> */}
                            <Button
                              variant="primary"
                              onClick={() => {
                                setOpenModalpass(!openModalpass);
                              }}
                            >
                              OK
                            </Button>
                          </Modal.Footer>
                        </Modal>
                        <div className="clear"></div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }
                  >
                    <h2>NOTIFICATIONS</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AccountSettings;
