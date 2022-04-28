/// Stack 
/* let letter= [];
let word = "racecar";
let rword ="";
for (let i=0; i<word.length;i++){
    letter.push(word[i]);
}
for (let i=0; i<word.length;i++){
    rword += letter.pop();
}
if (rword === word){
    console.log("It is correct")
}
/// Set
function mySet1(){
    let collection =[];
    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    } */
//}

// Binary Search tree
/* function findElement(arr,n,k){
    for (let i =0; i<n; i++){
        if(arr[i] == k){
            return i;
        }else if (arr[i]>k){
            return i ;
        }  
    }
    return n;
}
let arr = [1,3,5,6];
let n = arr.length;
let k =2;
document.write((findElement,n,k)); */

/* function binaryFindElement(arr){
    let start =0;
    let end = n-1;
    while (start <= end){
        let mid = Math.floor((start+end)/2);

        if(arr[mid] == K){
            return mid;
        }else if (arr[mid] < K){
            start = mid +1;
        }else {
            end = mid-1;
        }
        return end +1 ;
    }
} 
let arr = [ 1,2, 3, 5, 6 ];
let n = arr.length;
let K = 4;
document.write(binaryFindElement(arr, n, K) + "<br>"); */

/* function find_index(arr, n, K)
{
    // Lower and upper bounds
    let start = 0;
    let end = n - 1;
 
    // Traverse the search space
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
 
        // If K is found
        if (arr[mid] == K)
            return mid;
 
        else if (arr[mid] < K)
            start = mid + 1;
 
        else
            end = mid - 1;
    }
 
    // Return insert position
    return end + 1;
}
 
// Driver Code
    let arr = [ 1, 3, 5, 6 ];
    let n = arr.length;
    let K = 2;
    document.write(find_index(arr, n, K) + "<br>"); */

    /* function findBinaryElement(arr,n,k){
        let start = 0;
        let end = n-1;
       // let mid = Math.floor((start+end)/2);
        while(start<=end){
            let mid = Math.floor((start + end) / 2);
        }
        if(arr[mid] == k){
            return mid;
        }else if(arr[mid]<k){
            start = mid +1;
        }else {
            end = mid -1;
        }
        return end + 1;
    };
        let n = arr.length;
        let arr = [1,2,3,5,6]
        let k=4;
    document.write(findBinaryElement(arr,n,k)); */
    //document.write(find_index(arr, n, K) + "<br>"); */

    /* const isValidBST = (root) => {
        const helper = (node, min, max) => {
            if (!node) return true
            if (node.val <= min || node.val >= max) return false
            return helper(node.left, min, node.val) && helper(node.right, node.val, max)
        }
        return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }
    console.log(isValidBST()); */


    /* const maxDepth = function(root) {
        const calc = (node) => {
            if (!node) return 0
            return Math.max(1 + calc(node.left), 1 + 
            calc(node.right))
        }
        return calc(root)
    }; */

  /*  const findDepth = (root) => {
       const calculate = (node) =>{
           if (! node){
               return 0;
           }
           return Math.max(1+calculate(node.left), 1+ calculate(node.right))
       }
       return calculate(root);
   } */
   
   /* function binaryTree (root){
       if (!root)
       {
            return true;
       }
       function helper (p,q){
           if ((! p && q) || (p && !q) ||
           (p && q && p.val !== q.val));{
               return false;
           }
            if (p && q) return helper(p.left, q.right) && 
            helper(p.right, q.left);{
                return true;
            }
       }
   } */

   /*function myFunction(input){
    if (toString.call(input) === "[Object Array]");
        return false;
        return true;
        };
    document.write("Your answer is:", myFunction([1,2,3,4])); */

    /* const input= [1,-4,12,0,-3,29,-150];
    const output = input.filter ((x) => x>0).reduce((acc,curr) => 
    {
   
         return acc = acc + curr;
        },
    0)
        console.log(output);
 */
