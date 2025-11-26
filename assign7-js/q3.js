const steps = Array.from(document.querySelectorAll('.step'));
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
const summaryDiv = document.getElementById('summary');

let currentStep = 0;

const inputs = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
};

function showStep(index) {
  steps.forEach((s, i) => s.classList.toggle('active', i === index));
  backBtn.style.display = index === 0 ? 'none' : '';
  nextBtn.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
  summaryDiv.hidden = true;
}
showStep(0);

function validateStep(index) {
  clearErrors();
  if (index === 0) {
    if (!inputs.name.value.trim()) {
      showError('err-name', 'Name is required');
      return false;
    }
  } else if (index === 1) {
    const val = inputs.email.value.trim();
    if (!val) { showError('err-email','Email is required'); return false; }
    if (!/@/.test(val)) { showError('err-email','Must be a valid email'); return false; }
  } else if (index === 2) {
    const pw = inputs.password.value;
    if (!pw) { showError('err-password','Password is required'); return false; }
    if (pw.length < 6) { showError('err-password','Minimum 6 characters'); return false; }
  }
  return true;
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(e => e.textContent = '');
}

nextBtn.addEventListener('click', () => {
  if (!validateStep(currentStep)) return;
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
});

backBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

function showSummary() {
  summaryDiv.innerHTML = `
    <h3>Summary</h3>
    <p><strong>Name:</strong> ${escapeHtml(inputs.name.value)}</p>
    <p><strong>Email:</strong> ${escapeHtml(inputs.email.value)}</p>
    <p><strong>Password:</strong> ${'*'.repeat(inputs.password.value.length)}</p>
  `;
  summaryDiv.hidden = false;
}

function escapeHtml(s='') {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}