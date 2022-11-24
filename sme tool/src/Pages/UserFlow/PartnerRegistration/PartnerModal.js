import React, { useState, useEffect } from "react";
import { useRef } from "react";
import "./partnerModal.css";
const Modal2 = ({ showModal, onClose, setShowModal }) => {
  let popupRef = useRef();
  useEffect(() => {

    let handler = (event) => {
      if (!popupRef.current?.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setShowModal]);
  if (showModal === false) {
    return null;
  }
  return (
    <div ref={popupRef} className="modalWrapper">
      <div className="modalChild">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-9">
            <h3 className="modal_heading_text_partner">
              Registered Successfully
            </h3>
          </div>
          <div className="col-1">
            <div onClick={onClose}  className="btnClose">
              OK
            </div>
          </div>
        </div>
        <div className="row justify-content-left">
            <div className="col-1"></div>
            <div className="col-9">
              <div className="modal_main_text_partner">
              Your detail has been registered successfully in our Supplier Connect Portal. 
              If any clarifications, Our admin will get in touch with you for further details.
              </div>
            </div>
            {/* <div className="col-1"></div> */}
        </div>
      </div>
    </div>
  );
};
export default Modal2;