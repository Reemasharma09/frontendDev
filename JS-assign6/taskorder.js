console.log('\n--- Q2: Task Order Demo ---');
console.log('Start');


setTimeout(() => {
console.log('macrotask: setTimeout callback');
}, 0);


Promise.resolve().then(() => console.log('microtask: resolved Promise.then'));


console.log('Synchronous log');
console.log('End');