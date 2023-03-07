const socket = io();

const form = document.getElementById("message-form");
const input = document.getElementById("message-input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = input.value;
  input.value = "";
  socket.emit("chat message", message);
});

socket.on("chat message", (message) => {
  const li = document.createElement("li");
  li.textContent = message;
  messages.appendChild(li);
});
