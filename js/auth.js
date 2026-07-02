/* ===========================================
   EFDEV - AUTH.JS
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       MOSTRAR / OCULTAR SENHA
    ========================== */

    const toggleButtons = document.querySelectorAll(
        ".togglePassword, #showPassword"
    );

    toggleButtons.forEach(button => {

        button.addEventListener("click", () => {

            const input = button.parentElement.querySelector("input");

            const icon = button.querySelector("i");

            if (input.type === "password") {

                input.type = "text";

                icon.classList.remove("fa-eye");
                icon.classList.add("fa-eye-slash");

            } else {

                input.type = "password";

                icon.classList.remove("fa-eye-slash");
                icon.classList.add("fa-eye");

            }

        });

    });

    /* ==========================
       CADASTRO
    ========================== */

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const password = document.getElementById("password").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            const interest =
                document.getElementById("interest").value;

            if (name.length < 3) {

                alert("Digite um nome válido.");

                return;

            }

            if (password.length < 6) {

                alert("A senha deve possuir pelo menos 6 caracteres.");

                return;

            }

            if (password !== confirmPassword) {

                alert("As senhas não coincidem.");

                return;

            }

            const result = createUser({

                name,

                email,

                password,

                interest

            });

            if (!result.success) {

                alert(result.message);

                return;

            }

            setCurrentUser(result.user);

            alert("Conta criada com sucesso!");

            window.location.href = "dashboard.html";

        });

    }

    /* ==========================
       LOGIN
    ========================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();

            const password = document.getElementById("password").value;

            const result = loginUser(email, password);

            if (!result.success) {

                alert(result.message);

                return;

            }

            alert(`Bem-vindo, ${result.user.name}!`);

            if (result.user.role === "admin") {
                window.location.href = "admin/dashboard.html";
            } else {
                window.location.href = "dashboard.html";
            }

        });

    }

});

/* ===========================================
   VERIFICA LOGIN
=========================================== */

function protectPage() {

    if (!isAuthenticated()) {

        window.location.href = "login.html";

    }

}

/* ===========================================
   LOGOUT
=========================================== */

function logout() {

    logoutUser();

}