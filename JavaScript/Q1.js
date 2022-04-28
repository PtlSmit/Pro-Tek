/* Q-1 Write a function that takes three numbers as arguments and returns the largest number. For example: getLargest( 4, 20, 40 ) re​turns 40.
Only if else allowed. Don’t use Math.max
 */
function largest(x){
    let num = 0;
    for (let i = 0; i < x.length; i++){
      if (x[i] >= num){
        num = x[i];
      }
    }
    return num;
  }
  let arr = [2,20,40];
  document.write(("Ans:1 is",largest(arr)));
  document.write('<br/>');
  document.write('<br/>');

 /* Q-2Write a function that takes a string and a character which is not an alphabet 
 and returns an array of all words that start with that character. Don't worry 
 about upper case or lower case character. For example: get_words( "I see 
 oranges in the orchard", "o") will return ["oranges","orchard"] get_words("Hi 
 my name is Henry") will return ["Hi", "Henry"]   */

 let str = ("I see oranges in the orchard");
 let remove = str.split(" ").filter (function(filterWords){
     if(/o/.test(filterWords)) 
     return filterWords;
 });
 document.write("Ans:2 is",remove); 
 document.write('<br/>');
 document.write('<br/>');

/* 
 Q-3  Write a function that takes two arguments. 
 i) array - input array 
 ii) n - number of items to remove from the end of the array. 
  
 Your function will check if array has atleast ‘n’ number of items. If not it 
 returns the same array. If it has enough items it removes those many items and 
 returns the smaller array after removing. 
  
 Example :-  removeItems ( [ 3,4,6,7,8,6] , 3 ) returns [ 3,4,6] */

 function removeItems(array3, n) 
{
if (array3.length > n) 
{
    array3.splice(n, (array3.length - n));
}
return array3;
}
const a3 = removeItems([3, 4, 6, 7, 8, 6], 3);
console.log(a3);
document.write('<br/>');
document.write('<br/>');

/* Q-4 Write a function that takes two strings, and returns the string which has 
more words in it? Remember not alphabets. Words. 
For example : largest(“This is the larger string in this case”, “I am another 
string”) will return “This is the larger string in this case” because it has 8 
words in it compared to 4.  */

let arr4 = [
  "This is the larger string in this case",
   "I am another string will return",
   "This is the larger string in this case” because it has 8 words in it compared to 4"
];
let strLength = 0;
let longest = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr4[i].length > strLength) {
    strLength = arr4[i].length;
    longest = arr4[i];
  }
  
}

console.log(longest);

/* Q-5. Write a function which takes an object as argument. It checks if object 
contains name property. If name property exists it adds ​hasName​ property 
in the object as true, otherwise adds ​hasName ​property as false. 
It should also remove name property from the object, and returns the new 
object.  */
//Ans-5
let info5 = new info();
function info() 
{
  this.getDetails = function () 
    {
        let details={name:"",age:"29"};
        if(details.name!="")
        {
            details.hasName=true;
        }
        else
        {
            details.hasName=false;
            delete details.name;
        }
        return details;
    }
}
console.log(info5.getDetails());
document.write('<br/>');
document.write('<br/>');
/* Q-6Create a paragraph with click event listener. On clicking the paragraph toggle 
the color between red and green depending on how many times it has been 
clicked. If number of clicks on the paragraph are multiple of 3 then make it 
red otherwise make it green.  */

function changeColor() {
  let x;
  if (x%3 == 0) {
    document.getElementById("para").style.color = 'red';
  } else {
    document.getElementById("para").style.color = 'green';
  }
}
document.write('<br/>');
document.write('<br/>');

/* Q-7 Write a program that prints the numbers from 10 to 60 including 10 and 60. 
But for multiples of three print “Multiple of 3” instead of the number and for the 
multiples of five print “Multiple of 5”. For numbers which are multiples of both three 
and five print “Both”. If it’s not multiple of 3 or 5 just print the number.  */
let z;
    for (z=10; z<=60; z++){
     if (z%15 == 0)   
            console.log("multiple of 3 & 5");
        else if ((z%3) == 0)
            console.log("multiple of 3");               
        else if ((z%5) == 0)                   
            console.log("Multiple of 5");               
        else      
            console.log(z);   
    }
/* 
Q-8 8. Write a function that takes an array of strings and removes the strings that 
contain a number in them and returns the new array ( not the reference ). 
 
Example:  removeNumberStrings ( [“ This”,”is” ,  “a3” ,  “samp7e”, “stri9ng”]) returns  
[“This”, “is”]  */


let arr8 = ["This","is","a3","samp7e","stri9ng"];
    /* let str8 = arr8.filter(stringOnly);
    console.log(stringOnly);
    function stringOnly(value) {
        if (typeof (value) == "") {
            return value;
        }
    } */
    arr8.splice(2,3,);
    //alert(arr8);
    document.write("Ans8 is:", arr8);