import React, { useState } from 'react';

const Controlled = () => {
    const [input, setInput] = useState();

    const submitForm=(event)=>{
        event.preventDefault();
        console.log(input);
    }
    return (
        <div className='App'>
            <h1>Controlled Component </h1>
            <form onSubmit={(event)=>submitForm(event)}>
                <input type="text" onChange={(e)=>setInput(e.target.value)} /><br/>
                <button>Submit</button>
            </form>
        </div>
    );
};


export default Controlled;