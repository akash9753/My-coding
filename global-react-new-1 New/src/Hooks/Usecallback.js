import React,{useCallback, useState} from 'react';
import Child from './Child';
const Usecallback = () => {
    const [counterOne, setCounterOne] = useState(0); 
    const [counterTwo, setCounterTwo] = useState(0); 

    const getItems=useCallback((num)=>{
        console.log(counterTwo+1,counterTwo-1);
        for (let i = 0; i < 1000; i++) {}
        console.log('getItems');
               return [counterTwo+num,counterTwo-num]
    },[counterTwo])

    // const getItems=()=>{
    //     console.log(counterTwo+1,counterTwo-1);
    //     for (let i = 0; i < 10000000000; i++) {}
    //     console.log('getItems');
    //            return [counterTwo+1,counterTwo-1]
    // }
    return (
        <div className='App'>
            <button style={{marginRight:4}}  className='btn btn-primary' onClick={()=>setCounterOne(counterOne+1)} >Counter One {counterOne}</button>
            <button style={{marginRight:4}}  className='btn btn-primary' onClick={()=>setCounterTwo(counterTwo+1)}>Counter Two {counterTwo}</button>
            <Child getItems={getItems}/>
        </div>
    );
};

export default Usecallback;