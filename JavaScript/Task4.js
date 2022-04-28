//Q1 Array 1st square then multipy the item and get 1 product
const input = [ 1, 2, 3, 4, 5 ];
const output =[];
const square = input.map((x) => x * x).reduce((acc,curr) => {
    return acc = acc * curr;
     },
1);
console.log(square);


//Q2 Vowel Strings
const arry2 = function (vowel) {
    return vowel.filter(it => it.includes("a") || it.includes("e") || it.includes("i") || it.includes("o") || 
    it.includes("u"));
};
let vowel = ["Nike","Adida", "Puma", "Sneakers", "Reebok", "Gym"];
console.log(arry2(vowel));



//Q3 Return even number array ] 
let aary3 = function (numbers) {
    return numbers.filter(it => it.map(subAr => subAr%2).reduce((res,remainder) => remainder+res,0)==0);};
let numbers = [ [3,46,7,8], [4,6,8,10], [6,7,8,8], [24,6]] ;
console.log(aary3(numbers))


//Q4 Return array with key
const arry4 =[{name: "john"},{name: "bob"},{name: "mary"},{name: "doe"}];
const objOutput = arry4.map((x) => x.name);
console.log(objOutput);


//Q5 Verify the array odd or even
const arry5 = [ 1,3,5,7 ];
const output5 = arry5.reduce((accr1,curr1) => {
    accr1 = accr1 + curr1;
    return accr1 %2 ==0;
},
0);
console.log(output5);

//Q6
/* const arry6 = new Map();
function removeDuplicate(){
    for(let i= 0; i<nums.length; i++){
        if()
    }
} */
let a = [1,2,3,4,3,2,1];
const lonelyInteger = function (a) {
    return a[i]
};

document.write(lonelyInteger(a));



/* const arry2 = function (vowel) {
    return vowel.filter(it => it.includes("a") || it.includes("e") || it.includes("i") || it.includes("o") || 
    it.includes("u"));
    let vowel = ["Nike","Adida", "Puma", "Sneakers", "Reebok", "Gym"];
console.log(arry2(vowel));

}; */