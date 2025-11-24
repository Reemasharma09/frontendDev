const ta = document.getElementById('ta');
const counter = document.getElementById('counter');
const reset = document.getElementById('reset');
const MAX = 100;

function updateCounter() {
  const left = MAX - ta.value.length;
  counter.textContent = `${left} characters left`;
  counter.classList.remove('yellow', 'red');
  if (left <= 0) counter.classList.add('red');
  else if (left <= 20) counter.classList.add('yellow');
}
ta.addEventListener('keydown', (e) => {
  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'Tab'];
  if (ta.value.length >= MAX && !allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
   
    counter.classList.add('red');
  }
});

ta.addEventListener('input', updateCounter);
reset.addEventListener('click', () => {
  ta.value = '';
  updateCounter();
  ta.focus();
});

updateCounter();