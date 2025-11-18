function submitOrder() {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (Math.random() < 0.5) return reject(new Error('Random network failure'));
resolve('Order submitted');
}, 500);
});
}
async function processOrder() {
console.log('\n--- Q8: processOrder start ---');
const maxAttempts = 3;
for (let attempt = 1; attempt <= maxAttempts; attempt++) {
try {
await submitOrder();
console.log(`Attempt ${attempt}: Success`);
return;
} catch (err) {
console.log(`Attempt ${attempt}: Failed`);
if (attempt === maxAttempts) throw new Error('Order could not be processed');
}
}
}
(async () => {
try {
await processOrder();
console.log('Order processed successfully');
} catch (err) {
console.error(err.message);
}
})();

