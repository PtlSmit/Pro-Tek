import React, { Component } from 'react';

class ClassCompo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            // messsage: 'Welcome Visitor'
            count: 0
        }
    }

    state = {  }
    increment(){
        /* this.setState({
            count : this.state.count +1
        },() => {
            console.log("CallBack Value:",this.state.count )
        }) */
        this.setState((prevState) => ({
            count : prevState.count + 1
        }));
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() { 
        return ( 
            <>
            <h1>Count - {this.state.count}</h1>
            <button onClick={() => this.incrementFive()}>Increment</button>
            </>
         );
    }
}

function classCompo(){
    return(
        <>        
        {/* <ClassCompo name="Mark" heroname = "Bat"/>
        <ClassCompo name="Taylor" heroname = "SpiderMan"/>
        <ClassCompo name="Clark" heroname = "SuperMan"/> */}
        <ClassCompo/>
        </>
    );
}
export default classCompo;