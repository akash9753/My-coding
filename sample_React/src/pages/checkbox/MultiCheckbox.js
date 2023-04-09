import React, { useState } from "react";

const MultiCheckbox = () => {

    const [fruitsArray, setFruitsArray]=useState([]);

  const handleChange=(e)=>{
    const value = e.target.value;
    const checked = e.target.checked
    console.log(value, checked)
    if(checked){
       setFruitsArray([
        ...fruitsArray, value
       ])
    }else{
        setFruitsArray(fruitsArray.filter((item,index)=>(
           console.log(item , value)
        )))
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(fruitsArray)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Select Fruits: &nbsp;</label>

        <input type="checkbox" name="fruits" value="Apple" onChange={handleChange}/>
        <label htmlFor="">Apple</label>

        <input type="checkbox" name="fruits" value="Mango" onChange={handleChange}/>
        <label htmlFor="">Mango</label>

        <input type="checkbox" name="fruits" value="Banana" onChange={handleChange}/>
        <label htmlFor="">Banana</label>

        <input type="checkbox" name="fruits" value="Grapes" onChange={handleChange}/>
        <label htmlFor="">Grapes</label>
        <br></br>
        <input type="submit" value="Submit"/>
      </form>
    </>
  );
};

export default MultiCheckbox;
