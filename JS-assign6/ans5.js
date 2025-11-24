function step(name) {
return (cb) => setTimeout(() => {
console.log(name);
cb && cb();
}, 1000);
}


// Demonstrate callback hell (nested callbacks)
function pipelineWithCallbacks() {
console.log('\n--- Q5: Callback Hell (start) ---');
step('design')(() => {
step('build')(() => {
step('test')(() => {
step('deploy')(() => {
step('celebrate')(() => {
console.log('Callback pipeline finished');
});
});
});
});
});
}


// Cleaner version using async/await
function asyncStep(name) {
return new Promise((resolve) => setTimeout(() => {
console.log(name);
resolve();
}, 1000));
}


async function pipelineAsyncAwait() {
console.log('\n--- Q5: async/await pipeline (start) ---');
try {
await asyncStep('design');
await asyncStep('build');
await asyncStep('test');
await asyncStep('deploy');
await asyncStep('celebrate');
console.log('Async/await pipeline finished');
} catch (err) {
console.error('Pipeline error:', err.message);
}
}