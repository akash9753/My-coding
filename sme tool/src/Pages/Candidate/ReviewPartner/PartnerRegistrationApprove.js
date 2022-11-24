import React, { useEffect, useState } from "react";
import Navbar from "../../../commoncomp/Header/navbar";
import SideNavbar from "../../../commoncomp/SideNavbar/sideNavbar";
import Footer from "../../../commoncomp/Footer/footer";
import "./partnerRegistrationApprove.css";
import filePdfSolid from "../../../assets/images/file-pdf-solid.svg";
import addressCardSolid from "../../../assets/images/address-card-solid.svg";
import filelinessolid from "../../../assets/images/file-lines-solid.svg";
import moneycheckdollarsolid from "../../../assets/images/money-check-dollar-solid.svg";
import wordsvgicon from "../../../assets/images/wordsvgicon.svg";
import exceliconsvg from "../../../assets/images/exceliconsvg.svg";
import notepadsvgrepocom from "../../../assets/images/notepad-svgrepo-com.svg";
import jpgiconpng from "../../../assets/images/jpgiconpng.png";
import pngformaticon from "../../../assets/images/pngformaticon.png";
import jpegiconformat from "../../../assets/images/jpegiconformat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, FormCheck, Modal } from "react-bootstrap";
import Overlay from "react-bootstrap/Overlay";
import { Link } from "react-router-dom";
import {
  getCompanyDetailsById,
  downloadFile,
  approveRejectPartner,
} from "../../../Services/App.service";

