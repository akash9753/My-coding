import React from 'react';

const Salary = (props) => {
    return (
        <div>
            <h1>Salary Detail</h1>
            <h3>Emaployee Name: {props.name}</h3>
            <h3>Emaployee Salary: {props.workingDays * props.workingHours * props.chargePerHour}</h3>
        </div>
    );
};

export default Salary;