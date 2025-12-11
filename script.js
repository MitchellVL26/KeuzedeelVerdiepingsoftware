document.addEventListener("DOMContentLoaded", () => {
  // ===== HOME PAGE LOGIC =====
  const clickMeBtn = document.getElementById("clickMeBtn");
  const messagePara = document.getElementById("message");

  if (clickMeBtn && messagePara) {
    clickMeBtn.addEventListener("click", () => {
      const now = new Date().toLocaleTimeString();
      messagePara.textContent = `Button clicked at ${now}!`;
    });
  }

  // ===== SIGN IN PAGE LOGIC =====
  const signinForm = document.getElementById("signinForm");

  if (signinForm) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("formMessage");

    signinForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!email || !password) {
        message.textContent = "Vul alle velden in.";
        message.style.color = "orange";
        return;
      }

      message.textContent = "Succesvol ingelogd!";
      message.style.color = "lightgreen";

      // Redirect to homepage
      setTimeout(() => {
        window.location.href = "index.html";
      }, 800);
    });
  }

  // ===== CREATE ACCOUNT PAGE LOGIC =====
  const createAccountForm = document.getElementById("createAccountForm");

  if (createAccountForm) {
    const nameInput = document.getElementById("newName");
    const emailInput = document.getElementById("newEmail");
    const passwordInput = document.getElementById("newPassword");
    const message = document.getElementById("createMessage");

    createAccountForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();

      if (!name || !email || !password) {
        message.textContent = "Vul alle velden in.";
        message.style.color = "orange";
        return;
      }

      // Fake account creation success
      message.textContent = "Account succesvol aangemaakt!";
      message.style.color = "lightgreen";

      console.log("New account:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);

      // Optional redirect to sign in page
      setTimeout(() => {
        window.location.href = "SignIn.html";
      }, 1000);
    });
  }
});