/* const input =  'George Raymond Richard Martin';
const output = input.split('').map(word => word[0]).join('');
console.log(output); */


/* var fullJustify = function(words, L) {
    let lines = [], index = 0;
   while(index < words.length) {
       let count = words[index].length;
       let last = index + 1;

       while(last < words.length) {
           if (words[last].length + count + 1 > L) break;
           count += words[last].length + 1;
           last++;
       }
       let line = "";
       let difference = last - index - 1;
       
       // if we're on the last line or the number of words in the line is 
       // 1, we left justify
       if (last === words.length || difference === 0) {
           for (let i = index; i < last; i++) {
               line += words[i] + " ";
           }
           
           line = line.substr(0, line.length - 1);
           for (let i = line.length; i < L; i++) {
               line += " ";
           }
       } else {
           // now we need to middle justify, which is putting equal amount 
           // of spaces between words
           let spaces = (L - count) / difference;
           let remainder = (L - count) % difference;
           for (let i = index; i < last; i++) {
               line += words[i];
               
               if( i < last - 1) {
                   let limit = spaces + ((i - index) < remainder ? 1 : 0)
                   for (let j = 0; j <= limit; j++) {
                       line += " ";
                   }
               }
           }
       }
       lines.push(line);
       index = last;
   }
   return lines
};
 */


// JavaScript program to document.write a given number in
// words. The program handles numbers
// from 0 to 9999

// A function that document.writes
// given number in words
/* function convert_to_words(num){

	// Get number of digits
	// in given number
	let l = num.length

	// Base cases
	if (l == 0){
		document.write("empty string","</br>")
		return
	}

	if (l > 6){
		document.write("Length more than 4 is not supported","</br>")
		return
	}

	// The first string is not used,
	// it is to make array indexing simple
	let single_digits = ["zero", "one", "two", "three",
					"four", "five", "six", "seven",
					"eight", "nine"]

	// The first string is not used,
	// it is to make array indexing simple
	let two_digits = ["", "ten", "eleven", "twelve",
				"thirteen", "fourteen", "fifteen",
				"sixteen", "seventeen", "eighteen",
				"nineteen"]

	// The first two string are not used,
	// they are to make array indexing simple
	let tens_multiple = ["", "", "twenty", "thirty", "forty",
					"fifty", "sixty", "seventy", "eighty",
					"ninety"]

	let tens_power = ["hundred", "thousand","Million","Billion"]

	// Used for debugging purpose only
	document.write(num, ":"," ")

	// For single digit number
	if (l == 1){
		document.write(single_digits[num.charCodeAt(0) - 48],"</br>")
		return
	}

	// Iterate while num is not '\0'
	let x = 0
	while (x < num.length){

		// Code path for first 2 digits
		if (l >= 3){
			if (num.charCodeAt(x) - 48 != 0){
				document.write(single_digits[num.charCodeAt(x) - 48]," ")
				document.write(tens_power[l - 3]," ")
				// here len can be 3 or 4
			}

			l -= 1
		}

		// Code path for last 2 digits
		else{

			// Need to explicitly handle
			// 10-19. Sum of the two digits
			// is used as index of "two_digits"
			// array of strings
			if (num.charCodeAt(x) - 48 == 1){
				sum = (num.charCodeAt(x) - 48 + num.charCodeAt(x+1) - 48)
				document.write(two_digits[sum],"</br>")
				return
			}

			// Need to explicitly handle 20
			else if (num.charCodeAt(x) - 48 == 2 &&
				num.charCodeAt(x + 1) - 48 == 0){
				document.write("twenty","</br>")
				return
			}

			// Rest of the two digit
			// numbers i.e., 21 to 99
			else{
				i = num.charCodeAt(x) - 48
				if(i > 0)
					document.write(tens_multiple[i], end=" ")
				else
					document.write("", end="")
				x += 1
				if(num.charCodeAt(x) - 48 != 0)
					document.write(single_digits[num.charCodeAt(x) - 48],"</br>")
			}
		}
		x += 1
	}

}

// Driver Code
convert_to_words("1234567") // Four Digits
convert_to_words("523") // Three Digits
convert_to_words("89") // Two Digits
convert_to_words("8") // One Digits */

