function serverA() {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (Math.random() < 0.15) return reject(new Error('Server A failed'));
resolve('Server A deployment complete');
}, 2000);
});
}


function serverB() {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (Math.random() < 0.15) return reject(new Error('Server B failed'));
resolve('Server B deployment complete');
}, 3000);
});
}


Promise.all([serverA(), serverB()])
.then((results) => {
console.log('\n--- Q4: Promise.all ---');
console.log('Deployment completed for all servers');
console.log(results);
})
.catch((err) => console.error('Deployment error (all):', err.message));


Promise.race([serverA(), serverB()])
.then((fastest) => {
console.log('\n--- Q4: Promise.race ---');
console.log('Fastest response:', fastest);
})
.catch((err) => console.error('Deployment error (race):', err.message));