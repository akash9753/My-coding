import React, { useState } from "react";
import "./nativeHtmlForm.css";
const NativHtmlForm = () => {
  const [formData, setFormData] = useState({
    userName: "default username",
    email: "default email",
    occupation: "developer",
    gender: "male",
    languages: ["Python"],
  });

  const onChangeHandle = (e) => {
    console.log(e);
    let temp= {...formData}
    let temp1 = []
    if (e.target.name === "languages") {
        if(e.target.checked){ 
           temp.languages.push(e.target.value)
           console.log(`temp`,temp);
           setFormData(temp)
           console.log("if",formData);
        }else{
            temp.languages =  temp.languages.filter((l)=> l !== e.target.value)
           setFormData(temp)
           console.log("else",formData);
        }
        
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

    /* const onChangeHandle = (e) => {
     console.log(e);
  
     if (e.target.name === "languages") {
         let copy = {...formData}
         if(e.target.checked){
             copy.languages.push(e.target.value)
         }else{
             copy.languages =  copy.languages.filter((l)=> l !== e.target.value)
         }
         setFormData(copy)
     } else {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     }
   };  */

  const onSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      <h2>NativHtmlForm</h2>
      <div className="main">
        <div>
          <label htmlFor="userName">UserName</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={onChangeHandle}
            value={formData.userName}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={onChangeHandle}
            value={formData.email}
          />
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <select name="occupation" id="occupation" onChange={onChangeHandle} value={formData.occupation}>
            <option value="tester">Tester</option>
            <option value="developer">Developer</option>
            <option value="analyst">Analyst</option>
          </select>
        </div>

        <div>
          <label htmlFor="gender">Gender</label>

          <input
            type="radio"
            name="gender"
            id="male"
            onChange={onChangeHandle}
            value="male"
            checked={formData.gender === 'male'}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={onChangeHandle}
            checked={formData.gender === 'female'}
          />
          <label htmlFor="female">Female</label>

          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onChange={onChangeHandle}
            checked={formData.gender === 'other'}
          />
          <label htmlFor="other">Other</label>
        </div>

        <div>
          <label htmlFor="language">Languages</label>
          {console.log(`inisde return formData.languages`,formData.languages)}
          <input
            type="checkbox"
            id="javascript"
            value="Javascript"
            name="languages"
            onChange={onChangeHandle}
            checked={formData?.languages?.includes("Javascript")}
          />
          <label htmlFor="javascript">Javascript</label>

          <input
            type="checkbox"
            id="java"
            value="Java"
            name="languages"
            onChange={onChangeHandle}
            checked={formData?.languages?.includes("Java")}
          />
          <label htmlFor="java">Java</label>

          <input
            type="checkbox"
            id="python"
            value="Python"
            name="languages"
            onChange={onChangeHandle}
            checked={formData?.languages?.includes("Python")}
          />
          <label htmlFor="python">Python</label>
        </div>

        <button onClick={() => onSubmit()} type="submit">
          Submit
        </button>
      </div>
    </>
  );
};

export default NativHtmlForm;
