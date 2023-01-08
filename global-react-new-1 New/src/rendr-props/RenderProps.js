import React from 'react';
import Counter from './Counter';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
const RenderProps = () => {
    return (
        <div className='App'>
            {/* Sending as a props */}
            {/* <Counter render={(count,incrementCount)=><ClickCounter count={count} incrementCount={incrementCount}/>}/>
            <Counter render={(count,incrementCount)=><HoverCounter count={count} incrementCount={incrementCount}/>}/> */}
            {/* Sending as a children */}
            <Counter>
            {(count,incrementCount)=><HoverCounter name="Ram" count={count} incrementCount={incrementCount}/>}
            </Counter>
            <Counter>
            {(count,incrementCount)=><ClickCounter name="Shyam" count={count} incrementCount={incrementCount}/>}     
            </Counter> 
        </div>
    );
};

export default RenderProps;