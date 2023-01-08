import React from 'react';

const UserefEx2 = () => {
    let selectElement = (e)=>{
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerHTML);
        console.log(e.target.innerText);
        console.log(e.target.textContent);
        document.getElementById("color").style.color = "#ff0000";
    }
    return (
        <div>
            <div id='color' onClick={(e)=>{selectElement(e)}}><span>Useref</span></div>
        </div>
    );
};

export default UserefEx2;