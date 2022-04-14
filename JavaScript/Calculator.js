let userInput = prompt("Enter the Operator +, -, *, /");
let userInput1 = parseInt(prompt("Enter first Value"));
let userInput2 = parseInt(prompt("Enter Second Value"));
let x = myFunction(userInput1,userInput2);

 function myFunction(userInput1,userInput2){
    switch(userInput){
        case '+': 
              document.write("Your Result is :", userInput1 + userInput2);
            break;
        case '-':
                document.write("Your Result is :", userInput1 - userInput2);
            break;
        case '*':
                document.write("Your Result is :", userInput1 * userInput2);
            break;
        case '/':
                document.write("Your Result is :", userInput1 / userInput2);
            break;
        default:
            document.write("Result not found");
    }  
    return x;
 }
