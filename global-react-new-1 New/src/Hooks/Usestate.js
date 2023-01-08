import React from "react";
import { useState } from "react";

const Usestate = () => {
  const [name, setName] = useState("akash");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(()=>{
      console.log("clicked")
      return 0;
  });
  const [names, setNames] = useState([]);
  const changeName = () => {
    console.log("clicked");
    return setFlag(!flag);
  };

  const Increment = () => {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  };
  const Decrement = () => {
    setSteps(steps - 1);
  };

  const addNames = (e)=>{
      e.preventDefault()
      setNames([...names, {id:names.length, name}])
      setName("")
  }

  return (
    <div className="App">
      <div>Hello, {flag ? name : ""}</div>
      <button className="btn btn-primary" onClick={changeName}>
        Click Me
      </button>
      <hr />

      <button className="btn btn-secondary" onClick={Increment}>
        +
      </button>
      <div>{steps}</div>
      <button className="btn btn-danger" onClick={Decrement}>
        -
      </button>
      <hr />
      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="add names"
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-light">Submit</button>
      </form>
      <hr></hr>
      {names.map((item)=>(
          <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default Usestate;

// we can not use useState with if condition and inside a function
