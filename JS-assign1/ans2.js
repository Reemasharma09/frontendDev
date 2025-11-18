let accountType = "savings"; 
let amount = 120000;
let years = 3;

let rate = 0;

if (accountType === "savings") rate = 4;
else if (accountType === "fd") rate = 6.5;

if (amount > 100000) rate += 1;

let total = amount * Math.pow((1 + rate / 100), years);

console.log("Final Balance:", total.toFixed(2));