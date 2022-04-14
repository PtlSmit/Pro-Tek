//Q1----Largest Integer Print
let x= 20
let y= 30
if(x>=y){
    document.write("The largest Number is X=20");
 }else{
     document.write("The Largest Number is Y=30");
 }
 document.write('<br/>');
 document.write('<br/>');
 document.write('<br/>');
 document.write('<br/>');

//Q2---- Print Grade
let Percentage="Enter your percentage"
let score=prompt(Percentage)
if(score>=80 && score<=100){
    document.write("Grade A")
}else if(score<80 && score>=45){
    document.write("Grade D")
}else if(score>=25 && score<45){
    document.write("Grade E")
}else if(score<25 && score>=0){
    document.write("Grade F")
}else{
    document.write('Enter Valid Input')
}
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');
document.write('<br/>'); 

//Q3---- Print Age
let age=91
if (age<21 && age>=0){
    document.write("Illegal to drink")
} else if(age>=21 && age<=90){
    document.write("Legal Age")
}else if(age>90 && age<=500){
    document.write("\"Too old to drink")
}else{
    document.write("Enter Valid Input")
}

document.write('<br/>');
document.write('<br/>');
document.write('<br/>');
document.write('<br/>');

//Q4 --- Print FizzBuzz
for(let i = 1; i<=100; i++){
    if(i%3 == 0){
        document.write("Fizz");
    }else if(i%5 == 0){
        document.write("Buzz");
    }
    else if(i%3 && i%5 == 0){
        document.write("FizzBuzz")
    }
    else{
        document.write(i)
    }
}