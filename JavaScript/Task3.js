//Q1 -- Reverse String
let newString="";
function rvString(str){
    for(let j=str.length-1; j>=0; j--){
     //   debugger;
        newString += str[j];
    }
    return newString;
}
console.log(rvString("Hello world !"))

//Q2 -- Sum of String
function sum_digits_from_string(str) {
    var sum = 0;
  
    for (var i = 0; i < str.length; i++)
    {
  
      if (/[0-9]/.test(str[i])) sum += parseInt(str[i])
    }
    return sum;
  }
  
  console.log(sum_digits_from_string("4356")) 

  // Q3 --- Remove last character of string
  
function removeChar(a){
  let b="";
  for(let k=0;k<=a.length-2;k++){
          b +=a[k];
  }
  return b;
}
console.log(removeChar("world"));

// Q4 --- sum of digit

function sumTo(n)
{
    let sum = 0;
    for (let l = 1; l <= n; l++)
    {
      sum += l;
    }
    return sum;
  }
  console.log(sumTo(4));

  // Q5 ---
function print2largest(arr, arr_size)
{
    let i, first, second;
    if (arr_size < 2)
    {
        document.write("Invalid Input");
         return;
    }
    arr.sort();
    for (i = arr_size - 2; i >= 0; i--)
    {
        if (arr[i] != arr[arr_size - 1])
        {
            document.write("The second largest element is: " + arr[i]);
            return;
        }
    }
    document.write("There is no second largest element");
    document.write('<br/>');
}
let arr= [ 21, 32, 18, 10, 30, 20 ];
let n = arr.length;
print2largest(arr, n);

//Q-6
function isVowel(ch)
{
    ch = ch.toUpperCase();
    return ch == "A" || ch == "E" || ch == "I" || ch == "0" || ch == "U"

}
function countVowels(str)
{
    var count = 0;
    for (var i = 0; i < str.length; i++)
    if (isVowel(str[i]))
    ++count;
    return count;
}
/*var str = "John Doe";
document.write(countVowels(str));
document.write('<br/>');
//white_check_mark
eyes
raised_hands

*/

///
