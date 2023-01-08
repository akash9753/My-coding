import React, { Component } from 'react';
import Dept from './Dept';
import Salary from './Salary';
class Employee extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"akash",
            workingDays:26,
            workingHours:8,
            chargePerHour:10,
            
        }
    }
    render() {
        return (
            <div>
                <h1>Employee Detail</h1>
                <h3>Emaployee Name: {this.state.name}</h3>
                <h3>Emaployee Working Day: {this.state.workingDays}</h3>
                <Dept name={this.state.name}
                workingDays={this.state.workingDays}
                workingHours={this.state.workingHours}
                />
                <Salary name={this.state.name}
                workingDays={this.state.workingDays}
                workingHours={this.state.workingHours}
                chargePerHour={this.state.chargePerHour}
                />
            </div>
        );
    }
}

export default Employee;