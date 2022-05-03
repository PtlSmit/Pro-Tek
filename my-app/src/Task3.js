import React, { Component } from "react";
import './Task4.css';


/* const Shoppingcart = (props) =>{
  
// const itemList = props.items.map((items,index) => (<li key={index}>{items}</li>));
  return <ul>
    { props.items.length>0 ? <span>We have {props.items.length} items in the cart </span>: <span>Your car it empty</span> }
     {props.items.map((items,index) => (<li key={index}>{items}</li>))}
  </ul>
} */
class EmpTable extends Component{

  constructor(props){
    super(props)
    this.state={'count':1,'on': this.props.on, 'trafficBtn' :'stop' }
}
};
const MainTable = () =>{
  return (
     <div>
         <table className='tableprop'>
            <thead>
        <tr>
           <th>
              Emp.ID
           </th>
           <th>
              Name
           </th>
        </tr>
        </thead>
           <tbody>
        <tr>
           <td>
              1
           </td>
           <td>
              Smit
           </td>
        </tr>
        <tr>
           <td>
              2
           </td>
           <td>
              Teju
           </td>
        </tr>
        </tbody>
        <tfoot>
        </tfoot>
     </table>
     </div>
  );
}
  function Task3() {
    return (
      <div>
     {/* <Shoppingcart items = {["Apple","Banana","Orange"]}/> */}
     <button onClick={this.onBtnClick}> Toggle </button>
     <MainTable />
      </div>
    );
  }
  
  export default Task3; 