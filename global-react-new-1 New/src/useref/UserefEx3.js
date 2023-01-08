import React, { useRef, useState } from 'react';

const UserefEx3 = () => {
    const [myNum, setMyNum] = useState(0)
    const input1 = useRef();
    const input2 = useRef()

    const getNumBox = () =>{
        console.log("Hello");
        console.log(input1.current);
        console.log(input1.current.value);
        input1.current.style.width = '400px'
    }

    const getTextBox = () =>{
        console.log("World");
        console.log(input2.current);
        console.log(input2.current.value);
    }

    return (
        <div>
            <h2>Useref</h2>
            <input value={myNum} type="number" ref={input1} style={{width:100}}
            onChange={(e) => setMyNum(e.target.value)}
            
            />

            <input value={myNum} type="text" ref={input2}
            onChange={(e) => setMyNum(e.target.value)}
            />
            <h3>Value is : {myNum}</h3>

            <button onClick={()=>getNumBox()}>Ruppes</button>
            <button onClick={()=>getTextBox()}>Dollars</button>
        </div>
    );
};

export default UserefEx3;