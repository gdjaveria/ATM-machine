#! usr/bin/env node
import inquirer from "inquirer"

let myBalance = 60000;
let myPin = 7294;

let pinAnswer = await inquirer.prompt([
    { name: "pin", type: "number", message: "enter your pin code."}]);

       if(pinAnswer.pin === myPin){
    console.log("Correct pin code !! ");

    let operationsAns = await inquirer.prompt([{ name: "operation",  type: "list", message: "Please select an option",
           choices: ["withdraw","check balance"]}])
        
       if( operationsAns.operation === "withdraw"){
    let withdrawAmount = await inquirer.prompt([{ name: "withdrawMethod", type: "list", message: "please select withdraw method",
          choices: ["enter your amount","cash"]}])

          if (withdrawAmount.withdrawMethod === "cash"){
    let cashAns = await inquirer.prompt([{ name: "fastcash", type: "list", message: "please select an amount",
           choices: [4000,20000,1000,4500,15500]}])
           
           if(cashAns.fastcash > myBalance){
            console.log("Your current balance is insufficent");
           }else{ 
            myBalance -= cashAns.fastcash;
            console.log(" withdraw a sucessfully!");
            console.log(" your remaining balance is:"+ myBalance);

           }
          }
           else if (withdrawAmount.withdrawMethod ==="enter your amount"){
            let enterAmountAns = await inquirer.prompt([{ name: "enteramount", type: "number", 
            message: "please enter your specific amount"}])

            if(enterAmountAns.enteramount > myBalance){
                console.log("your current balance is insufficient" + myBalance);
            } else {
                myBalance -= enterAmountAns.enteramount
                 console.log("withdraw successfully")
                 console.log(" your current balance is :" + myBalance);
           }
        }
    }
    else if (operationsAns.operation === "check balance"){
        console.log("your current balance is:"+ myBalance)
    }
   }else {
    console.log("Incorrect pin code !!");
}