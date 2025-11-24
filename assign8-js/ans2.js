const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150,
};
function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Item not found: ${item}`);
            }
            return menu[item];
        });
        const total = prices.reduce((sum, p) => sum + p, 0);
        return `Total bill: ₹${total}`;
    } catch (error) {
        return `Order Error: ${error.message}`;
    }
console.log(calculateBill(["pizza", "burger"]));
console.log(calculateBill(["pizza", "icecream"]));
}