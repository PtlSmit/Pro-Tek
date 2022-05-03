import React, { Component } from 'react';

class ClassCompo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            // messsage: 'Welcome Visitor'
            count: 0;
        }
    }

    state = {  }
    changeMessage(){
        this.setState({
            messsage:'Thank you for Visiting'
        })
    }
    render() { 
        return ( 
            <>
         {/* <h1> hello {this.props.name} a.k.a {this.props.heroname}</h1> */}
            <h1>{this.state.messsage}</h1>
            <button onClick={() => this.changeMessage()}>Submit</button>
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