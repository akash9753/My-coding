import React, { Component } from 'react';

class Employee extends Component {
    render() {
        return (
            <div>
                {/* <h1>Employee Detail</h1>
                <h2>Name : Akash</h2>
                <h2>Department : Sale</h2>
                <h2>Salary : 5000</h2> */}
                <h1 className={this.props.color}>Employee Detail</h1>
                <h2>Name : {this.props.name}</h2>
                <h2>Department : {this.props.dept}</h2>
                <h2>Salary : {this.props.salary}</h2>
            </div>
        );
    }
}

export default Employee;