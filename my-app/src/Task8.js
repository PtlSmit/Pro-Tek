import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getPostByItemFunc,getPostsCategoryFunc} from './index'

class Task8 extends Component {
    
      
    render() { 
        console.log(this.props);
    return (
      <div>
        <button onClick={() => {
          this.props.getPostById(1);
        }}>By Id</button>
        <button onClick={() => {
          this.props.getPostBulk();
        }}>In bulk</button>
      </div>
    );
    }
}
const mapDispatchToProps = dispatch => {
    return {
      getPostByItem: getPostByItemFunc(dispatch),
      getPostCategory: getPostsCategoryFunc(dispatch)
    }
  };
  const mapStateToProps = state => {
    return {
      state
    };
  }
 
export default connect(mapStateToProps,mapDispatchToProps) (Task8) ;