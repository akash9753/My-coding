import React, {useRef} from 'react';
import InputBox from './InputBox';
import 'bootstrap/dist/css/bootstrap.min.css';
const ForwardRef = () => {
    const inputRef = useRef(null)
    function updateInput(){
        inputRef.current.value ="1000"
        inputRef.current.style.color ="red"
        inputRef.current.focus() 
    }
    return (
        <div className='App'>
            <h1>forwardRef in React</h1>
            <InputBox ref={inputRef}/>
            <button className='btn btn-primary' onClick={updateInput}>Update InputBox</button>
        </div>
    );
};

export default ForwardRef;