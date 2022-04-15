// Question 1:
// Alert the user to choose from the following: 1. Deposit Money 2. Withdraw Money 
// Question 2:
// If the user chooses to Deposit Money, Ask the user “How much would you like to deposit?"
// Alert the user ". Your new balance is: [THE BALANCE]".
// If the user chooses to Withdraw Money, Ask the user "How much would you like to withdraw?"

// Alert the user ". Your new balance is: [THE BALANCE]"
// Question 3: 

// Create a running total for the Balance each time the user chooses to deposit or withdraw money 

// If there is a positive balance,  alert the user with message "You got monnneeeyy!!"
// If there is a negative balance, alert the user with the message "Low Funds",

var currentBalane = 525;


var ans = window.prompt("Do you want to deposit money or withdraw money?");

if (ans == "Deposit") {
    let num = window.prompt("How much?")
    balance = currentBalane + parseInt(num)
    alert("Your new balance is " + balance)

    if (balance >= 0){
        alert("You got moneyyyy!!!")
    }
    else {
        alert("Low funds")
    }
   
} 

else if (ans == "Withdraw") {
    let num = window.prompt("How much?")
    balance = currentBalane - parseInt(num) 
    alert("Your new balance is" + balance)
    if (balance >= 0){
        alert("You got moneyyyy!!!")
    }
    else {
        alert("Low funds")
    }
};