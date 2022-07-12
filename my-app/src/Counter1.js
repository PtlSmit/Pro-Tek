import { Component } from "react";
import {connect} from "react-redux";

class Counter1 extends Component {
   handleIncrement = () => {
      console.log(this.props,"props");
    };
   
    render() { 
        return ( 
            <>        
            <button onClick={this.handleIncrement}>Increment</button>
            <p>{this.props.count}</p>
            </>

         );
    }
}

const mapStateToProps = (store) => ({
    count:store.count,
})
export default connect(mapStateToProps)(Counter1);