import React, { useState } from 'react';
import { useMemo } from 'react';

const Usememo = (props) => {
    const [counterOne, setCounterOne] = useState(0); 
    const [counterTwo, setCounterTwo] = useState(0); 

    const IncrementOne=()=>{
        setCounterOne(counterOne+1)
    }
    const IncrementTwo=()=>{
        setCounterTwo(counterTwo + 1)
    }
    const isEven = useMemo(()=>{
        console.warn(".....");
        let i=0;
        while(i<2000000000) i++;
        return counterOne%2===0
    },[counterOne])
    // const isEven=()=>{
    //     console.warn(".....");
    //     let i=0;
    //     while(i<2000000000) i++;
    //     return counterOne%2===0
    // }
    

    return (
        <div className='App'>
            <button style={{marginRight:4}}  className='btn btn-primary' onClick={IncrementOne}>Counter One {counterOne}</button>
            <span>{isEven?"Even":"odd"}</span>
            <button style={{marginRight:4}}  className='btn btn-primary'  onClick={IncrementTwo}>Counter Two {counterTwo}</button>
        </div>
    );
};

export default Usememo;