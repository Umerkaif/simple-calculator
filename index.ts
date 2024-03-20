#! /usr/bin/env node
import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter  your Second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

console.log(asnwer);

//conditional Statement
if(asnwer.operator === "Addition"){
    console.log(asnwer.firstNumber+asnwer.SecondNumber);
}
else if(asnwer.operator === "Subtraction"){
    console.log(asnwer.firstNumber-asnwer.SecondNumber);
}
else if(asnwer.operator === "Multiplication"){
    console.log(asnwer.firstNumber * asnwer.SecondNumber);
}
else if(asnwer.operator === "Division"){
    console.log(asnwer.firstNumber / asnwer.SecondNumber);
} 
else {  
    console.log("Please Select valid operator")
}

console.log("The end");