function boilWater() {
return new Promise((resolve, reject) => {
const delay = 1000 + Math.floor(Math.random() * 1000);
setTimeout(() => {
if (Math.random() < 0.15) return reject(new Error('Boiler malfunction'));
console.log('Water boiled');
resolve('boiled water');
}, delay);
});
}


function brewCoffee(boiledWater) {
return new Promise((resolve, reject) => {
const delay = 1000 + Math.floor(Math.random() * 1000);
setTimeout(() => {
if (Math.random() < 0.15) return reject(new Error('Grounds missing'));
console.log('Coffee brewed');
resolve('brewed coffee');
}, delay);
});
}


function pourCoffee(brewedCoffee) {
return new Promise((resolve, reject) => {
const delay = 1000 + Math.floor(Math.random() * 1000);
setTimeout(() => {
if (Math.random() < 0.1) return reject(new Error('Cup cracked'));
console.log('Coffee poured into cup');
resolve('coffee ready');
}, delay);
});
}


function makeCoffee() {
boilWater()
.then((water) => brewCoffee(water))
.then((coffee) => pourCoffee(coffee))
.then(() => console.log('Coffee ready for the team!'))
.catch((err) => console.error('Coffee process failed:', err.message));
}