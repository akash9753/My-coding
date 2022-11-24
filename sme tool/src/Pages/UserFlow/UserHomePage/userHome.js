import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import HurixLogo from "../../../assets/images/Hurix_digital_logo.svg";
import SupplierConnectLogo from "../../../assets/images/supplierConnectLogo.svg";
import people_logo from "../../../assets/images/people_bg.svg";
import linkedin_logo from "../../../assets/images/linkedin-in-brands.svg";
import "./userhome.css";
import axios from "axios";

const UserHome = () => {
  const navigate = useNavigate();
  console.log(111, window.location.origin);
  const [token, setToken] = useState();
  const { linkedInLogin } = useLinkedIn({
    clientId: "7733qroeqhn3ai",
    redirectUri: `${window.location.origin}/linkedin`,
    //hwBjpRXriHy3dfCj
    onSuccess: (code) => {
      console.log(1111, code);
      // setToken(code);

      axios
        .post(
          "https://www.linkedin.com/oauth/v2/accessToken",
          null,
          {
            params: {
              grant_type: "authorization_code",
              client_id: "7733qroeqhn3ai",
              client_secret: "hwBjpRXriHy3dfCj",
              redirect_uri: `${window.location.origin}/linkedin`,
              code: code,
            },
          }
        )
        .then(async (res) => {
          console.log("auth token res:", res);
          await axios
            .get("https://api.linkedin.com/v2/me", {
              headers: {
                "Authorization": `Bearer ${res.data.access_token}`,
              },
            })
            .then((res) => {
              console.log("lite profile res:", res);
            })
            .catch((err) => {
              console.error("lite profile error:", err);
            });

          await axios
            .get("https://api.linkedin.com/v2/emailAddress", {
              params: {
                q: "members",
                projection: "(elements*(handle~))",
              },
              headers: {
                Authorization: `Bearer ${res.data.access_token}`,
              },
            })
            .then((res) => {
              console.log("email response:", res);
            })
            .catch((err) => {
              console.error("email error:", err);
            });
        })

        .catch((err) => {
          console.error("error", err);
        });
    },
    scope: "r_emailaddress r_liteprofile",
    onError: (error) => {
      console.log(error);
    },
  });
  const headers = {
    Authorization: "Bearer " + token,
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  };
  // useEffect(() => {
  //   axios
  //     .get("https://api.linkedin.com/v2/me", {
  //       headers: headers,
  //     })
  //     .then((res) => {
  //       console.log(444, res);
  //     });
  // }, [token]);

  return (
    <>
      {/* <div>
        <div className="blue_bg_col">
          <div className="supplier_box">
            <div className="font_montserrat_normal clr_white ltr_spc opacity_1 txt_align_left">
              Hurix Supplier Connect
            </div>
            <div className="font_montserrat_medium clr_white ltr_spc opacity_1 txt_align_left">
              One stop tool to connect the Vendors, SME, Resource partners.
            </div>
          </div>
        </div>
        <div className="register_col">
          <div className="head_logo">
            <img src={HurixLogo} />
          </div>
          <div className="signup_block">
            <div>
              <img src={SupplierConnectLogo} className="register_block" />
            </div>
            <div className="linkedin_pos">
              <Button className="signup_class" onClick={linkedInLogin}>
                {" "}
                <img src={linkedin_logo} /> Sign Up with LinkedIn
              </Button>
            </div>
            <div className="cv_pos">
              <Button
                className="signup_class"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register with your CV
              </Button>
            </div>
            <div>
              <img src={people_logo} />
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 blue_Section">
            <div className="supplier_box">
              <div className="font_montserrat_normal clr_white ltr_spc opacity_1 txt_align_left">
                Hurix Supplier Connect
              </div>
              <div className="font_montserrat_medium clr_white ltr_spc opacity_1 txt_align_left">
                One stop tool to connect the Vendors, SME, Resource partners.
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 white_Section">
            <div className="register_col">
              <div className="head_logo">
                <a href="https://www.hurix.com" target="_blank">
                  <img src={HurixLogo} />
                </a>
              </div>
              <div className="signup_block">
                <div>
                  <Link to="/">
                    <img src={SupplierConnectLogo} className="register_block" />
                  </Link>
                </div>
                {/* <div className="linkedin_pos">
                  <Button className="signup_class" onClick={linkedInLogin}>
                    {" "}
                    <img src={linkedin_logo} /> Sign Up with LinkedIn
                  </Button>
                </div> */}
                <div className="cv_pos">
                  <Button
                    className="signup_class"
                    onClick={() => {
                      navigate("/candidate-registration");
                    }}
                  >
                    Register with your CV
                  </Button>
                </div>
                <div>
                  <img src={people_logo} className="office_img_logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
