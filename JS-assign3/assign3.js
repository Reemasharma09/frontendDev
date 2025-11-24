const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let tx of transactions) {
    try {
        if (tx === null) {
            throw new Error("Null transaction detected");
        }
        if (!tx.id || tx.amount === undefined) {
            throw new Error("Missing id or amount");
        }
        if (tx.amount < 0) {
            throw new Error("Negative amount not allowed");
        }

        valid.push(tx);

    } catch (err) {
        invalid.push({ transaction: tx, error: err.message });
    }
}

console.log("VALID TRANSACTIONS:", valid);
console.log("INVALID TRANSACTIONS:", invalid);
console.log(`
Successful: ${valid.length}
Failed: ${invalid.length}
`);