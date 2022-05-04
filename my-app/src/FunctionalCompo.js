import React, { Component } from 'react';

const Greet = (props) => {
    return (
        <>
        <h1> Hello {props.name[0]} <br/>
             Hello  {props.name[1]} <br/>
             Hello  {props.name[2]} <br/>
        </h1>
        </>
     )
  }
const name = ["Mark", "Taylor","Clark"];
function FunctionalCompo() {
    return ( 
    <>        
    {/* <Greet name="Mark" heroname = "Bat">
      <p>This is for Child</p>
   </Greet>
    <Greet name="Taylor" heroname = "SpiderMan"/>
    <Greet name="Clark" heroname = "SuperMan"/>  */}
    <Greet name = {["Mark", "Taylor","Clark"]}/>
    </>
     );
}

export default FunctionalCompo; 