document.addEventListener("DOMContentLoaded", function() {
  const smsForm = document.getElementById("smsForm");

  smsForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const phoneNumber = document.getElementById("phoneNumber").value;
      const message = document.getElementById("message").value;

      // Send the SMS using Twilio API
      fetch("https://api.twilio.com/2010-04-01/Accounts/your_account_sid/Messages.json", {
          method: "POST",
          headers: {
              "Authorization": "Basic " + btoa("your_account_sid:your_auth_token"),
              "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
              "To": phoneNumber,
              "From": "your_twilio_phone_number",
              "Body": message,
          }).toString(),
      })
      .then(response => response.json())
      .then(data => {
          console.log(data);
          alert("SMS sent successfully!");
      })
      .catch(error => {
          console.error(error);
          alert("Failed to send SMS. Please try again later.");
      });
  });
});
















const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you for your message! We will get back to you soon.");

  contactForm.reset();
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});
