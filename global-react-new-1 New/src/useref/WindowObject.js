import React from 'react';

const WindowObject = () => {

    // let w = window;
    let wd = window.document;
    let l = window.location;
    return (
        <div>
            {console.log(wd)}
            {/* {alert('hello akash')} */}
            {console.log(window.innerWidth)}
            {console.log(window.innerHeight)}
            {console.log(l)}
        </div>
    );
};

export default WindowObject;