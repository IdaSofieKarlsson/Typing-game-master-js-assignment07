let userName = prompt("what's your name? ");
const welcomeMsg = document.getElementById("msg");

if (userName === "") {
    welcomeMsg.textContent = `Hello user!`;
} else {
    welcomeMsg.textContent = `Hello ${userName}`;
}