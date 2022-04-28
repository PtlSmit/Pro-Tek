import React from "react";
import { ReactDOM } from "react";

function Header(){
    return (
    <div>
    <input/>
    <div>
    <a>Best Sellers </a>
    <a>Amazon Basics </a>
    <a>Customer Service </a>
    <a>New Releases </a>
    <a>Personal Shopper </a>
    <a>Today's Deal </a>
    <a>Prime </a>
    <a>Amazon Prime </a>
    <a>Music </a>
    <a>Books </a>
    <a>Registry </a>
    </div>
    </div>
    );
  }
  function SideBar(){
    return (
     <p> Eligible Category</p>
        );
  }
  function SearchBar(){
    return (
     <div>
     <input/>
      <button> Search </button>
      </div> 
      
        );
  }
  function Content(){
    return(
      <div>
      <a> Ironman Classic 30
       Full-Size 38mm Watch </a>
      <a> Men's Expedition Scout 40 Watch </a>
      </div>
    );
  }
  const Bulb = props => {
    return <div className={props.on ? "bulb on" : "bulb off"}>Bulb</div>
  }
  
  function Task3() {
    return (
      <div className="App">
        <Header></Header>
        <SearchBar/>
        <SideBar/>
        <Content/>
        <Bulb on/>
        <Bulb off/>
        <Amazon/>
      </div>
    );
  }
  
  export default App; 