let productName = " wireless headphones PRO ";
let cleaned = productName.trim().toLowerCase();
cleaned = cleaned
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ");
cleaned = cleaned.replace("Pro", "Pro Edition");
console.log(`Cleaned Title: ${cleaned}`);
console.log(`Length: ${cleaned.length}`);