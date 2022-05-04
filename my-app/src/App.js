import logo from './logo.svg';
import './Task4.css';
import Amazon from './Amazon';
import './Amazon.css';
import Bulb1 from './Amazon';
import Task4 from './Task4';
import SelfReact from './SelfReact'
import './SelfReact.css';
import Task3 from './Task3';
import EmpInfo from './EmpInfo';
import AddEmp from './AddEmp';
import FunctionalCompo from './FunctionalCompo';
import ClassCompo from './ClassCompo';
import React from 'react';


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

/* function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <SearchBar/>
      <SideBar/>
      <Content/>
      <Bulb on/>
      <Bulb off/>
      <Amazon/> }*/
    //  {/* <Task3/> */}
      // {/* <SelfReact/> */}
      // {/* <SelfReact name="mark"/> */}
      // {/* <Task4/> */}
      // <EmpInfo/>
      // {/* <AddEmp/> */}
      // {/* <FunctionalCompo/>
      // <ClassCompo/> */}
    // </div>
  // );
// }

// export default App;  */
class App extends React.Component{
  constructor(props){
    super(props);

    this.state = { employee:["SMit","Jeet","Meet"]};
  }
 AddEmpList = (item) =>{
    console.log(item,"Function Called")
    this.setState({employee: [...this.state.employee,item]})
 };
  render()
  {
    return(
      <div>
      <EmpInfo employee = {this.state.employee}/>
      <AddEmp addEmps={this.AddEmpList}/>
      </div>
    );
  }
}
export default App;