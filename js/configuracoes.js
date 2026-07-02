const user = getCurrentUser();

if (!user) {
    window.location.href = "login.html";
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const interestInput = document.getElementById("interest");
const settingsForm = document.getElementById("settingsForm");
const logoutBtn = document.getElementById("logoutBtn");

nameInput.value = user.name;
emailInput.value = user.email;
interestInput.value = user.interest || "web";

settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim().toLowerCase();
    user.interest = interestInput.value;

    updateUser(user);

    alert("Configurações salvas com sucesso!");
});

logoutBtn.addEventListener("click", () => {
    logoutUser();
});