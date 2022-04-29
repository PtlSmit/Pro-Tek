import React from "react";


const Shoppingcart = (props) =>{
  
// const itemList = props.items.map((items,index) => (<li key={index}>{items}</li>));
  return <ul>
    { props.items.length>0 ? <span>We have {props.items.length} items in the cart </span>: <span>Your car it empty</span> }
     {props.items.map((items,index) => (<li key={index}>{items}</li>))}
  </ul>
}
  
  function Task3() {
    return (
      <div>
       <Shoppingcart items = {["Apple","Banana","Orange"]}/>
       
      </div>
    );
  }
  
  export default Task3; 