// This code is contributed by shinjanpatra




/* const Foo = function(a) {
    function bar() {
      return a;
    }
    
    this.baz = function() {
      return a;
    };
    bar();
  };
  
  Foo.prototype = {
    biz() {
      return a;
    },
  };
  
  const f = new Foo(7);
  
  f.bar(); // ? is not a function // error
  f.baz(); // ? 7
  f.biz(); // ? function */
  
  //---------------------------------------
  
  /*
  console.log(isPalindrome("racecar")) // true
  console.log(isPalindrome("dog"))     // false
  */
  
  // madam
  
  /* const getReverseStr = (str) => {
    let reverse_str = "";
    // start: 2, end: 0
    for (let i = str.length - 1; i <=0;i--) {
      reverse_str += str[i];
    }// will return same string
    return reverse_str;
  }
  
  const isPalindrome = (str) => {
    let reverse_str = getReverseStr(str);
    if (str === reverse_str) return true
    else return false
  }
  
  const result = isPalindrome("asdfdsa")
  console.log(result) // true
  
  const res1 = isPalindrome("sdjkfnsdf");
  console.log(res1) // false */
  
  //"dog"
 /*  let text = `ABCDEFGHIJKL
  MNOPQRSTUVWXYZB`;
  /* let text1 = "5";
  let charString = text.charAt(2);
  let charCode = text.charCodeAt(0);
  let pa1 = text1.padStart(4,"x");
  console.log(charString); */
  //console.log(charCode);
//   console.log(pa1);
/* let text1 = text.search("b");
let text2 = text.indexOf("B");
let text3 = text.lastIndexOf("B");
let text4 = text.includes("A",0);
let text5 = text.startsWith("A"),
text6 = text.endsWith("B");
let text7 = `ABCDEFGHIJKLMNOPQRSTUVWXYZ ${text1}, ${text2} ${text6}`;
console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(text5);
console.log(text6);
console.log(text7); */ 

/* let x = Number.MAX_SAFE_INTEGER;
let u = Number.MAX_VALUE;
let v = Number.MIN_VALUE;
let y = parseInt(x);
//console.log(y);
let z = x+y;
console.log(u);
console.log(v);
console.log(z);
 */

/* let arr1 = ["BMW","Honda", "Audi"];
console.log(arr1);
arr1[0] = "Toyota";
let stelement = arr1[0];
let tyarr1 = typeof arr1;
console.log(tyarr1);
let arr1Sort = arr1.sort();
console.log(arr1Sort);
console.log(stelement);
arr1.push("BMW");
console.log(arr1);
arr1[7] ="Hyundai";
let arr1Length =arr1.length;
console.log(arr1Length);
const points =[40];
const point = new Array (40);
console.log(points);
console.log(point);
let arr2 = Array.isArray(arr1);
console.log(arr2); */

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
/* let strFruits = fruits.toString();
console.log(strFruits);
let joinFruits = fruits.join("*");
console.log(joinFruits);
let popFruits = fruits.pop();
console.log(popFruits);
let pushFruits = fruits.push("Mango");
console.log(fruits);
let shiftFruits = fruits.shift();
console.log(fruits); */
/* let conFruits = fruits.concat("Kiwi");
console.log(conFruits); */
/* let spliceFruits = fruits.splice(2,1,"Chiku");
console.log(fruits); */
/* let sliceFruits = conFruits.slice(1,2);
console.log(sliceFruits);
 */
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let srtFruits = fruits.sort();
console.log(srtFruits.reverse()); */
//const points = [40, 100, 1, 5, 25, 10];
/* let srtPoints = points.sort(function(a,b){return -a+b});
console.log(srtPoints);
console.log(srtPoints[0],srtPoints[srtPoints.length-1]); */
/* function myFunction(){
    let Max = 0;
    let Min = Infinity;
    for (let i = 0; i<=points.length-1;i++){
        if(points[i]>=Max){
            Max = points[i];
        }else if(Min<=points[i]){
            Min = points[i];
            return Min;
        }
    }
    return Max;
    
}
console.log(myFunction(points)); */
/* let points = [40, 100, 1, 5, 25, 10];
points.forEach(myFunction);

let mapPoints = points.map(myFunction);

function myFunction(value){
    return value *2;
}
console.log(mapPoints);

let filPoints = points.filter(FilFunction);
function FilFunction(value){
    const car = "BMW";
    return value >= 40;
}
console.log(filPoints);
const car = "Audi";
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
console.log(f);
const d = new Date("2015-04-12");
console.log(d); */

