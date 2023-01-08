import React, { useEffect } from 'react';
import { useRef } from 'react';

const Useref = () => {
    const divElement = useRef();
    const changeColor=()=>{
        // divElement.current.style.backgroundColor = "blue";
        if(divElement.current.innerText === "Activate"){
            divElement.current.innerText = "Deactivate";
            // divElement.current.style.backgroundColor = "red";
            divElement.current.style.color = "red";
        }else{
            divElement.current.innerText = "Activate";
            // divElement.current.style.backgroundColor = "green";
            divElement.current.style.color = "green";
        }
        
    }

    useEffect(()=>{
    console.log(divElement.current.innerText);
    },[]);
    return (
        <div>
        <div ref={divElement}>
            Activate
        </div>
        <button onClick={changeColor}>Change Status</button>
        </div>
    );
};

export default Useref;