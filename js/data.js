// Capture the form and form elements
const contactForm = document.getElementById('contact_form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageTextarea = document.getElementById('msg');

// Add a form submit event
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the values of the input fields and textarea
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageTextarea.value;

  // Create a JavaScript object with the captured values
  const contactInfo = {
    name,
    email,
    message,
  };

  // Save the object in the localStorage
  localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

  // Clear input fields and textarea after saving to localStorage
  nameInput.value = '';
  emailInput.value = '';
  messageTextarea.value = '';
});

const contactInfoString = localStorage.getItem('contactInfo');
if (contactInfoString) {
  const contactInfo = JSON.parse(contactInfoString);

  // Assign the object values to the form fields
  nameInput.value = contactInfo.name;
  emailInput.value = contactInfo.email;
  messageTextarea.value = contactInfo.message;
}
