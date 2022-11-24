import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./notificationPopup.css";
import notificationRegistUserIcon from "../../assets/images/notificationRegistUserIcon.svg";
import {
  getNotificationCountDetail,
  updateNotification,
} from "../../Services/App.service";
import { useNavigate } from "react-router-dom";
import moment from "moment";
const NotificationPopup = (props) => {
  const { showNotificationModal, setShowNotificationModal } = props;
  const [notificationData, setNotificationData] = useState();
  const [totalCount, setTotalCount] = useState();
  const [candidateCount, setTotalCandidateCount] = useState();
  const [vendorCount, setVendorCount] = useState();
  const [candidateDate, setCandidateDate] = useState();
  const [vendorDate, setVendorDate] = useState();
  let popupRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    let handler = (event) => {
      if (!popupRef.current?.contains(event.target)) {
        setShowNotificationModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setShowNotificationModal]);

  useEffect(() => {
    const interval = setInterval(() => {
      getTotalCounts();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  async function getTotalCounts() {
    await getNotificationCountDetail()
      .then((res) => {
        props.totalCounts(res.data.total_count);
        setNotificationData(res.data);
        setTotalCount(res.data.total_count);
        setTotalCandidateCount(res.data.candidate_count);
        setVendorCount(res.data.company_count);
        setCandidateDate(res.data.candidate_date);
        setVendorDate(res.data.vendor_date);
      })
      .catch((err) => {
        console.error("error", err.message);
      });
  }

  const markAllAsRead = () => {
    // let candidate = {
    //   type: "candidate",
    // };
    // updateNotification(candidate)
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.error("error", err.message);
    //   });
    // let vendor = {
    //   type: "vendor",
    // };
    // updateNotification(vendor)
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.error("error", err.message);
    //   });
    let all = {
      type: "all",
    };
    updateNotification(all)
      .then((res) => {
        if (res.data.success === true) {
          props.totalCounts(0);
          setTotalCount(0);
          setTotalCandidateCount(0);
          setVendorCount(0);
        }
      })
      .catch((err) => {
        console.error("error", err.message);
      });
  };

  if (showNotificationModal === false) {
    return null;
  }

  return (
    <div ref={popupRef} className="modalWrapper_NotificationPopup">
      <div className="modalChild_NotificationPopup">
        <div className="row dateAndTimeCandidate">
          {candidateCount > 0 ? moment(candidateDate).format("LLLL") : null}
        </div>
        <div className="row commonRegCountBox" style={{ marginTop: "35" }}>
          <div className="col-1">
            <img
              src={notificationRegistUserIcon}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <div className="col-10">
            <div className="commonRegHeading">Candidate Registrations</div>
            <div className="commonMainText">
              {candidateCount} New Candidate Registered
            </div>
            <div className="commonListLink">
              <button
                className="remove_button_style_notification"
                onClick={() => {
                  navigate("/administrator/candidateList");
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row dateAndTime dateAndTimeVendor">
          {vendorCount > 0 ? moment(vendorDate).format("LLLL") : ""}
        </div>
        <div className="row vendorRegCountBox">
          <div className="col-1">
            <img
              src={notificationRegistUserIcon}
              width={20}
              height={20}
              alt=""
            />
          </div>
          <div className="col-10">
            <div className="commonRegHeading">Vendor Registrations</div>
            <div className="commonMainText">
              {vendorCount} New Vendor Registered
            </div>
            <div className="commonListLink">
              <button
                className="remove_button_style_notification"
                onClick={() => {
                  navigate("/administrator/companyList");
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        <div className="row markAllAsReadNoti">
          {totalCount === 0 ? (
            <button
              className="remove_button_style_notification_dull"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          ) : (
            <button
              className="remove_button_style_notification"
              onClick={markAllAsRead}
            >
              Mark all as read
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
