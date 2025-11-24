let level = 10;
let performanceScore = 50;
let missionsCompleted = true;

let coins = (level * 50) + (performanceScore * 10);

if (missionsCompleted) coins *= 2;

let rank = coins > 1000 ? "Elite" : "Regular";

console.log("Coins Earned:", coins);
console.log("Rank:", rank);