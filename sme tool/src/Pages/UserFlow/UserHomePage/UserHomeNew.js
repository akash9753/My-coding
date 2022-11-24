import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate,Link } from "react-router-dom";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import HurixLogo from "../../../assets/images/Hurix_digital_logo.svg";
import SupplierConnectLogo from "../../../assets/images/supplierConnectLogo.svg";
import people_logo from "../../../assets/images/people_bg.svg";
import "./UserHomeNew.css";

const UserHomeNew = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 blue_Section_New">
            <div className="row upper_part_left"></div>
            <div className="row middle_part_left">
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                 <div className="row blue_Section_New_TextHeading">
                 <div className="font_montserrat_normal clr_white ltr_spc opacity_1 txt_align_left ">
                Hurix Supplier Connect
              </div>
                 </div>
                 <div className="row blue_Section_New_TextNormal">
                 <div className="font_montserrat_medium clr_white ltr_spc opacity_1 txt_align_left ">
                One stop tool to connect the Vendors, SME, Resource partners.
              </div>
                 </div>
            </div>
            
            </div>
            <div className="row lower_part_left"></div>
            
            {/* <div className="blue_Section_New_Text">
              <div className="font_montserrat_normal clr_white ltr_spc opacity_1 txt_align_left ">
                Hurix Supplier Connect
              </div>
              
            </div> */}
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 white_Section_New">
            <div className="row upperPart">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="row logo_row_upper">
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 logo_position_new">
                    <div className="head_logo_right_new">
                      <a href="https://www.hurix.com" target="_blank">
                      <img src={HurixLogo} />
                      </a>
                      
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"></div>
                </div>
                <div className="row">
                  <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 supplier_connect_logo_position">
                    <div>
                    
                    <img src={SupplierConnectLogo} className="" />
                    
                      </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
                </div>
              </div>
            </div>
            <div className="row middlePart">
              <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <div className="row button_position_both">
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                    <div>
                      <Button
                        className="partner_button"
                        onClick={() => {
                          navigate("/partner-registration");
                        }}
                      >
                        Register as Partner
                      </Button>
                    </div>
                  </div>
                  <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <Button className="candidate_button" onClick={() => {
                          // navigate("/user-home");
                      navigate("/candidate-registration");
                        }}>
                      Register as Candidate
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
            </div>
            <div className="row lowerPart">
              <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 people_logo_image_pos">
                <div>
                  <img
                    src={people_logo}
                    className="people_logo_image_size"
                  />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHomeNew;
