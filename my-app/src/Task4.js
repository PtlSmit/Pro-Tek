import React, { Component } from "react";

class Bulb extends Component{

    constructor(props){
        super(props)
        this.state={'count':1,'on': this.props.on, 'trafficBtn' :'stop' }
    }
    onBtnClick = ()  => {
        const updatedState = this.state.count + 1;
        const updatedOnState = !this.state.on;
       this.setState({count : updatedState, on:updatedOnState},() =>{
           console.log("Updated Value", this.state.count)
       })
    }
    trafficLight = () =>{
        const {trafficBtn} = this.state;

        if(trafficBtn === 'stop'){
            this.setState({
                trafficBtn:'go'
            })
        }
        else{
            this.setState({
                trafficBtn:'stop'
            })
        }
    }
    render(){
        const {count,trafficBtn} = this.state;

        return (
        <>
        <div className={this.state.on ? "bulb on" : "bulb off"}>
           <button onClick={this.onBtnClick}> Toggle </button>
           <span> count === {count} </span>
        </div>
        
        <div className={this.state.trafficBtn === 'go' ? "bulb stop stop1" : "bulb go go1"}>   
        <button onClick={this.trafficLight}>{trafficBtn}</button>
        </div>

        <div className={this.state.trafficBtn === 'stop' ? "bulb stop" : "bulb go"}>   
        </div>
     </>
        )   
    }
}
function Task4(){
    return (
        <>
        <Bulb/>
        
        </>
    );
}
export default Task4;