import React, {forwardRef} from 'react';

const InputBox = (props,ref) => {
    return (
        <div className='App'>
            <input type="text" ref={ref}/>
        </div>
    );
};

export default forwardRef(InputBox);