/* const points = new Set([40, 100, 1, 5, 25, 10]);
points.add(55);
points.delete(10);
console.log(points);
let y=points.values();
console.log(y);
console.log(points[0].values());
console.log(y.length);

const person = new Map([
    ["SMit", 29],
    ["teju", 25],
    ["khushi", 37]
]);
let person1 = person.get();
console.log(person1); */
/* 
const x = 4;
y = 2;
const z = x +y;
console.log(z);
const y; */

/* let fullName= function(){
    return this.firtName + " " + this.lastName;
}
const person1 = {
    firtName: "SMit",
    lastName: "Patel",
}
const person2 ={
    firtName: "Teju",
    lastName: "Patel",
}
let Person1 = fullName.call(person1);
let Person2 = fullName.call(person2)
console.log(Person1);
console.log(Person2);

let family = Person1.concat(Person2);
console.log(family);
 */

/* class Car{
    constructor(name,year){
        this.name = name,
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}
let myCar = new Car("Ford",2014);
console.log("My Car is" + " "+ myCar.age() + " " + "Years old."); */

/* const person = {
    name: "John", 
    age: 30,
    city: "New York",
    language : "",
    /**
     * @param {string} lang
     */
   /*  set lang(lang){
        this.language = lang;
    }
  };
  person.lang = "En";
  console.log("Hello my name is" +" " + person.name + " " + "and i am" + " " + person.age + " " + "old.");
   */ 

 /*  const obj = { counter : 0};
  Object.defineProperty (obj,"reset",{
    get : function () { this.counter = 0;}
  });
  Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
  Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
  });
  obj.increment;
  
  console.log(obj.counter);
  obj.add = 2;
  console.log(obj.counter); */

  /* function Person(fName,lName,age){
      this.firstName = fName;
      this.lastName = lName;
      this.age = age;
  }
const mySister = new Person("Khushi", "Patel", 38);
const myMother = new Person("Ilaben", "Patel", 58,);
const myWife = new Person ("Teju","Patel",25);
mySister.name = function(){
  return  this.firstName + " " + this.lastName;
};

"My father is " + mySister.name(); 
 */
/* function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

Person.prototype.nationality;

console.log(myMother); */

/* const myMap = new Map([
   [],
   [ {lname: "Patel"}]
]);
console.log(myMap); */
//function myFunction(){} // Function Declaration
// (funtion (){})(); // self invoke function expression
// const x = (a) => {} // Function expression stored in variable

/* function myFunction(a,b){
    return arguments.length;
}
console.log(myFunction(3,4,2));
let x =  */
/* let arr=[1,2,3];
const sum = arr.map((x) => x*x);
console.log(sum);

const sum1 = (x,y) =>{
    return x+y;
}
console.log(sum1(3,4)) */



function myFunction(){
    return this;
}
let x = myFunction();
console.log(x);