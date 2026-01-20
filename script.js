document.addEventListener("DOMContentLoaded", () => {

  // Load saved accounts or create empty array
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

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

      // Check if account exists
      const user = accounts.find(acc =>
        acc.email === email && acc.password === password
      );

      if (!user) {
        message.textContent = "Email of wachtwoord is onjuist!";
        message.style.color = "red";
        return;
      }

      // Login success
      message.textContent = `Welkom terug, ${user.name}!`;
      message.style.color = "lightgreen";

// Save logged-in user
localStorage.setItem("loggedInUser", JSON.stringify(user));


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

      // Check if email already exists
      const existing = accounts.find(acc => acc.email === email);

      if (existing) {
        message.textContent = "Dit emailadres bestaat al!";
        message.style.color = "red";
        return;
      }

      // Create new account object
      const newAccount = { name, email, password };

      // Add to array
      accounts.push(newAccount);

      // Save to localStorage
      localStorage.setItem("accounts", JSON.stringify(accounts));

      message.textContent = "Account succesvol aangemaakt!";
      message.style.color = "lightgreen";

      console.log("Saved accounts:", accounts);

      setTimeout(() => {
        window.location.href = "LoggedIn.html";
      }, 1000);
    });
  }
});