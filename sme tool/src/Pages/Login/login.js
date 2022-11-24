import React, { useEffect, useState } from "react";
import "./login.css";
import { Form, InputGroup, Modal } from "react-bootstrap";
import loginBg from "../../assets/images/login-bg.svg";
import Logos from "../../assets/images/black_logo.svg";
import HurixLogo from "../../assets/images/Hurix_digital_logo.svg";
import { useForm } from "react-hook-form";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import Sendemail from "../../utils/Password/passwordReset/sendEmail";
import { adminLogin } from "../../Services/App.service";

const LoginComp = (props) => {
  const [Invalid, setInvalid] = useState(false);
  const [checked, setChecked] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const loginPageStyle = {
    maxWidth: "530px",
    height: "auto",
    background: "#fff",
    borderRadius: "0px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
    margin: "auto",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("email", localStorage.getItem("email"));
    setValue("password", localStorage.getItem("password"));
  }, []);

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [remember, setRemember] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    var body = {
      id: data.id,
      email: data.email,
      password: data.password,
      role: data.role_name,
    };

    adminLogin(body)
      .then((res) => {
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("role", res.data.role_name);
        localStorage.setItem("role_slug", res.data.role_slug);
        localStorage.setItem("admin_name", res.data.fullname);
        localStorage.setItem("firstname", res.data.firstname);
        localStorage.setItem("lastname", res.data.lastname);
        localStorage.setItem("profile_pic", res.data.profile_pic);
        if (checked) {
          localStorage.setItem("email", body.email);
          localStorage.setItem("password", body.password);
        }
        setRemember(true);
        setLoading(false);
        // navigate("/administrator/dashboard", { replace: true });
        window.location.href="/administrator/dashboard"
      })
      .catch((err) => {
        setInvalid(true);
        setLoading(false);
      });
  };

  return (
    <div className="App">
      <div className="container-block">
        <div>
          <div className="sme-head">
            <img className="logo_black" src={Logos} width="200px" />
            <img src={HurixLogo} className="hurix_logo" />
          </div>
          <div className="login-wrapper" style={loginPageStyle}>
            <div className="lgn_top">
              <h2 className="txt-white  mb-0">Login</h2>
              <p className="txt-white">Please enter your email and password.</p>
            </div>
            <div>
              <Form className="frm_block" onSubmit={handleSubmit(onSubmit)}>
                {Invalid ? (
                  <span className="err-msg err-14">
                    {" "}
                    *Invalid email or password{" "}
                  </span>
                ) : (
                  ""
                )}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <div>
                    <Form.Label className="lbl-txt mb-0">Email</Form.Label>
                  </div>
                  <Form.Control
                    className="txt-box"
                    type="text"
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Invalid Email Address",
                      },
                    })}
                  />

                  <span className="err-msg">{errors.email?.message}</span>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <div>
                    <Form.Label className="lbl-txt mb-0">Password</Form.Label>
                  </div>
                  <InputGroup>
                    <Form.Control
                      className="txt-box"
                      type={viewPassword ? "text" : "password"}
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                    <InputGroup.Text
                      className="bg-white"
                      onClick={() => setViewPassword(!viewPassword)}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </InputGroup.Text>
                  </InputGroup>

                  {errors.password && <span className="err-msg">required</span>}
                </Form.Group>
                <Form.Group
                  className="mb-3 checkbox_cont "
                  controlId="formBasicCheckbox"
                >
                  <Form.Check
                    type="checkbox"
                    label="Remember Me"
                    onClick={() => setChecked(!checked)}
                  />
                  <span>
                    <a
                      className="forgot-link"
                      to="/emailsent"
                      onClick={handleShow}
                    >
                      Forgot Password?
                    </a>
                  </span>
                </Form.Group>
                <Form.Group className="sub_block">
                  <div className="row">
                    <div className="col" style={{ height: "52px" }}>
                      <img src={loginBg} className="col-img" alt="img" />
                    </div>
                    <div className="col" style={{ height: "52px" }}>
                      <button className="lgn-btn" type="submit">
                        Log in{" "}
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
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        dialogclassName="modal-box"
      >
        <Sendemail handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default LoginComp;
