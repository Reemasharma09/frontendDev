let showTime = "evening"; 
let tickets = 4;
let isStudent = false;
let age = 65;

let basePrice = showTime === "morning" ? 120 : 180;

let total = basePrice * tickets;

let discount = 0;

if (isStudent) discount = 10;
else if (age > 60) discount = 20;

let discountedTotal = total - (total * discount / 100);

let finalAmount = discountedTotal;

if (tickets > 3) finalAmount += 50;

console.log("Base Price:", total);
console.log("Discounted Total:", discountedTotal);
console.log("Final Amount:", finalAmount);
