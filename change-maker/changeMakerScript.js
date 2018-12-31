//User inputs.
let itemCost = prompt("What is the cost of the item? (Please do not include the dollar sign.)");
let userPayment = prompt("How much money did you give the cashier? (Please do not include the dollar sign.)");

//Variables for calculating the change.
let changeOwed = userPayment - itemCost;
let twenties = Math.floor(changeOwed / 20);
let twentiesMultiple = twenties * 20;
let tens = Math.floor((changeOwed - twentiesMultiple) / 10);
let tensMultiple = twentiesMultiple + (tens * 10);
let fives = Math.floor((changeOwed - tensMultiple) / 5);
let fivesMultiple = tensMultiple + (fives * 5);
let toonies = Math.floor((changeOwed - fivesMultiple) / 2);
let tooniesMultiple = fivesMultiple + (toonies * 2);
let loonies = Math.floor(changeOwed - tooniesMultiple);
let looniesMultiple = tooniesMultiple + loonies;
let quarters = Math.floor((changeOwed - looniesMultiple) / .25);
let quartersMultiple = looniesMultiple + (quarters * .25);
let dimes = Math.floor((changeOwed - quartersMultiple) / .10);
let dimesMultiple = quartersMultiple + (dimes * .10);
let nickels = Math.floor((changeOwed - dimesMultiple) / .05);
let nickelsMultiple = dimesMultiple + (nickels * .05);
let pennies = Math.round((changeOwed - nickelsMultiple) / .01);

//This alert indicates the change owed.
if(changeOwed > 0){
	alert("Your change is " + twenties + " twenty dollar bill(s),\n\ " + tens + " ten dollar bill(s),\n\ " + fives + " five dollar bill(s),\n\ " + toonies + " toonie(s),\n\ " + loonies + " loonie(s),\n\ " + quarters + " quarter(s),\n\ " + dimes + " dime(s),\n\ " + nickels + " nickel(s),\n\ and " + pennies + " pennies.");
}	

else{
	alert("No change for you!");
};

// These console.log messages were used for testing.
	// console.log("Your change is " + twenties + " twenty dollar bill(s),");
	// console.log(tens + " ten dollar bill(s),");
	// console.log(fives + " five dollar bill(s),");
	// console.log(toonies + " toonie(s),");
	// console.log(loonies + " loonie(s),");
	// console.log(quarters + " quarter(s),");
	// console.log(dimes + " dime(s),");
	// console.log(nickels + " nickel(s),");
	// console.log(" and " + pennies + " pennies.");
