document.addEventListener("DOMContentLoaded", () => {
  // ===== SIGN IN PAGE LOGIC =====
  const signinForm = document.getElementById("signinForm");

  if (signinForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("formMessage");

    signinForm.addEventListener("submit", (event) => {
      event.preventDefault(); // stop page reload

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        message.textContent = "Vul alle velden in.";
        message.style.color = "orange";
        return;
      }

      // Simulated successful login
      message.textContent = "Succesvol ingelogd!";
      message.style.color = "lightgreen";

      console.log("Email:", email);
      console.log("Password:", password);

       //Optional: redirect after successful sign in
       //setTimeout(() => {
         //window.location.href = "index.html";
      // }, 800);
    });
  }
});
