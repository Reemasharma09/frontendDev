async function fetchProductsAndLog() {
console.log(`Product: ${p.title}`);
console.log(`Price: $${p.price}`);
console.log(`Image: ${p.image}\n`);
});
if (typeof document !== 'undefined') {
const container = document.createElement('div');
container.id = 'product-cards';
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(220px, 1fr))';
container.style.gap = '12px';
container.style.padding = '12px';


products.forEach((p) => {
const card = document.createElement('div');
card.style.border = '1px solid #ddd';
card.style.borderRadius = '8px';
card.style.padding = '8px';
card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.06)';


const img = document.createElement('img');
img.src = p.image;
img.alt = p.title;
img.style.width = '100%';
img.style.height = '150px';
img.style.objectFit = 'contain';


const title = document.createElement('h4');
title.innerText = p.title;
title.style.fontSize = '14px';


const price = document.createElement('p');
price.innerText = `$${p.price}`;
price.style.fontWeight = '700';


card.appendChild(img);
card.appendChild(title);
card.appendChild(price);
container.appendChild(card);
});


document.body.appendChild(container);
}
} catch (err) {
console.error('Failed to load products. Please try again.');
}
}