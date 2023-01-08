import React, { Component } from 'react';

class counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incrementCount=(num)=>{
        this.setState({count:this.state.count+num})
    }
    render() {
        const {count} = this.state
        return (
            <div>
                {this.props.children(count,this.incrementCount)}
            </div>
        );
    }
}

export default counter;