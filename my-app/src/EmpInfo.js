// import React from 'react';
import React, { Component } from 'react';
import AddEmp from './AddEmp';


/* const EmployeeTable=(props) =>{
    return (
        <>
        { props.employee.length > 0 ? <span>We have {props.employee.length} employees</span> : 
        <span>No Employees in the Table</span> }
        
        <table className='tableprop'>
           <tr><th>empid</th><th>empname</th></tr>
           {employee.map((item,Id) => (<tr>
           <td>{item['Name']}</td>
           </tr>))}
        </table>
    
        </>
    )
}; */
/*  const employee = [{
    Id: '1' ,
    Name: 'Smit',
    Company:'Protek'
},
{
    Id: '2' ,
    Name: 'Jeet',
    Company:'ABC'
},
{
    Id: '3' ,
    Name: 'Meet',
    Company:'XYZ'
}];  */

/* function EmpInfo(props) {

    return ( 
        <>
      <EmployeeTable employee={[{
                    Id: '1' ,
                    Name: 'Smit',
                    Company:'Protek'
                },
                {
                    Id: '2' ,
                    Name: 'Jeet',
                    Company:'ABC'
                },
                {
                    Id: '3' ,
                    Name: 'Meet',
                    Company:'XYZ'
                }]}/>
        </>
     );
}

export default EmpInfo;
 */

class EmpInfo extends React.Component {
    render() { 
        return ( 
            <>
        <table className='tableprop'>
           <tr><th>empname</th></tr>
           {this.props.employee.map((item) => (
           <tr>
           <td>{item}</td>
           </tr>))}
        </table>
            </>
         );
    }
}
 
export default EmpInfo;