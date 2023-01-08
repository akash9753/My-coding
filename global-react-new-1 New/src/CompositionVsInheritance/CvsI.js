import React, { Component } from 'react';
import Employee from './Employee';

class CvsI extends Component {
    render() {
        return (
            <div>
                <Employee color="red" name="akash" dept="sale" salary={6000}/>
                <Employee color="green" name="pradeep" dept="marketing" salary={7000}/>
                <Employee color="blue" name="anil" dept="transport" salary={8000}/>
            </div>
        );
    }
}

export default CvsI;