document.getElementById("nameForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("username").value;
  const greeting = document.getElementById("greeting");

  greeting.textContent = `Hello, ${name}! Welcome to my Linux project page.`;
});