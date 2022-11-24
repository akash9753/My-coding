import React from "react";
import { useFieldArray } from "react-hook-form";
import DeleteIcon from "../assets/images/delete.svg";
import "./SideNavbar/responsive.css";
const ProjectDetail = ({ register, handleEnter, errors, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  return (
    <>
      <div className="mb-5" style={{ position: "relative" }}>
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="p-4 mb-2"
            style={{
              background: "#eff6fc 0% 0% no-repeat padding-box",
              borderRadius: "3px",
            }}
          >
            <div>
              <div className="row">
              <span  >
                  {
                    //index !== 0 ? (
                    <span
                      className="table-icon label-contanet project-delete-icon" 
                      style={{ float: "right" }}
                      onClick={() => remove(index)}
                    >
                      <span>
                        <img
                          src={DeleteIcon}
                          className="pr-4"
                          alt="deleteIcon"
                          style={{ padding:4}}
                        />
                        <p className="d-inline">Delete Project</p>
                      </span>
                    </span>
                  }
                </span>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Project Name
                    {/* <span className="manditory">*</span> */}
                  </label>
                  <input
                    type="text"
                    {...register(`projects.${index}.project_name`)}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  {/* <p className="error-msg">{errors.project_name?.message}</p> */}
                </div>
                {/* <div className="col-md-3 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Project Manager
                  </label>
                  <input
                    type="text"
                    {...register(`projects.${index}.project_manager`)}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                </div> */}

                <div className="col-md-2 col-sm-6 colxs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Available Hours(HH)
                    {/* <span className="manditory">*</span> */}
                  </label>

                  <select
                    className="form-control form-select"
                    {...register(`projects.${index}.available_hrs`, {
                      // required: "This is required",
                    })}
                    onKeyDown={handleEnter}
                  >
                    <option value="">Select</option>
                    <option value="daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                  <p className="error-msg">{errors.available_hrs?.message}</p>
                </div>
                <div className="col-md-2 col-sm-6 colxs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    &nbsp;
                  </label>
                  <input
                    type="text"
                    {...register(`projects.${index}.available_min`, {
                      // required: "please enter avaialble hours",
                    })}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  <p className="error-msg">{errors.available_min?.message}</p>
                </div>
                <div className="col-md-2 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Currency Type
                  </label>

                  <select
                    className="form-control form-select"
                    {...register(`projects.${index}.currency`, {
                      // required: "Please Selct Currency type",
                    })}
                    onKeyDown={handleEnter}
                  >
                    <option value="">Select</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                  <p className="error-msg">{errors.currency?.message}</p>
                </div>
                <div className="col-md-2 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Hourly/ Unit Rate
                  </label>
                  <input
                    type="text"
                    {...register(`projects.${index}.hourly_rate`, {
                      // required: "Please enter Hourly rate",
                      minLength: {
                        value: 1,
                        message: "You must be enter hourly rate",
                      },
                    })}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  <p className="error-msg">{errors.hourly_rate?.message}</p>
                </div>
                 
                
                
              </div>

              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Project Manager
                    {/* <span className="manditory">*</span> */}
                  </label>
                  <input
                    type="text"
                    {...register(`projects.${index}.project_manager`)}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  {/* <p className="error-msg">{errors.project_manager?.message}</p> */}
                </div>
                <div className="col-md-3 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Budget Rate
                  </label>
                  <input
                    type="text"
                    {...register(`projects.${index}.budget_rate`, {
                      // required: "Please enter Hourly rate",
                      minLength: {
                        value: 1,
                        message: "You must be enter hourly rate",
                      },
                    })}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  <p className="error-msg">{errors.budget_rate?.message}</p>
                </div>

                <div className="col-md-3 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Offered Rate
                  </label>
                  <input
                    type="number"
                    {...register(`projects.${index}.offer_rate`, {
                      // required: "Please enter Hourly rate",
                      minLength: {
                        value: 1,
                        message: "You must be enter hourly rate",
                      },
                    })}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  <p className="error-msg">{errors.offered_rate?.message}</p>
                </div>

                <div className="col-md-2 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    No. of hrs/ Units
                    {/* <span className="manditory">*</span> */}
                  </label>
                  <input
                    type="number"
                    {...register(`projects.${index}.hrs_spent`)}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  {/* <p className="error-msg">{errors.hrs_spent?.message}</p> */}
                </div>
                
              </div>

              <div className="row">
                <div className="col-md-6 col-sm-12 col-xs-12 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Expertise
                    {/* <span className="manditory">*</span> */}
                  </label>
                  <input
                    type="text"
                    {...register(`projects.${index}.expertise`)}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  {/* <p className="error-msg">{errors.expertise?.message}</p> */}
                </div>

                <div className="col-md-3 col-sm-12 col-xs-12 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Status
                    {/* <span className="manditory">*</span> */}
                  </label>

                  <select
                    className="form-control form-select"
                    {...register(`projects.${index}.status`)}
                    onKeyDown={handleEnter}
                  >
                    <option value="">Select</option>
                    <option value={1}>Completed</option>
                    <option value={0}>In Progress</option>
                  </select>
                  {/* <p className="error-msg">{errors.status?.message}</p> */}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Feedback for SME
                    {/* <span className="manditory">*</span> */}
                  </label>
                  <textarea
                    type="text"
                    {...register(`projects.${index}.feedback_for_sme`)}
                    className="form-control"
                    style={{ height: "94px" }}
                    id="exampleInputEmail1"
                    // onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  {/* <p className="error-msg">{errors.feedback?.message}</p> */}
                </div>
                <div className="col-md-6 col-sm-6 col-xs-6 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Feedback from SME
                    {/* <span className="manditory">*</span> */}
                  </label>
                  <textarea
                    type="text"
                    {...register(`projects.${index}.feedback_from_sme`)}
                    className="form-control"
                    style={{ height: "94px" }}
                    id="exampleInputEmail1"
                    // onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                  {/* <p className="error-msg">{errors.feedback?.message}</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="form-group mt-4">
          <button
            type="button"
            className="btn btn-outline-primary w-25 float-end"
            onClick={() => append()}
          >
            Add New Project
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
