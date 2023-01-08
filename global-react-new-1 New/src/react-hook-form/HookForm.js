import React, { useState } from 'react';
import '../App.css';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched"
  });
  console.log(errors);
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const onSubmit = (data) => {
    toast.success('Information have been saved successfully.');
    console.log(data);
    setfName(data.fname)
    setlName(data.lname)
    setGender(data.gender)
    setMobile(data.mobile)
    setEmail(data.email)
    setState(data.state)
    
  }
  return (
    <div className="">
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='form-group'>
              <label htmlFor="fname">First Name</label>
              <input className={classNames("form-control", { "is-invalid": errors.fname })}
                type="text" id='fname'
                {...register("fname", { required: true, minLength: 2, pattern: /^[a-zA-Z ]{2,30}$/ })} />

              {errors.fname?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.fname?.type === "minLength" && (
                <div className="invalid-feedback">Minimum 2 character required</div>
              )}
              {errors.fname?.type === "pattern" && (
                <div className="invalid-feedback">Only character allowed</div>
              )}
            </div>

            <div className='form-group'>
              <label htmlFor="lname">Last Name</label>
              <input className={classNames("form-control", { "is-invalid": errors.lname })}
                type="text" id='lname'
                {...register("lname", { required: true, minLength: 2, pattern: /^[a-zA-Z ]{2,30}$/ })} />

              {errors.lname?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.lname?.type === "minLength" && (
                <div className="invalid-feedback">Minimum 2 character required</div>
              )}
              {errors.lname?.type === "pattern" && (
                <div className="invalid-feedback">Only character allowed</div>
              )}
            </div>

            <div className='form-group'>
              <label>Gender</label>
              <br />
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="male" value="male" {...register("gender", { required: true })} />
                <label className="form-check-label" htmlFor="male">male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="female" value="female" {...register("gender", { required: true })} />
                <label className="form-check-label" htmlFor="female">female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="other" value="other" {...register("gender", { required: true })} />
                <label className="form-check-label" htmlFor="other">other</label>
              </div>
              {errors.gender?.type === "required" && (
                <div className="form-text text-danger">This field is required</div>
              )}

            </div>

            <div className='form-group'>
              <label htmlFor="mobile">Mobile Number</label>
              <input className={classNames("form-control", { "is-invalid": errors.mobile })}
                {...register("mobile", { required: true, pattern: /^([0-9]{10,12})$/ })} />
              {errors.mobile?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.mobile?.type === "pattern" && (
                <div className="invalid-feedback">Enter 10 digit valid mobile number</div>
              )}

            </div>

            <div className='form-group'>
              <label htmlFor="email">Email Address</label>
              <input type="email" className={classNames("form-control", { "is-invalid": errors.email })}
                id='email' name="email"
                {...register("email", { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
              />
              {errors.email?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}

              {errors.email?.type === "pattern" && (
                <div className="invalid-feedback">Enter a valid email address</div>
              )}
            </div>



            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <input type="password" className={classNames("form-control", { "is-invalid": errors.password })}
                {...register("password", { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/ })} />
              {errors.password?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}
              {errors.password?.type === "pattern" && (
                <div className="invalid-feedback">Password length must be 8-16 character and contain upper case, lower case, numbers and special characters</div>
              )}
            </div>




            <div className='form-group'>
              <label>Choose State</label>
              <select className={classNames("form-control", { "is-invalid": errors.state })}
                {...register("state", { required: true })} >

                <option value="">Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
              {errors.state?.type === "required" && (
                <div className="invalid-feedback">This field is required</div>
              )}
            </div>


            <div className='form-group'>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="terms" value="agree" {...register("termsCondition", { required: true })} />
                <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
              </div>
              {errors.termsCondition?.type === "required" && (
                <div className="form-text text-danger">This field is required</div>
              )}
            </div>

            <div className='form-group'>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="updates" {...register("updates")} />
                <label className="form-check-label" htmlFor="updates">send me latest updates</label>
              </div>
            </div>

            <button type='submit' className='btn btn-primary' style={{ marginTop: 4 }}>Submit</button>
          </form>


          <div style={{ marginTop: 20 }}>
             First Name : {fname}
            <br />
            Last Name : {lname}
            <br />
            Gender : {gender}
            <br />
            Email : {email}
            <br />
            Mobile : {mobile}
            <br />
            State : {state}
          </div>

        </div>
        <div className='col-md-4'></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default HookForm;