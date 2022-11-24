import React, { useEffect, useState, useReducer } from "react";
import Navbar from "../../../commoncomp/Header/navbar";
import SideNavbar from "../../../commoncomp/SideNavbar/sideNavbar";
import Footer from "../../../commoncomp/Footer/footer";
import "./approveCandidate.css";
import { Button, Modal } from "react-bootstrap";
import linkedinLogo from "../../../assets/images/linkedinminilg.svg";
import CvIcon from "../../../assets/images/cv.svg";
import { useNavigate, useParams } from "react-router-dom";
import {
  downloadFile,
  editCandidateById,
  getPrimaryDisciplines,
  getSmeCategoryExpert,
} from "../../../Services/App.service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const RejectCandidate = () => {
  const [userData, setUserData] = useState();
  const [expertise, setExpertise] = useState();
  const [primaryDiscipline, setPrimaryDiscipline] = useState();
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(async () => {
    await editCandidateById(id)
      .then(async (response) => {
        getSmeCategoryExpert(response.data.data?.sme_cat_id).then((res) => {
          const expertise = res.data.data.filter((item) => {
            return response.data.data.sme_cat_expert_id === item.id;
          });
          setExpertise(expertise[0]?.experties_name);
        });
        getPrimaryDisciplines()
          .then((res) => {
            const p_discipline = res.data.data.filter((item) => {
              return response.data.data.p_discipline == item.id;
            });
            setPrimaryDiscipline(p_discipline[0]?.name);
          })
          .catch((err) => {
            console.error("error", err.message);
          });
        setUserData(response.data.data);
      })
      .catch((err) => {
        return console.error(err.message);
      });
  }, [id]);

  const handleResumeDownload = () => {
    downloadFile(userData.resume).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", userData.file_name); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="container-fluid second-section">
          <div className="row">
            <div className="col-md-2 col-sm-12 col-xs-12 left-panel">
              <SideNavbar />
            </div>
            <div className="col-md-10 col-sm-12 col-xs-12 table-panel">
              <div className="container cnt-clss">
                <div
                  className="font-20 clr-blue mb-3 table-icon"
                  onClick={() => navigate("/administrator/candidateList")}
                >
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="chevron-left"
                    />{" "}
                    Candidate Details
                  </div>
                </div>
                <div className="row float-end"></div>

                <div className="row">
                  <div className="col-md-12 font-32 clr-black">
                    {userData?.fname}
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-3 font-12 ">
                    Expertise in: <div className="clr-blue">{expertise}</div>
                  </div>
                  <div className="col-md-3 font-12">
                    Experience:
                    <div className="clr-blue">
                      {userData?.experience_yy ? (
                        <>
                          {userData?.experience_yy} Years{" "}
                          {userData?.experience_mm} Months
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="float-end download-box">
                      <div className="text-center mt-4">
                        <div
                          onClick={handleResumeDownload}
                          className="table-icon"
                        >
                          <img src={CvIcon} alt="cvIcon" />
                          <div className="font-12 clr-blue txt-underline d-inline-block ms-1">
                            Download
                          </div>
                        </div>

                        <div className="resume-txt d-block">
                          {userData?.file_name}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 font-12 clr-blue txt-underline">
                    {userData?.linkedin ? (
                      <>
                        <img src={linkedinLogo} /> {userData?.linkedin}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div>
                  <div className="section-btm-border mt-3">Personal Detail</div>
                  <div className="row mt-3">
                    <div className="col-md-4 clr-blue font-12">
                      Email ID
                      <div className="col-md-4 clr-black">
                        {userData?.p_email}
                      </div>
                    </div>
                    <div className="col-md-4 clr-blue font-12">
                      Phone Number
                      <div className="col-md-4 clr-black">
                        {userData?.p_phone}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4 clr-blue font-12">
                      Current Address
                      <div className="col-md-4 clr-black">
                        {userData?.address}
                      </div>
                    </div>
                    <div className="col-md-3 clr-blue font-12">
                      City
                      <div className="col-md-3 clr-black">{userData?.city}</div>
                    </div>
                    <div className="col-md-2 clr-blue font-12">
                      State
                      <div className="col-md-2 clr-black">
                        {userData?.state}
                      </div>
                    </div>
                    <div className="col-md-2 clr-blue font-12">
                      Pincode
                      <div className="col-md-2 clr-black">
                        {userData?.pincode}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-4 clr-blue font-12">
                      Secondary Phone
                      <div className="col-md-4 clr-black">
                        {userData?.s_phone}
                      </div>
                    </div>
                    <div className="col-md-4 clr-blue font-12">
                      Secondary Email
                      <div className="col-md-4 clr-black">
                        {userData?.s_email}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="section-btm-border mt-3">
                    Occupation and Experience
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-3 clr-blue font-12">
                      Primary Discipline
                      <div className="col-md-3 clr-black">
                        {primaryDiscipline}
                      </div>
                    </div>
                    <div className="col-md-3 clr-blue font-12">
                      Secondary Discipline
                      <div className="col-md-3 clr-black">
                        {userData?.s_discipline}
                      </div>
                    </div>
                    <div className="col-md-3 clr-blue font-12">
                      Profession
                      <div className="col-md-3 clr-black">
                        {userData?.profession}
                      </div>
                    </div>
                    <div className="col-md-3 clr-blue font-12">
                      Qualification
                      <div className="col-md-3 clr-black">
                        {userData?.qualification}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="section-btm-border mt-3">Other Details</div>
                  <div className="row mt-3">
                    <div className="col-md-3 clr-blue font-12">
                      Rejected By
                      <div className="col-md-3 clr-black">
                        {userData?.rejected_by}
                      </div>
                    </div>
                    <div className="col-md-6 clr-blue font-12">
                      Reason
                      <div className="col-md-6 clr-black">
                        {userData?.rejected_reason}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <Modal
          show={show}
          onHide={() => setShow(!show)}
          centered
          dialogClassName="modal-box"
        >
          <Modal.Header>
            <Modal.Title>Candidate Saved Successfully</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            The candidate detail has saved successfully to supplier connect
            portal.
            {/* You can view and edit the candidate details in active list
            of candidate details. */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                setShow(!show);
                navigate("/administrator/candidateList");
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

export default RejectCandidate;
