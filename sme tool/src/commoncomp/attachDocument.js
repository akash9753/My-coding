import React, { useState } from "react";
import "./SideNavbar/responsive.css";
const AttachDocument = ({ register, handleEnter, errors, setError }) => {
  const [files, setFiles] = useState([]);

  const fileChangeHandler = (e) => {
    const data = [];
    for (let i = 0; i < e.target.files.length; i++) {
      data.push(e.target.files[i]);
    }
    setFiles(data);
  };
  return (
    <>
      <div>
        <div
          className="p-4 mb-2"
          style={{
            background: "#eff6fc 0% 0% no-repeat padding-box",
            borderRadius: "3px",
          }}
        >
          <div className="row">
            <div className="col-12 form-group">
              <div className="form-group fileUpload">
                <label
                  className="label-contanet"
                  for="exampleFormControlSelect1"
                >
                  Attachment
                  {/* <span className="manditory">*</span> */}
                </label>
                <label className="custom-file-upload bg-white">
                  <input
                    type="file"
                    {...register("attachments_files")}
                    className="align-input res-file-position"
                    onKeyDown={handleEnter}
                    multiple
                    onChange={(e) => fileChangeHandler(e)}
                  />
                  Browse
                </label>
              </div>
              {/* <p className="error-msg">{errors.feedback?.message}</p> */}
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-row">
              {files?.map((item, i) => (
                <div key={i}>
                  <p>{(i ? ",  " : "") + item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttachDocument;
