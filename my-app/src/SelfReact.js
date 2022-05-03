import React from "react";
import { ReactDOM } from "react";
import './SelfReact.css';

/* const MainTable = () =>{
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
            <tr>
               <td> Total 2 empls</td>
               <td> Husband and Wife</td>
            </tr>
         </tfoot>
      </table>
      </div>
   );
}
let x = 5;
function Practice() {
   
   return ( 
      <div>
       {x>0 ? <strong> Employees Table</strong> : <strong> Good Bye !</strong>}
      </div>
   );
} */
const Greet = (props) =>{
   return (
      <>
      <h1> Hello {props.name} a.k.a {props.heroname}</h1>
      {props.children}
      </>
   );
}
function SelfReact() {
   return ( 
   <>
   {/* <Practice />
   <MainTable /> */}
   

   </>
   );
}

export default SelfReact;