const PartnerRegistrationApprove = () => {
  const [partnerData, setPartnerData] = useState();
  const [approve, setApprove] = useState(true);
  const [show, setShow] = useState(false);
  const [showReasonBox, setShowReasonBox] = useState(false);
  const [services, setServices] = useState([]);
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: true,
    },
  });

  useEffect(async () => {
    await getCompanyDetailsById(id)
      .then((res) => {
        console.log(`partner data form backend`, res.data.data);
        setPartnerData(res.data.data);
        setServices(res.data.data.services);
        setFiles(res.data.data.attachments);
      })
      .catch((err) => {
        return console.error(err.message);
      });
  }, [id]);
  console.log(`attachment files data from bakend`, files);

  const handleResumeDownload = (attachment) => {
    let fileName = attachment.attachment_name; 
    console.log(fileName);
    downloadFile(attachment.attachment_url).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName); //or any other extension
      document.body.appendChild(link);
      link.click();
    });
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    if (data.status === true) {
      data.status = 1;
    } else {
      data.status = 3;
    }
    data.vendor_id = partnerData.id;
    const formdata = JSON.stringify(data);
    approveRejectPartner(formdata)
      .then((res) => {
        setIsSubmitting(false);
        setShow(!show);
      })
      .catch((err) => {
        setIsSubmitting(false);
        console.error("ERROR", err.message);
      });
  };
  const renderFileImages = (file) => {
    let fileName = file.attachment_name.split(".").pop();
    switch (fileName) {
      case "pdf":
        return (
          <img
            className="pdfIcon_partner"
            style={{ marginLeft: 10 }}
            onClick={()=>handleResumeDownload(file)}
            height={20}
            width={20}
            src={filePdfSolid}
          />
        );
      case "docx":
        return (
          <img
            className="pdfIcon_partner"
            style={{ marginLeft: 10 }}
            onClick={()=>handleResumeDownload(file)}
            height={20}
            width={20}
            src={wordsvgicon}
          />
        );
        case "png":
        return (
          <img
            className="pdfIcon_partner"
            style={{ marginLeft: 10 }}
            onClick={()=>handleResumeDownload(file)}
            height={20}
            width={20}
            src={pngformaticon}
          />
        );
        // case "xlsx":
        // return (
        //   <img
        //     className="pdfIcon_partner"
        //     style={{ marginLeft: 10 }}
        //     onClick={()=>handleResumeDownload(file)}
        //     height={20}
        //     width={20}
        //     src={exceliconsvg}
        //   />
          
        // );
        // case "txt":
        // return (
        //   <img
        //     className="pdfIcon_partner"
        //     style={{ marginLeft: 10 }}
        //     onClick={()=>handleResumeDownload(file)}
        //     height={20}
        //     width={20}
        //     src={notepadsvgrepocom}
        //     alt="txt"
        //   />
        // );
        case "jpg":
        return (
          <img
            className="pdfIcon_partner"
            style={{ marginLeft: 10 }}
            onClick={()=>handleResumeDownload(file)}
            height={20}
            width={20}
            src={jpgiconpng}
            />
        );
        case "jpeg":
        return (
          <img
            className="pdfIcon_partner"
            style={{ marginLeft: 10 }}
            onClick={()=>handleResumeDownload(file)}
            height={20}
            width={20}
            src={jpegiconformat}
          />
        );
        
      default:
        return null;
    }
  };
  return (
    <>
      <Navbar />
      <div className="second-section">
        <div className="row first_section_approved">
          <div className="col-md-2 left-panel">
            <SideNavbar />
          </div>
          <div className="col-md-10 right-panel">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="heading_approved">
                    <FontAwesomeIcon
                      icon={faChevronLeft}
                      className="chevron-left"
                    />{" "}
                    <Link to="/administrator/companyList">
                    <span >New Partner Registrations</span>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"></div>
              </div>
              <div className="row second_section_approved">
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                  <div className="row ">
                    {/* <div className="col-12 col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1"></div> */}
                    <div className="col-12 col-xs-12 col-sm-12 col-md-11 col-lg-11 col-xl-11 d-flex justify-content-end">
                      <div className="normal_black_letter_approved position_partner">
                        Approve this partner application?
                      </div>
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-1 col-lg-1 col-xl-1 d-flex justify-content-end">
                      <div className="reason_popup_postion_partner">
                        <FormCheck
                          type="switch"
                          {...register("status")}
                          label={approve === true ? "Approve" : "Reject"}
                          className="d-inline-block"
                          onChange={(e) => {
                            setApprove(e.target.checked);
                            setShowReasonBox(!showReasonBox);
                          }}
                        />
                        <Overlay show={showReasonBox} placement="Bottom">
                          {({
                            placement,
                            arrowProps,
                            show: _show,
                            popper,
                            ...props
                          }) => (
                            <div {...props} className="reason-block-partner">
                              <div>Please add a Reason for Rejection</div>
                              <textarea
                                type="text"
                                {...register("reason", {
                                  required: "this field is required",
                                })}
                                className="form-control"
                              />
                              <p className="error-msg">
                                {errors.reason?.message}
                              </p>
                            </div>
                          )}
                        </Overlay>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row third_section_approved">
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="bold_black_letter_approved">
                    {partnerData?.contact_name}
                  </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <span className="normal_black_letter_approved">Email : </span>{" "}
                  :{" "}
                  <span className="normal_blue_letter_approved">
                    {partnerData?.email}
                  </span>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <span className="normal_black_letter_approved">PAN</span> :{" "}
                  <span className="normal_blue_letter_approved">
                    {partnerData?.pan}
                  </span>
                </div>
              </div>

              <div className="row fourth_section_approved">
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="bold_black_letter_approved">
                    {partnerData?.company_name}
                  </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <span className="normal_black_letter_approved">Phone</span> :{" "}
                  <span className="bold_black_letter_approved">
                    {partnerData?.phone}
                  </span>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <span className="normal_black_letter_approved">GSTIN</span> :{" "}
                  <span className="normal_blue_letter_approved">
                    {partnerData?.gstin}
                  </span>
                </div>
              </div>

              <div className="row fifth_section_approved">
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <div className="normal_black_letter_approved">
                    {partnerData?.address}
                  </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"></div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <span className="normal_black_letter_approved">HSN Code</span>{" "}
                  : <span>{partnerData?.hsn_code}</span>
                </div>
              </div>
              <div className="row sixth_section_approved">
                <span className="heading_blue_line_approved">
                  Service Offering
                </span>
                <div
                  className="normal_black_letter_approved"
                  style={{ marginTop: 30 }}
                >
                  {
                    <div>
                      {services.map((service) => {
                        return (
                          <div key={service.value}>
                            <div>{service.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  }
                </div>
              </div>
              <div className="row seventh_section_approved">
                <span className="heading_blue_line_approved">
                  Service Segment
                </span>
                <div>
                  <div
                    className="normal_black_letter_approved"
                    style={{ marginTop: 25 }}
                  >
                    {partnerData?.service_segment}
                  </div>
                </div>
              </div>
              <div
                className="row eighth_section_approved"
                style={{ marginTop: 18 }}
              >
                <span className="heading_blue_line_approved">
                  Primary Discipline
                </span>
                <div>
                  <div
                    className="normal_black_letter_approved"
                    style={{ marginTop: 18 }}
                  >
                    {partnerData?.p_discipline}
                  </div>
                </div>
              </div>
              <div
                className="row ninth_section_approved"
                style={{ marginTop: 18 }}
              >
                <span className="heading_blue_line_approved">
                  Company size / Breakup of team members
                </span>
                <div>
                  <div
                    className="normal_black_letter_approved"
                    style={{ marginTop: 18 }}
                  >
                    {partnerData?.company_size}
                  </div>
                </div>
              </div>
              <div
                className="row tenth_section_approved"
                style={{ marginTop: 18 }}
              >
                <span className="heading_blue_line_approved">Attachments</span>
                <div style={{ marginTop: 15 }}>
                  {
                    <span>
                      {files.map((file) => {
                        return (
                          <span key={file.id}>
                            <span>
                              <div className="tooltipPartner">
                                {renderFileImages(file)}
                                <span className="tooltipTextPartner">
                                  Download {file.attachment_name}
                                </span>
                              </div>
                            </span>
                          </span>
                        );
                      })}
                    </span>
                  }
                  {/* <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={addressCardSolid} />
                  </span>
                  <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={filelinessolid} />
                  </span>
                  <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={moneycheckdollarsolid} />
                  </span>
                  <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={wordsvgicon} />
                  </span>
                  <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={exceliconsvg} />jpgiconpng
                  </span> */}
                  {/* <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={jpgiconpng} />
                  </span> 
                  <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={pngformaticon} />
                  </span>
                  <span style={{ marginLeft: 15 }}>
                    <img height={20} width={20} src={jpegiconformat} />
                  </span>   */}
                </div>
              </div>
              <div className="row eleventh_section_approved">
                <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8"></div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <button
                    type="submit"
                    className="btn btn-primary button-style-partner-approve"
                  >
                    {isSubmitting && (
                      <span className="spinner-border spinner-border-sm mr-1"></span>
                    )}
                    Save
                  </button>
                </div>
              </div>
            </form>
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
          <Modal.Title>Partner Saved Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The Partner detail has saved successfully to supplier connect
          portal.
          {/* You can view and edit the candidate details in active list
            of candidate details. */}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(!show);
              navigate("/administrator/companyList");
            }}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PartnerRegistrationApprove;
