import React from 'react'
import './Amazon.css';

const Bulb = props => {
  return <div className={props.on ? "bulb on" : "bulb off"}>Bulb</div>
}

function Amazon(){
  return(
    <div className='main'>
    <h1 id="heading">Watch Details</h1>
    <div className="left watch"></div>
    <h3 className='leftw'>Rolex</h3>
    <h3 className='leftw'>$1219.99</h3>
    <div className="middle watch"></div>
    <h3 className='middlew'>Apple Watch Series 7</h3>
    <h3 className='middlew'>$359.99</h3>
    <div className="right watch"></div>
    <h3 className='rightw'>Samsung Smart Watch</h3>
    <h3 className='rightw'>$249.99</h3>
    </div>
  );
}
  export default Amazon; 
  