let orderAmount = 450;
let isPremium = false;
let isRemote = true;

let deliveryFee = 0;

if (!isPremium) {
    if (orderAmount < 500) {
        deliveryFee = 50;
    }
}

let totalCost = orderAmount + deliveryFee;

let deliveryTime = 3;
if (isRemote) {
    deliveryTime += 2;
}

console.log("Total Cost:", totalCost);
console.log("Estimated Delivery Time:", deliveryTime, "days");