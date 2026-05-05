const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // TEMPORARY (replace with Cloudflare Worker later)
  console.log({ name, email, message });

  status.textContent = "Message sent successfully!";

  form.reset();
});