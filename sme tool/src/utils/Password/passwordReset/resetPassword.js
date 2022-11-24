import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
import { useForm } from "react-hook-form";
import "./sendEmail.css";
import { useNavigate, useParams } from "react-router-dom";
import { Modal, Button, Spinner } from "react-bootstrap";
import { updateAdminPassword } from "../../../Services/App.service";

const ResetPassword = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [show, setShow] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({ defaultValues: { password: "", confirm_password: "" } });
  const password = useRef({});

  password.current = watch("password", "");
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
    setShow(!show);
  };

  const onsubmit = async (data, event) => {
    setLoading(true);
    const formData = new FormData();
    event.preventDefault();
    formData.append("password", data.confirm_password);
    updateAdminPassword(id, formData)
      .then((res) => {
        // console.log('updateAdminPassword res', res);
        setLoading(false);
        setToggleModal(!toggleModal);
      })
      .catch((err) => {
        setLoading(false);
        return console.error(err.message);
      });
  };
  return (
    <div className="container main-section">
      <div className="row email-main reset-section">
        <div className="col-md-12 col-sm-12 col-xs-12 email-section">
          <h2 className="email-title">Reset Password</h2>
          <p className="email-content">Please enter your new password</p>
        </div>
        <div className="email-address-section">
          <form onSubmit={handleSubmit(onsubmit)}>
            <label className="label-contanet">New Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control"
              {...register("password", {
                required: "Please enter password",
                minLength: {
                  value: 4,
                  message: "Password must have at least 4 characters",
                },
              })}
            />
            {errors.password && (
              <p className="error-msg">{errors.password.message}</p>
            )}

            {show ? (
              <a onClick={togglePassword} className="show-password">
                show
              </a>
            ) : (
              <a onClick={togglePassword} className="show-password">
                hide
              </a>
            )}

            <label className="label-contanet">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              {...register("confirm_password", {
                required: "Please enter confirm password",

                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            {errors.confirm_password && (
              <p className="error-msg">{errors.confirm_password.message}</p>
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary send-btn"
            >
              {" "}
              Reset Password{" "}
              <span
                className={
                  loading ? "spinner-border spinner-border-sm mr-1" : null
                }
              ></span>
            </button>
          </form>
          <div className="clear"></div>
        </div>
      </div>
      <Modal
        show={toggleModal}
        onHide={() => setToggleModal(!toggleModal)}
        centered
        dialogclassName="modal-box"
      >
        <Modal.Body>The Password is succesfully updated</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => navigate("/administrator/login")}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResetPassword;
