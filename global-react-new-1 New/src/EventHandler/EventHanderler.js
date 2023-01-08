import React, { useEffect, useState } from "react";

const EventHanderler = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("click me");
  const bgChange = () => {
    setBg("yellow");
    setName("ok great ");
  };
  const bgBack = () => {
    setBg("#8e44ad");
    setName("yo yo ");
  };

  const afterClick = () => {
    alert("hi");
  };
  useEffect(() => {
    const afterClick1 = () => {
      alert("hi");
    };

    document.getElementById("btn").addEventListener("click", afterClick1);

    return () => {};
  }, []);

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}>
          {name}
        </button>
      </div>

      <br />
      <hr />

      <p>react event listener</p>
      <button onClick={afterClick}>Click Me</button>

      <br />
      <hr />

      <p>javascript event listener</p>
      <button id="btn">Click Me</button>
    </>
  );
};

export default EventHanderler;
