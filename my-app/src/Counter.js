import React, { Component } from 'react';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { age:10 }
    }
    
    render() { 
        return ( 
            <button onClick={increment}></button>
         );
    }
}
 
export default Counter;
