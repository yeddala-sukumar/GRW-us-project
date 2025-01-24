let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)


// Function to validate the sign-up form
function validateSignUpForm() {
	var username = document.getElementById("regUsername").value;
	var email = document.getElementById("regEmail").value;
	var password = document.getElementById("regPassword").value;
	var confirmPassword = document.getElementById("regConfirmPassword").value;
  
	if (username.trim() == "") {
	  alert("Please enter a username");
	  return false;
	}
  
	if (email.trim() == "") {
	  alert("Please enter an email");
	  return false;
	}
  
	// You can add more complex email validation if needed
  
	if (password.trim() == "") {
	  alert("Please enter a password");
	  return false;
	}
  
	if (confirmPassword.trim() == "") {
	  alert("Please confirm your password");
	  return false;
	}
  
	if (password !== confirmPassword) {
	  alert("Passwords do not match");
	  return false;
	}
  
	// Validation passed
	return true;
  }
  
  // Function to validate the sign-in form
  function validateSignInForm() {
	var username = document.getElementById("signInUsername").value;
	var password = document.getElementById("signInPassword").value;
  
	if (username.trim() == "") {
	  alert("Please enter your username");
	  return false;
	}
  
	if (password.trim() == "") {
	  alert("Please enter your password");
	  return false;
	}
  
	// Validation passed
	return true;
  }
  
  // Add event listeners to form submissions
  document.getElementById("form1").addEventListener("submit", function(event) {
	if (!validateSignUpForm()) {
	  event.preventDefault();
	}
  });
  
  document.getElementById("form2").addEventListener("submit", function(event) {
	if (!validateSignInForm()) {
	  event.preventDefault();
	}
  });
  