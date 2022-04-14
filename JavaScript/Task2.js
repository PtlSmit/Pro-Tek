//Q1 Make Functopm which print the value square of it key------
let obj = {};
let num1=3;
let num2=9;
function myFunction(num1, num2) {
    
    for (let i = num1; i <= num2; i++) {
        obj[i] = i*i;
    }
    return obj;
}
console.log(myFunction(num1,num2));
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');

//Q2 
var obj1= { name: "john", age: 20, gender: "male"};
function removeKey(obj1,age){
    delete obj1.age;
    return obj1;    
}
console.log(removeKey(obj1));

document.write('<br/>');
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');

// Q3
let num = [2,3,4,3,2,2,3,3,3];
let numObj={};
function countFunction(){
    if(num == 2){
        document.write("The count of 2 is:" , )
    }
}