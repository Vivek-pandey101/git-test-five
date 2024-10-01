document.addEventListener("DOMContentLoaded", function () {
  const firstName = document.getElementById("firstname");
  const lastName = document.getElementById("lastname");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");
  const radioButtons = document.querySelectorAll('input[name="query"]');
  const consentCheckbox = document.getElementById("consent");
  const form = document.querySelector("form");

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll(".error").forEach((errorElement) => {
      errorElement.innerText = "";
    });

    // Validate text inputs (First Name, Last Name, Message)
    if (firstName.value.trim() === "") {
      document.getElementById("firstnameerror").innerText =
        "This field is required";
      isValid = false;
    }

    if (lastName.value.trim() === "") {
      document.getElementById("lastnameerror").innerText =
        "This field is required";
      isValid = false;
    }

    if (message.value.trim() === "") {
      document.getElementById("messageerror").innerText =
        "This field is required";
      isValid = false;
    }

    // Validate email input
    if (!validateEmail(emailInput.value)) {
      document.getElementById("emailerror").innerText =
        "Please enter a valid email address";
      isValid = false;
    }

    // Validate query type (radio buttons)
    const queryTypeChecked = Array.from(radioButtons).some(
      (radio) => radio.checked
    );
    if (!queryTypeChecked) {
      document.getElementById("queryerror").innerText =
        "Please select a query type";
      isValid = false;
    }

    // Validate consent checkbox
    if (!consentCheckbox.checked) {
      document.getElementById("checkboxerror").innerText =
        "To submit this form, please consent to being contacted";
      isValid = false;
    }

    // If form is valid, show success message
    if (isValid) {
      alert(
        "Message Sent! Thanks for completing the form. We'll be in touch soon!"
      );
      form.reset();
    }
  });
});
