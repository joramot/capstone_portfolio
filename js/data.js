// Capture the form and form elements
const fname = document.getElementById('name');
const femail = document.getElementById('email');
const ftextarea = document.getElementById('msg');

// Get data from the javascript object
function getFormData() {
  const userData = localStorage.getItem('userData');
  if (userData !== null) {
    const userDataObj = JSON.parse(userData);
    fname.value = userDataObj.name;
    femail.value = userDataObj.email;
    ftextarea.value = userDataObj.message;
  }
}

// Set data in the javascript object
function setFormData() {
  // Create a JavaScript object with the captured values
  const contactInfo = {
    name: fname.value,
    email: femail.value,
    message: ftextarea.value,
  };
  // Save the object in the localStorage
  localStorage.setItem('userData', JSON.stringify(contactInfo));
}

// Load stored object values from localstorage
window.onload = () => { getFormData(); };

// Listeners when an input value in the form changes
fname.addEventListener('change', () => setFormData());
femail.addEventListener('change', () => setFormData());
ftextarea.addEventListener('change', () => setFormData());