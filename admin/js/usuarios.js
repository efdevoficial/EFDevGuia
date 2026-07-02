protectAdminPage();

const usersTableBody = document.getElementById("usersTableBody");
const searchUser = document.getElementById("searchUser");

const totalUsers = document.getElementById("totalUsers");
const totalAdmins = document.getElementById("totalAdmins");
const averageXP = document.getElementById("averageXP");

const editModal = document.getElementById("editModal");
const closeModal = document.getElementById("closeModal");
const editUserForm = document.getElementById("editUserForm");

const editUserId = document.getElementById("editUserId");
const editName = document.getElementById("editName");
const editEmail = document.getElementById("editEmail");
const editRole = document.getElementById("editRole");
const editXP = document.getElementById("editXP");
const editLevel = document.getElementById("editLevel");

let users = getUsers();

function renderStats() {
    totalUsers.textContent = users.length;

    totalAdmins.textContent = users.filter(user => user.role === "admin").length;

    const totalXP = users.reduce((sum, user) => sum + (user.xp || 0), 0);

    averageXP.textContent = users.length
        ? Math.round(totalXP / users.length)
        : 0;
}

function renderUsers(list = users) {
    usersTableBody.innerHTML = "";

    list.forEach(user => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td class="user-name">${user.name}</td>
            <td>${user.email}</td>
            <td>
                <span class="role-badge ${user.role}">
                    ${user.role}
                </span>
            </td>
            <td>${user.xp || 0}</td>
            <td>${user.level || 1}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="openEditModal('${user.id}')">
                        Editar
                    </button>

                    <button class="reset-btn" onclick="resetUserProgress('${user.id}')">
                        Resetar
                    </button>

                    <button class="delete-btn" onclick="deleteUser('${user.id}')">
                        Excluir
                    </button>
                </div>
            </td>
        `;

        usersTableBody.appendChild(tr);
    });
}

function filterUsers() {
    const search = searchUser.value.toLowerCase();

    const filtered = users.filter(user => {
        return (
            user.name.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search)
        );
    });

    renderUsers(filtered);
}

function openEditModal(userId) {
    const user = users.find(item => item.id === userId);

    if (!user) return;

    editUserId.value = user.id;
    editName.value = user.name;
    editEmail.value = user.email;
    editRole.value = user.role;
    editXP.value = user.xp || 0;
    editLevel.value = user.level || 1;

    editModal.classList.add("show");
}

function closeEditModal() {
    editModal.classList.remove("show");
}

editUserForm.addEventListener("submit", event => {
    event.preventDefault();

    const userId = editUserId.value;

    users = users.map(user => {
        if (user.id === userId) {
            return {
                ...user,
                name: editName.value.trim(),
                email: editEmail.value.trim().toLowerCase(),
                role: editRole.value,
                xp: Number(editXP.value),
                level: Number(editLevel.value)
            };
        }

        return user;
    });

    saveUsers(users);

    const currentUser = getCurrentUser();
    const updatedCurrent = users.find(user => user.id === currentUser.id);

    if (updatedCurrent) {
        setCurrentUser(updatedCurrent);
    }

    closeEditModal();
    renderStats();
    renderUsers();
});

function deleteUser(userId) {
    const currentUser = getCurrentUser();

    if (currentUser.id === userId) {
        alert("Você não pode excluir sua própria conta enquanto está logado.");
        return;
    }

    const confirmDelete = confirm("Deseja realmente excluir este usuário?");

    if (!confirmDelete) return;

    users = users.filter(user => user.id !== userId);

    saveUsers(users);

    renderStats();
    renderUsers();
}

function resetUserProgress(userId) {
    const confirmReset = confirm("Deseja resetar o progresso deste usuário?");

    if (!confirmReset) return;

    users = users.map(user => {
        if (user.id === userId) {
            return {
                ...user,
                xp: 0,
                level: 1,
                completedLevels: [],
                achievements: []
            };
        }

        return user;
    });

    saveUsers(users);

    renderStats();
    renderUsers();
}

searchUser.addEventListener("input", filterUsers);
closeModal.addEventListener("click", closeEditModal);

renderStats();
renderUsers();