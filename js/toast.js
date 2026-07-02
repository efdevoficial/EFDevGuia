(function () {

    let container = document.querySelector(".toast-container");

    if (!container) {

        container = document.createElement("div");

        container.className = "toast-container";

        document.body.appendChild(container);

    }

    const icons = {

        success:"✅",

        error:"❌",

        warning:"⚠️",

        info:"ℹ️"

    };

    window.showToast = function({

        type="info",

        title="Mensagem",

        message=""

    }){

        const toast=document.createElement("div");

        toast.className=`toast ${type}`;

        toast.innerHTML=`

        <div class="toast-icon">

        ${icons[type]}

        </div>

        <div class="toast-content">

            <div class="toast-title">

            ${title}

            </div>

            <div class="toast-message">

            ${message}

            </div>

        </div>

        `;

        container.appendChild(toast);

        setTimeout(()=>{

            toast.classList.add("hide");

            setTimeout(()=>{

                toast.remove();

            },350);

        },4000);

    }

})();