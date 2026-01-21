const toggleButton = document.getElementById('toggle-button');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      if(body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light Mode';
      } else {
        toggleButton.textContent = 'Switch to Dark Mode';
      }
    });

    const form = document.getElementById('registrationForm');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const successMessage = document.getElementById('successMessage');

    // Validation Regex Patterns
    const namePattern = /^[a-zA-Z\s]{2,30}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/; // min 6, uppercase, lowercase, digit

    function validateName() {
      if (nameInput.value.trim() === '') {
        nameError.textContent = "Name is required.";
        return false;
      } else if (!namePattern.test(nameInput.value.trim())) {
        nameError.textContent = "Name should be 2-30 letters only.";
        return false;
      } else {
        nameError.textContent = '';
        return true;
      }
    }

    function validateEmail() {
      if (emailInput.value.trim() === '') {
        emailError.textContent = "Email is required.";
        return false;
      } else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email.";
        return false;
      } else {
        emailError.textContent = '';
        return true;
      }
    }

    function validatePassword() {
      if (passwordInput.value === '') {
        passwordError.textContent = "Password is required.";
        return false;
      } else if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Password must be 6+ chars, include uppercase, lowercase & a number.";
        return false;
      } else {
        passwordError.textContent = '';
        return true;
      }
    }

    function validateConfirmPassword() {
      if (confirmPasswordInput.value === '') {
        confirmPasswordError.textContent = "Please confirm your password.";
        return false;
      } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
      } else {
        confirmPasswordError.textContent = '';
        return true;
      }
    }

    // Validate on input for live feedback
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', () => {
      validatePassword();
      validateConfirmPassword(); // confirm password depends on password field
    });
    confirmPasswordInput.addEventListener('input', validateConfirmPassword);

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default submit for validation

      successMessage.textContent = '';

      const isNameValid = validateName();
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
      const isConfirmPasswordValid = validateConfirmPassword();

      if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        successMessage.textContent = "Form submitted successfully!";
        form.reset();
      } else {
        successMessage.textContent = '';
      }
    });
