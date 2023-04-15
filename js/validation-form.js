const email = document.getElementById('.email');
const form = document.getElementById('.contact_form');
const small = document.querySelector('.small');

form.addEventListener('', (e) => {
  e.preventDefault();
  small.innerText = '';
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    return;
  }
  small.style.color = '#ff6b00';
  small.innerText = 'Please enter your email in lowercase.';
});