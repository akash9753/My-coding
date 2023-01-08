import React, { Component } from 'react';

class HoverCounter extends Component {
    
    render() {
        const {count,incrementCount,name} = this.props
        return (
            <div>{name}
                <button onMouseOver={()=>incrementCount(100)}>Hover {count} count</button>
            </div>
        );
    }
}

export default HoverCounter;