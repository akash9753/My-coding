import React, { Component } from 'react';

class Ex1 extends Component {
    render() {
        return (
            <div>
                <h1>Composition vs Inheritance</h1>
                <Sidebar data={"sidebar props"}><h1>sidebar Data</h1></Sidebar>
            </div>
        );
    }
}

function Sidebar(props){
    return <div>
    {props.data}
    </div>
}

export default Ex1;