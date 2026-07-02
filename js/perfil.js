const user = getCurrentUser();

if (!user) {

window.location.href = "login.html";

}

document.getElementById("avatar").textContent =
user.name.charAt(0).toUpperCase();

document.getElementById("profileName").textContent =
user.name;

document.getElementById("profileEmail").textContent =
user.email;

document.getElementById("profileXP").textContent =
user.xp;

document.getElementById("profileLevel").textContent =
user.level;

document.getElementById("profileAchievements").textContent =
user.achievements.length;

document.getElementById("profileLevels").textContent =
user.completedLevels.length;

const percent = Math.round(

(user.completedLevels.length / EFDEV_ROADMAP.length) * 100

);

document.getElementById("profileProgress").style.width =
percent + "%";

const roadmap = document.getElementById("completedRoadmap");

EFDEV_ROADMAP.forEach(level=>{

const done =
user.completedLevels.includes(level.id);

const div=document.createElement("div");

div.className="completed-item";

div.innerHTML=`

<span>

${level.icone}

${level.titulo}

</span>

<strong>

${done ? "✅" : "🔒"}

</strong>

`;

roadmap.appendChild(div);

});