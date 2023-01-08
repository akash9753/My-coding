// import React, {useState} from 'react';
// import Modal from './Modal';
// const Popup = () => {

//     const [show, setShow] = useState(false);

//     return (
//         <div className='container text-center'>
//             <button style={{position:"absolute", zIndex:1}} className='btn btn-primary' onClick={() =>setShow(true)}>Modal Popup</button>
//             <Modal show={show} onClose={()=> setShow(false)}>
//                 <h1>Hello World</h1>
//             </Modal>
//         </div>
//     );
// };

// export default Popup;

import React, { useState } from "react";
import Modal from "./Modal";
const Popup = () => {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className="text-center">
      <button
        style={{ position: "absolute", zIndex: 1 }}
        className="btn btn-primary"
        onClick={() => setShow(true)}
      >
        Modal Popup
      </button>
      <Modal show={show} onClose={() => setShow(false)}>
        <h1>Hello World</h1>
      </Modal>
    </div>
    </>
  );
};

export default Popup;
