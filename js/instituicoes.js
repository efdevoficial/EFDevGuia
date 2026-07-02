const user = getCurrentUser();

if (!user) {
    window.location.href = "login.html";
}

const institutionsGrid = document.getElementById("institutionsGrid");
const searchInstitution = document.getElementById("searchInstitution");
const filterType = document.getElementById("filterType");

let institutions = getInstituicoes();

function renderInstitutions(list) {
    institutionsGrid.innerHTML = "";

    list.forEach(item => {
        const card = document.createElement("article");
        card.className = "institution-box";

        card.innerHTML = `
            <h3>${item.nome}</h3>

            <div class="tags">
                <span class="tag">${item.tipo}</span>
                <span class="tag">${item.area}</span>
                <span class="tag">${item.modalidade}</span>
            </div>

            <p>${item.descricao}</p>

            <a href="${item.link}" target="_blank" class="btn-primary">
                Acessar
            </a>
        `;

        institutionsGrid.appendChild(card);
    });
}

function filterInstitutions() {
    const search = searchInstitution.value.toLowerCase();
    const type = filterType.value;

    const filtered = institutions.filter(item => {
        const matchesSearch =
            item.nome.toLowerCase().includes(search) ||
            item.area.toLowerCase().includes(search) ||
            item.descricao.toLowerCase().includes(search);

        const matchesType = type === "todos" || item.tipo === type;

        return matchesSearch && matchesType;
    });

    renderInstitutions(filtered);
}

searchInstitution.addEventListener("input", filterInstitutions);
filterType.addEventListener("change", filterInstitutions);

renderInstitutions(institutions);