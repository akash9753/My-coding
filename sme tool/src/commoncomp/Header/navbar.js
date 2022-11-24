import React, { useState, useEffect } from "react";
import Avatar from "../../assets/images/img_avatar.png";
import Account from "../../assets/images/settings.svg";
import Logout from "../../assets/images/logout_1.svg";
import Logo from "../../assets/images/white_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotificationPopup from "../../utils/notificationPopup/NotificationPopup";
import { getNotificationCountDetail } from "../../Services/App.service";
import {
  faAngleDown,
  faEdit,
  faPencil,
  faSignOut,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Nophoto from "../../assets/images/nophoto.svg";
// import { adminLogin } from "../../../Services/App.service";
import { adminLogin } from "../../Services/App.service";
import "./navbar.css";
import { useRef } from "react";
import { ref } from "yup";
import notification18 from "../../assets/images/notification18.svg";
const Navbar = () => {
  const navigate = useNavigate();
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("role_slug");
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("profile_pic");
    localStorage.removeItem("token");
    localStorage.removeItem("admin_name");
    navigate("/administrator/login", { replace: true });
  };
  const name = localStorage.getItem("admin_name");
  const firstname = localStorage.getItem("firstname");
  const lastname = localStorage.getItem("lastname");
  const profile_pic = localStorage.getItem("profile_pic");
  const role = localStorage.getItem("role");
  const role_slug = localStorage.getItem("role_slug");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleMenu, setTogglemenu] = useState(false);
  const [Invalid, setInvalid] = useState(false);
  const [profile_pic1, setProfile_pic1] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [image, setImage] = useState(profile_pic);
  const [totalCount, setTotalCount] = useState();
  let popupRef = useRef();
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    let handler = (event) => {
      if (!popupRef.current?.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setShowPopup]);

  // useEffect(async () => {
  //   setInterval(() => {
  //     getNotificationCountDetail()
  //       .then((res) => {
  //         console.log(res.data.total_count);
  //         setTotalCount(res.data.total_count);
  //       })
  //       .catch((err) => {
  //         console.error("error", err.message);
  //       });
  //   }, 3000);
  // }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light justify-content-between"
        id="check"
        style={{ backgroundColor: "#047a9c" }}
      >
        <div className="logo_head" style={{ borderBottomColor: "red" }}>
          <img className="logo_white" src={Logo} width="200px" />

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setTogglemenu(!toggleMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {(toggleMenu || screenWidth > 500) && (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" style={{marginRight:9}}>
              <div
                onClick={() =>
                  setShowNotificationModal(setShowNotificationModal(false))
                }
                className="notificationCountBoxParent"
              >
                <img src={notification18}  alt="" />
                {totalCount > 0 ? <span className="notificationCountBoxChild">{totalCount}</span> : null}
                
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                Welcome! {firstname} {lastname}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ cursor: "pointer" }}>
                <span className="bgImg">
                  {image ? (
                    <img
                      className="rounded-circle"
                      src={profile_pic}
                      height="40px"
                      width="40px"
                    />
                  ) : (
                    <span>
                      <img
                        className="rounded-circle"
                        src={Nophoto}
                        height="40px"
                        width="40px"
                      />
                    </span>
                  )}
                </span>
                {/* <img
                  className="rounded-circle bgImg"
                // src={profile_pic}
                src={profile_pic || require("../../assets/images/nophoto.svg")}
                  height="40px"
                  width="40px"
                /> */}
                <span className="down-arrow">
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    onClick={() => setShowPopup(!showPopup)}
                  />
                </span>
              </a>
              {showPopup ? (
                <div ref={popupRef} className="profile-section">
                  <div className="border-bottom">
                    <div className="name-section">
                      <a>
                        {" "}
                        <span className="bgImg">
                          {image ? (
                            <img
                              className="rounded-circle"
                              src={profile_pic}
                              height="25px"
                              width="25px"
                            />
                          ) : (
                            <span>
                              <img
                                className="rounded-circle"
                                src={Nophoto}
                                height="40px"
                                width="40px"
                              />
                            </span>
                          )}
                        </span>
                      </a>
                      <span className="profile-name">
                        {name} <br />
                        <span className="admin">{role}</span>
                      </span>
                    </div>
                  </div>
                  <div className="Account-settings">
                    <a href="/administrator/account-settings">
                      <span>
                        <img
                          src={Account}
                          alt="avatar"
                          height="12px"
                          width="12px"
                        />
                      </span>
                      Account Settings
                    </a>
                    {/* <FontAwesomeIcon icon={faPencil}/> */}
                  </div>
                  <div className="Account-settings">
                    <div onClick={handleLogout}>
                      <span>
                        {/* <img src={Logout} alt="logout" height="19px" width="19px" /> */}
                        <FontAwesomeIcon
                          icon={faSignOut}
                          className="logout-icon"
                        />{" "}
                        Logout
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </li>
            {/* <li className="nav-item">
              <div className=" nav-link logout" onClick={handleLogout}>
                <span>
                  <img src={Logout} alt="logout" height="19px" width="19px" />{" "}
                  Logout
                </span>
              </div>
            </li> */}
          </ul>
        )}
      </nav>
      <NotificationPopup
        showNotificationModal={showNotificationModal}
        setShowNotificationModal={setShowNotificationModal}
        totalCounts={(counts)=>setTotalCount(counts)}
      />
    </div>
  );
};

export default Navbar;
