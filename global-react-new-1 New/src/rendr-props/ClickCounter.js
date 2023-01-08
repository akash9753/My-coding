import React, { Component } from 'react';

class ClickCounter extends Component {
    
    render() {
        const {count,incrementCount,name} = this.props
        return (
            <div>{name}
                <button onClick={()=>incrementCount(10)}>Click {count} count</button>
            </div>
        );
    }
}

export default ClickCounter;