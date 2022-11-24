import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  faUser,
  faTable,
  faAngleRight,
  faTachometerAltAverage,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "react-bootstrap";
import "./sideNavbar.css";
import "./responsive.css";
const SideNavbar = () => {
  let pageDefault = "4";
  const path = window.location.pathname;
  const [active, setActive] = useState(path);
  const id = useParams();

  const editPathCandidateUrl = `/administrator/edit-candidate/${id.id}`;
  const editPathCompanyUrl = `/administrator/edit-company/${id.id}`;
  const handleClick = () => {};
  if (path === "/administrator/dashboard") {
    pageDefault = "-1";
  }
  if (
    path === "/administrator/add-candidate" ||
    path === "/administrator/candidateList" ||
    path === `${editPathCandidateUrl}`
  ) {
    pageDefault = "0";
  }
  if (
    path === "/administrator/add-company" ||
    path === "/administrator/companyList" ||
    path === `${editPathCompanyUrl}`
  ) {
    pageDefault = "1";
  }
  if (
    path === "/administrator/candidate-reports" ||
    path === "/administrator/vendor-reports"
  ) {
    pageDefault = "2";
  }

  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [rotate, setRotate] = useState("");
  const [activeIndex, setActiveIndex] = useState(false);

  const handleOnClick = (index) => {
    // setActiveIndex({ index });
    setActiveIndex(!activeIndex);
  };

  // const submenuToggle = (event) => {
  //   setIsMenuOpen(!isMenuOpen);
  //   event.stopProgation();
  // };

  return (
    <div className="container mt-3">
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link
            eventKey="link-3"
            to="/administrator/dashboard"
            className={`nav-link ${
              active === "/administrator/dashboard" ? "active" : ""
            }`}
            id="editcandidate"
            onClick={handleClick}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faTachometerAltAverage} />
            </span>
            <span className="title">Dashboard</span>
          </Link>
        </li>

        <Accordion defaultActiveKey={pageDefault}>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              onClick={(e) => e.stopPropagation(e)}
              className="form-detailed check1"
              style={{ paddingBottom: "1px" }}
            >
              <div
                onClick={() => {
                  handleOnClick();
                }}
                aria-current="page"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <span className="title">Candidate</span>
                <span className="rightBtn">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="arrow-icon-right toggleBtn rightBtn"
                    style={{ paddingLeft: "12px" }}
                  />
                </span>
              </div>
            </Accordion.Header>

            <Accordion.Body eventKey="0">
              <div className="submenu">
                <li className="nav-item">
                  <Link
                    to="/administrator/candidateList"
                    className={`nav-link ${
                      active === "/administrator/candidateList" ? "active" : ""
                    }`}
                    id="editcandidate"
                    onClick={handleClick}
                  >
                    Candidate Details
                  </Link>
                  <div className="section-border" />
                </li>
                <li className="nav-item navlink">
                  <Link
                    to="/administrator/add-candidate"
                    className={`nav-link ${
                      active === "/administrator/add-candidate" ? "active" : ""
                    }`}
                  >
                    Add New Candidate
                  </Link>
                </li>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header
              className="form-detailed check1"
              style={{ paddingBottom: "1px" }}
            >
              <div
                onClick={() => {
                  handleClick();
                }}
                aria-current="page"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
                <span className="title">Company</span>
                <span className="rightBtn">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="arrow-icon-right toggleBtn"
                    style={{ paddingLeft: "12px" }}
                  />
                </span>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <div className="submenu">
                
                <li className="nav-item">
                  <Link
                    to="/administrator/companyList"
                    className={`nav-link ${
                      active === "/administrator/companyList" ? "active" : ""
                    }`}
                  >
                    Partner Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/administrator/add-company"
                    className={`nav-link ${
                      active === "/administrator/add-company" ? "active" : ""
                    }`}
                  >
                    Add New Company 
                  </Link>
                </li>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header
              className="form-detailed check1"
              style={{ paddingBottom: "1px" }}
            >
              <div
                onClick={() => {
                  handleClick();
                }}
                aria-current="page"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={faTable} />
                </span>
                <span className="title">Reports</span>
                <span className="rightBtn">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="arrow-icon-right toggleBtn"
                    style={{ paddingLeft: "12px" }}
                  />
                </span>
              </div>
            </Accordion.Header>

            <Accordion.Body>
              <div className="submenu">
                <li className="nav-item">
                  <Link
                    to="/administrator/candidate-reports"
                    className={`nav-link ${
                      active === "/administrator/candidate-reports"
                        ? "active"
                        : ""
                    }`}
                    eventKey="link-1"
                  >
                    Candidate Report
                  </Link>
                </li>
              </div>
            </Accordion.Body>
            <Accordion.Body>
              <div className="submenu">
                <li className="nav-item">
                  <Link
                    to="/administrator/vendor-reports"
                    className={`nav-link ${
                      active === "/administrator/vendor-reports" ? "active" : ""
                    }`}
                    eventKey="link-1"
                  >
                    Vendor Reports
                  </Link>
                </li>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div></div>
      </ul>
    </div>
  );
};

export default SideNavbar;
