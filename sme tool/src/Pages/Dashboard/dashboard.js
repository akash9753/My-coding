import React, { useEffect, useState } from "react";
import Navbar from "../../commoncomp/Header/navbar";
// import { Table } from "react-bootstrap";
import DashboardIcon from "../../assets/images/meter.svg";
import Footer from "../../commoncomp/Footer/footer";
// import "./dashboard.css";
// import "../../commoncomp/SideNavbar/responsive.css";
import SideNavbar from "../../commoncomp/SideNavbar/sideNavbar";
// import { useNavigate } from "react-router-dom";
import {
  getDashboardCategories,
  getDashboardOverview,
  getVendorDashboardCategories,
  getvendorDashboardOverview,
} from "../../Services/App.service";
// import CardsDashboard from "../..//\commoncomp/Cards/dashboard/cardsDashboard";
import CardsDashboard from "../../commoncomp/Cards/dashboard/cardsDashboard";
import TableDashboard from "../../commoncomp/Tables/dashboard/tableDashboard";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";
const Dashboard = () => {
  const [category, setCategory] = useState([]);
  const [vendorCategory, setVendorCategory] = useState([]);
  const [vendorDashboard, setVendorDashboard] = useState([]);
  const [expertise, setExpertise] = useState([]);
  const [profession, setProfession] = useState([]);
  const [p_discipline, setP_discipline] = useState([]);
  const [p_discipline1, setP_discipline1] = useState([]);

  const [location, setLocation] = useState([]);
  const [location1, setLocation1] = useState([]);

  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [service, setService] = useState([]);
  // const navigate = useNavigate();

  // let getList = (item) => {
  //   console.log("row clicked", item);
  //   navigate("/administrator/candidateList");
  // };

  useEffect(() => {
    setLoading((prevState) => ({ loading: !prevState.loading }));
  }, []);

  useEffect(() => {
    if (loading) {
      // console.log('AAAA');
    }
    getDashboardCategories()
      .then((res) => {
        setCategory(res.data.data);

        setLoading(false);
        // console.log('loading should fail', loading);
      })
      .catch((err) => {
        console.error("error", err.message);
      });

    getDashboardOverview()
      .then((res) => {
        setExpertise(res.data.data.expertise);
        setProfession(res.data.data.profession);
        setP_discipline(res.data.data.p_discipline);
        setLocation(res.data.data.country);

        setLoading(false);
        // console.log('loading should fail', loading);
      })
      .catch((err) => {
        console.error("error", err.message);
      });

    getVendorDashboardCategories()
      .then((res) => {
        setVendorCategory(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error", err.message);
      });
    getvendorDashboardOverview()
      .then((res) => {
        setService(res.data.data.services);
        setP_discipline1(res.data.data.p_discipline);
        setLocation1(res.data.data.city);

        setLoading(false);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error", err.message);
      });
  }, [loading]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <Navbar />
      <div className="second-section">
        <div className="row">
          <div className="col-md-2 left-panel">
            <SideNavbar />
          </div>
          <div className="col-md-10 right-panel dashboard">
            <h3 className="dashboard-title">
              <span>
                <img
                  src={DashboardIcon}
                  alt="dashboard"
                  height="22px"
                  width="22px"
                  style={{ marginBottom: "6px" }}
                />
              </span>{" "}
              Dashboard
            </h3>
            <div className="bloc-tabs">
              <Tabs
                defaultActiveKey="sme"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="sme" title="Candidate Overview" tabIndex={1}>
                  <div className="container dashboard-section">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 category-section">
                      {loading ? (
                        <div
                          className="text-primary loading-data-1"
                          role="status"
                        >
                          <span>Loading...</span>
                        </div>
                      ) : (
                        category?.map((cate, index) => (
                          <CardsDashboard category={cate} key={index} />
                        ))
                      )}
                    </div>
                    <div className="br-b"></div>
                    <div className="container dashboard-section">
                      <div className="row">
                        <h3 className="sme-title">Candidate Overview</h3>
                        <TableDashboard
                          title={"Expertise"}
                          columns={[
                            "Name",
                            "Total Candidates",
                            "Assigned Projects",
                          ]}
                          data={expertise}
                          loading={loading}
                          viewall={"/administrator/candidateList"}
                          tabIndex={1}
                        />
                        <TableDashboard
                          title={"Profession"}
                          columns={[
                            "Name",
                            "Total Candidates",
                            "Assigned Projects",
                          ]}
                          data={profession}
                          loading={loading}
                          viewall={"/administrator/candidateList"}
                          tabIndex={1}
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row">
                        <TableDashboard
                          title={"Primary Discipline"}
                          columns={[
                            "Discipline",
                            "Total Candidates",
                            "Assigned Projects",
                          ]}
                          data={p_discipline}
                          loading={loading}
                          viewall={"/administrator/candidateList"}
                          tabIndex={1}
                        />
                        <TableDashboard
                          title={"Location"}
                          columns={[
                            "Country",
                            "Total Candidates",
                            "Assigned Projects",
                          ]}
                          data={location}
                          loading={loading}
                          viewall={"/administrator/candidateList"}
                          tabIndex={1}
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="vendor" title="Vendor Overview" tabIndex={2}>
                  <div className="container dashboard-section">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 category-section">
                      {loading ? (
                        <div
                          className="text-primary loading-data-1"
                          role="status"
                        >
                          <span>Loading...</span>
                        </div>
                      ) : (
                        vendorCategory?.map((cate, index) => (
                          <CardsDashboard category={cate} key={index} />
                        ))
                      )}
                    </div>
                    <div className="br-b"></div>
                    <div className="container dashboard-section">
                      <div className="row">
                        <h3 className="sme-title">Vendor Overview</h3>

                        <TableDashboard
                          title={"Service Offering"}
                          columns={[
                            "Service",
                            "Total Vendors",
                            "Assigned Vendors",
                          ]}
                          data={service}
                          loading={loading}
                          viewall={"/administrator/companyList"}
                          tabIndex={2}
                        />
                        <TableDashboard
                          title={"Location"}
                          columns={[
                            "City",
                            "Total Vendors",
                            "Assigned  Vendors",
                          ]}
                          data={location1}
                          loading={loading}
                          viewall={"/administrator/companyList"}
                          tabIndex={2}
                        />

                        {/* <TableDashboard title={'Profession'} columns={['Name', 'Total Candidates', 'Assigned Projects']} data={profession} loading={loading} viewall={'/administrator/candidateList'}/> */}
                      </div>
                      <div className="row">
                        <div className="col-md-6"></div>
                      </div>
                      <div className="row">
                        <TableDashboard
                          title={"Primary Discipline"}
                          columns={[
                            "Discipline",
                            "Total Vendors",
                            "Assigned  Vendors",
                          ]}
                          data={p_discipline1}
                          loading={loading}
                          viewall={"/administrator/companyList"}
                          tabIndex={2}
                        />
                        {/* <TableDashboard title={'Location'} columns={['City', 'Total Candidates', 'Assigned Projects']}  loading={loading} viewall={'/administrator/candidateList'} /> */}
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
