import React, { useState, useRef } from "react";
import "./sendEmail.css";
import { useForm } from "react-hook-form";
import { adminResetPassword } from "../../../Services/App.service";

const Sendemail = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: { email: "" },
  });
  const email = useRef({});
  email.current = watch("email", "");
  const [modalHeader, setModalHeader] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    adminResetPassword(data)
      .then((res) => {
        // console.log('adminResetPassword res', res);
        if (res.data.status_code === 200) {
          setModalHeader(!modalHeader);
          setButtonDisabled(true);
          setLoading(false);
        } else if (res.data.status_code === 400) {
          setError(
            "email",
            {
              type: "server",
              message: "Admin not found",
            },
            {
              shouldFocus: true,
            }
          );
          setLoading(false);
        }
      })
      .catch((err) => {
        return console.error(err.message);
      });
  };

  return (
    <div
      className="container main-section"
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      <div className="row email-main">
        {modalHeader ? (
          <div className="email-section link-title">
            <h2 className="email-title reset-title">
              Reset Link Sent
              <a className="ok-btn" onClick={props.handleClose}>
                OK
              </a>
            </h2>
            <div className="clear"></div>
            <p className="email-content">
              A Reset Password link has sent to your given email address !
              Please click on the link from your email to start the reset
              process.
            </p>
          </div>
        ) : (
          <div className="col-md-12 col-sm-12 col-xs-12 email-section">
            <h2 className="email-title">Email</h2>
            <p className="email-content">
              Please enter your email address to reset the password
            </p>
          </div>
        )}
        <div className="email-address-section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="label-contanet">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="form-control"
            />
            <p className="error-msg">{errors.email?.message}</p>

            <button
              type="submit"
              className="btn btn-primary send-btn"
              disabled={buttonDisabled}
            >
              Send Reset link{" "}
              <span
                className={
                  loading ? "spinner-border spinner-border-sm mr-1" : null
                }
              ></span>
            </button>
            <div className="clear"></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sendemail;
