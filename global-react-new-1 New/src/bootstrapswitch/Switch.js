import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./switch.css";
const Switch1 = () => {
  
  const[active , setActive]=useState(false);
  const[blacklist , setBlacklist]=useState(false);
//   const [active, setActive] = useState(false);
//   console.log(active);

  const {
    register,
    handleSubmit,
    } = useForm();

   console.log("akash");

  const onSubmit = (data) => {
       

    // data.status === true ? (data.status = 1) : (data.status = 0);
    //  data.blacklist === true ? (data.blacklist = 1) : (data.blacklist = 0);

       console.log(active);


    // console.log(data.status);
    // console.log(data.blacklist);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            checked={active}
            //default value of status is false
            {...register("status")}
            onChange={(e)=>setActive(e.target.checked)}
            // {...alert(active)}
            disabled={blacklist}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input "
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDisabled"
            checked={blacklist}
            {...register("blacklist")}
            onChange={(e)=>setBlacklist(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">
            Default switch checkbox input
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </>
  );
};

export default Switch1;
