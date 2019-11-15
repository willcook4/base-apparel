var formErrors = false

function submitSignUpForm (e) {
  console.log('submitted')
  e.preventDefault();

  var email = document.getElementById('email-input').value
  if (email.length === 0) {
    formErrors = true
    // Show error message
    document.getElementById('email-input-errors').textContent = 'Please provide a valid email'
  }
  if(!isEmailValid(email)) {
    formErrors = true
    // Show the error icon
    document.getElementById('sign-up-form-btn').style.setProperty('--form-error-visibility', 'inline-block')
    // Make the input border alert themed
    document.getElementById('email-input').style.setProperty('border', '2px solid hsl(0, 93%, 68%)')
    // Show error text message
    document.getElementById('email-input-errors').textContent = 'Please provide a valid email'
  } else {
    console.log('Valid email address provided: ', email)
  }
}

/**
 * Checks if a provided email string is a vaild email format
 * @param {string} email 
 */
function isEmailValid(email) {
  if (email.length === 0) return false;
  // Email Regex as per the HTML5 Specification:
  var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return emailRegExp.test(email)
}


function inputChanged(event) {
  if(formErrors) {
    // Clear the error text message
    document.getElementById('email-input-errors').textContent = ''
    // Make the input border not alert themed
    document.getElementById('email-input').style.setProperty('border', '0.8px solid hsl(0, 36%, 70%)')
    // Hide the error icon
    document.getElementById('sign-up-form-btn').style.setProperty('--form-error-visibility', 'none')
  }
}

/**
 * Event Listeners
 */
document.getElementById('sign-up-form-btn').addEventListener("click", submitSignUpForm)
document.getElementById('email-input').addEventListener("input", inputChanged)
