const user = getCurrentUser();

if (!user) {
    window.location.href = "login.html";
}

const toolsGrid = document.getElementById("toolsGrid");
const searchTool = document.getElementById("searchTool");
const filterCategory = document.getElementById("filterCategory");

const ferramentas = getFerramentas();

function renderTools(list) {
    toolsGrid.innerHTML = "";

    list.forEach(tool => {
        const card = document.createElement("article");
        card.className = "tool-card";

        card.innerHTML = `
            <div class="tool-icon">🛠️</div>

            <h3>${tool.nome}</h3>

            <div class="tags">
                <span class="tag">${tool.categoria}</span>
                <span class="tag">${tool.nivel}</span>
            </div>

            <p>${tool.descricao}</p>

            <a href="${tool.link}" target="_blank" class="btn-primary">
                Acessar
            </a>
        `;

        toolsGrid.appendChild(card);
    });
}

function filterTools() {
    const search = searchTool.value.toLowerCase();
    const category = filterCategory.value;

    const filtered = ferramentas.filter(tool => {
        const matchesSearch =
            tool.nome.toLowerCase().includes(search) ||
            tool.categoria.toLowerCase().includes(search) ||
            tool.descricao.toLowerCase().includes(search);

        const matchesCategory =
            category === "todos" || tool.categoria === category;

        return matchesSearch && matchesCategory;
    });

    renderTools(filtered);
}

searchTool.addEventListener("input", filterTools);
filterCategory.addEventListener("change", filterTools);

renderTools(ferramentas);