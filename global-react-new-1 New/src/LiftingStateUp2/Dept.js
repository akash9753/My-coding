import React from 'react';

const Dept = (props) => {
    return (
        <div>
            <h1>Department Detail</h1>
            <h3>Emaployee Name: {props.name}</h3>
            <h3>Emaployee Working Day: {props.workingDays}</h3>
            <h3>Emaployee Working Hours: {props.workingHours}</h3>
        </div>
    );
};

export default Dept;