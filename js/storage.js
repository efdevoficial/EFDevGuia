const EFDEV_STORAGE_KEYS = {
    USERS: "efdev_users",
    CURRENT_USER: "efdev_current_user"
};

function getUsers() {
    return JSON.parse(localStorage.getItem(EFDEV_STORAGE_KEYS.USERS)) || [];
}

function saveUsers(users) {
    localStorage.setItem(EFDEV_STORAGE_KEYS.USERS, JSON.stringify(users));
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem(EFDEV_STORAGE_KEYS.CURRENT_USER));
}

function setCurrentUser(user) {
    localStorage.setItem(EFDEV_STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.removeItem(EFDEV_STORAGE_KEYS.CURRENT_USER);
}

function createUser(userData) {
    const users = getUsers();

    const emailExists = users.some(
        user => user.email.toLowerCase() === userData.email.toLowerCase()
    );

    if (emailExists) {
        return {
            success: false,
            message: "Este email já está cadastrado."
        };
    }

    const newUser = {
        id: crypto.randomUUID(),
        name: userData.name,
        email: userData.email.toLowerCase(),
        password: userData.password,
        interest: userData.interest || "web",
        role: "user",
        xp: 0,
        level: 1,
        completedLevels: [],
        achievements: ["Primeiros Passos"],
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    saveUsers(users);

    return {
        success: true,
        user: newUser
    };
}

function findUserByEmail(email) {
    const users = getUsers();

    return users.find(
        user => user.email.toLowerCase() === email.toLowerCase()
    );
}

function loginUser(email, password) {
    const user = findUserByEmail(email);

    if (!user) {
        return {
            success: false,
            message: "Usuário não encontrado."
        };
    }

    if (user.password !== password) {
        return {
            success: false,
            message: "Senha incorreta."
        };
    }

    setCurrentUser(user);

    return {
        success: true,
        user
    };
}

function updateUser(updatedUser) {
    const users = getUsers();

    const updatedUsers = users.map(user => {
        return user.id === updatedUser.id ? updatedUser : user;
    });

    saveUsers(updatedUsers);
    setCurrentUser(updatedUser);
}

function logoutUser() {
    clearCurrentUser();
    window.location.href = "login.html";
}

function isAuthenticated() {
    return !!getCurrentUser();
}

function isAdmin() {
    const user = getCurrentUser();
    return user && user.role === "admin";
}

function protectPage() {
    if (!isAuthenticated()) {
        window.location.href = "login.html";
    }
}

function protectAdminPage() {
    if (!isAuthenticated()) {
        window.location.href = "../login.html";
        return;
    }

    if (!isAdmin()) {
        alert("Acesso negado. Apenas administradores.");
        window.location.href = "../dashboard.html";
    }
}

/* Criar admin padrão */
function createDefaultAdmin() {
    const users = getUsers();

    const adminExists = users.some(user => user.role === "admin");

    if (!adminExists) {
        users.push({
            id: crypto.randomUUID(),
            name: "Administrador EFDev",
            email: "admin@efdev.com",
            password: "admin123",
            interest: "admin",
            role: "admin",
            xp: 0,
            level: 1,
            completedLevels: [],
            achievements: ["Admin"],
            createdAt: new Date().toISOString()
        });

        saveUsers(users);
    }
}

createDefaultAdmin();