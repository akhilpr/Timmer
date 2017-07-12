import React, { Component } from 'react';


class Timmer extends Component{
    constructor(props){
        super(props);
        this.state={
            timeCount:0,
        }
this.upadte = this.upadte.bind(this);
    }
    upadte(){
        this.setState({
            timeCount:new Date() - this.props.time
        });
    }
    componentDidMount(){
        this.timmers = setInterval(this.upadte, 1000)
        console.log(this.props.timeCount);
    }
    render(){
        let clock = Math.round(this.state.timeCount/10000)
        return(
            <div>
            <p className="timmer-p" >
            You are in this site for
            </p>
            <span className="timmer-span">{clock}</span>
            <p className="timmer-p">Seconds</p>
            </div>
        );
    }
}

export default Timmer;