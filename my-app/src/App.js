import logo from './logo.svg';
import './App.css';
import Amazon from './Amazon';
import './Amazon.css';
import Bulb1 from './Amazon';
import Task3 from './Task3';
import SelfReact from './SelfReact'
import '/SelfReact.css';



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

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <SearchBar/>
      <SideBar/>
      <Content/>
      <Bulb on/>
      <Bulb off/>
      <Amazon/> 
      <Task3/>*/}
      <SelfReact/>
    </div>
  );
}

export default App; 
