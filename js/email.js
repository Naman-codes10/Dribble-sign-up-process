// Get the necessary elements
const resendLink = document.querySelector('.resend-link');
const changeLink = document.querySelector('.change-link');

// Add event listeners
resendLink.addEventListener('click', resendEmail);
changeLink.addEventListener('click', changeEmail);

// Function to resend the confirmation email
function resendEmail(event) {
  event.preventDefault();
  // Add your code here to resend the confirmation email
  console.log('Resending confirmation email...');
}

// Function to change the email address
function changeEmail(event) {
  event.preventDefault();
  // Add your code here to allow the user to change the email address
  console.log('Changing email address...');
}