function getBugs() {
return new Promise((resolve, reject) => {
setTimeout(() => {
const apiFailed = Math.random() < 0.2; 
if (apiFailed) return reject(new Error('Failed to fetch bugs from API'));
resolve(['UI glitch', 'API timeout', 'Login failure']);
}, 1000);
});
}
getBugs()
.then((bugs) => {
console.log('\n--- Q3: Bug list ---');
console.table(bugs.map((b, i) => ({ id: i + 1, bug: b })));
})
.catch((err) => console.error('Error fetching bugs:', err.message));