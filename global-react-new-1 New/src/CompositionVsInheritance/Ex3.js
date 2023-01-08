import React, { Component } from 'react';

class Ex3 extends Component {
    render() {
        return (
            <div>
                <h1>Composition vs Inheritance</h1>
                <Sidebar>
                <Sidebar1/>
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
function Sidebar1(){
    return <div>
    <h1>sidebar Data 1</h1>
    <h1>sidebar Data 2</h1>
    <h1>sidebar Data 3</h1>
    <h1>sidebar Data 4</h1>
    </div>
}

export default Ex3;