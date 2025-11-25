// Wait until the HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("clickMeBtn");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    const now = new Date().toLocaleTimeString();
    message.textContent = `Button clicked at ${now}!`;
  });
});
