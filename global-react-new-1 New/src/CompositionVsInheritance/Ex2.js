import React, { Component } from 'react';

class Ex2 extends Component {
    render() {
        return (
            <div>
                <h1>Composition vs Inheritance</h1>
                <Sidebar data={"sidebar props"}><h1>sidebar Data</h1>
                <h1>sidebar Data 1</h1>
                <h1>sidebar Data 2</h1>
                <h1>sidebar Data 3</h1>
                <h1>sidebar Data 4</h1>
                </Sidebar>
            </div>
        );
    }
}

function Sidebar(props){
    return <div>
    {props.children}
    </div>
}

export default Ex2;