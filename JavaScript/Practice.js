const number =[1,2,3,4,5];
const output = number.reduce(function(sum,crr){
     return sum = sum + crr; 
},
0);
console.log(output);

//  const input = [ 1, 2, 3, 4, 5 ]; Square of it
const input = [ 1, 2, 3, 4, 5 ];
const Square = input.map((x)=> x * x);
console.log(Square);

//  const input = [ 1, -4, 12, 0, -3, 29, -150]; Sum of positive number

const input1 = [ 1, -4, 12, 0, -3, 29, -150];

const posSum = input1.filter((x)=> x>0).reduce(function(result,item){
    return result+item;
}, 0);
console.log(posSum);

// const input = 'George Raymond Richard Martin'; print 1st letter of each word and make "GRRM"
const input2 = 'George Raymond Richard Martin';

const word = input2.split(' ').map(word => word[0]).join('');
//const word = input2.split(' ').map(word => word[0]).join('');
console.log(word)