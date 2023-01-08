import React from 'react';

const Jsx = () => {
    const greeting = "welcome to jsx"
    const link = "https://reactjs.org/docs/getting-started.html"
    return (
        <div className='App'>
            {/* Writing simple jsx */}
            <h1>welcome to jsx</h1>
            {/* declaring varibale with jsx */}
            <h2>{greeting}</h2>
            {/* writing attribute with jsx */}
            <a href="https://reactjs.org/docs/getting-started.html">React org</a>
            <a href={link}>React org</a>
            <h6>all the attribute in react js are camel case</h6>
        </div>
    );
};

export default Jsx;