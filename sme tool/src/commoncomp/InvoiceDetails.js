import moment from "moment";
import React from "react";
import { useFieldArray } from "react-hook-form";
import DeleteIcon from "../assets/images/delete.svg";

const InvoiceDetail = ({ register, handleEnter, control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "invoice",
  });
  return (
    <>
      <div className="mb-5">
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
                <div
                  className="table-icon label-contanet"
                  onClick={() => remove(index)}
                >
                  <div style={{ float: "right" }}>
                    <img
                      src={DeleteIcon}
                      className="pr-4"
                      alt="deleteIcon"
                      style={{ paddingRight: "6px" }}
                    />
                    <p className="d-inline">Delete Invoice</p>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-3 col-sm-12 col-xs-12 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    {...register(`invoice.${index}.invoice_num`)}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12  form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Invoice Date
                  </label>
                  <input
                    type="date"
                    {...register(`invoice.${index}.invoice_date`)}
                    max={moment().format("YYYY-MM-DD")}
                    className="form-control"
                    id="exampleInputEmail1"
                    onKeyDown={handleEnter}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="col-md-2 col-sm-12 col-xs-12  form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Total Amount
                  </label>

                
                    <input
                      type="number"
                      {...register(`invoice.${index}.amount`)}
                      className="form-control"
                      id="exampleInputEmail1"
                      onKeyDown={handleEnter}
                      aria-describedby="emailHelp"
                    />
                  
                </div>

                <div className="col-md-2 col-sm-12 col-xs-12  ps-0 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Currency Type
                  </label>
                  <select
                    className="form-control form-select"
                    {...register(`invoice.${index}.currency`)}
                    onKeyDown={handleEnter}
                  >
                    <option value="">Select</option>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                {/* <div className="col-md-3 col-sm-4 col-xs-4 form-group">
                  <label
                    className="label-contanet"
                    for="exampleFormControlSelect1"
                  >
                    Frequency
                  </label>

                  <select
                    className="form-control form-select"
                    {...register(`invoice.${index}.frequency`)}
                    onKeyDown={handleEnter}
                  >
                    <option value="">Select</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div> */}
                {/* <span className="col-6">
                  {
                    //index !== 0 ? (
                    <span
                      className="table-icon label-contanet"
                      style={{ float: "right" }}
                      onClick={() => remove(index)}
                    >
                      <span>
                        <img
                          src={DeleteIcon}
                          className="pr-4"
                          alt="deleteIcon"
                          style={{ paddingRight: "6px" }}
                        />
                        <p className="d-inline">Delete Invoice</p>
                      </span>
                    </span>
                    // ) : (
                    //   ""
                    // )
                  }
                </span> */}
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
            Add New Invoice
          </button>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
