/* =========================
   LINK DATA
========================= */
const links = [
  { name: "TypeRacer", url: "https://play.typeracer.com/", show: true },
  { name: "Nitro Type", url: "https://www.nitrotype.com/", show: true },
  { name: "Keybr.com", url: "https://www.keybr.com/", show: true },
  { name: "MonkeyType", url: "https://monkeytype.com/", show: true },
  { name: "SpeedTypingOnline", url: "https://www.speedtypingonline.com/", show: true },
  { name: "TypingMaster", url: "https://www.typingmaster.com/", show: true },
  { name: "Ratatype", url: "https://www.ratatype.com/", show: true },
  { name: "TypeLift", url: "https://www.typelift.io/", show: true },
  { name: "Typing.com", url: "https://www.typing.com/", show: true }
];

/* =========================
   ELEMENTS
========================= */
const container = document.getElementById("linkContainer");
const toggleButton = document.getElementById("toggleButton");

let linksVisible = false;

/* =========================
   BUILD LINKS (WITH STAGGER)
========================= */
function createLinks() {
  container.innerHTML = ""; // reset so animation replays

  links.forEach((link, index) => {
    if (!link.show) return;

    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.name;
    a.className = "link";

    /* stagger animation */
    a.style.animationDelay = `${index * 0.1}s`;

    container.appendChild(a);
  });
}

/* =========================
   TOGGLE FUNCTION
========================= */
function toggleLinks() {
  linksVisible = !linksVisible;

  if (linksVisible) {
    createLinks(); // rebuild so animation plays
    container.classList.add("show");
    container.classList.remove("hide");
    toggleButton.textContent = "Hide Links";
  } else {
    container.classList.remove("show");
    container.classList.add("hide");
    toggleButton.textContent = "Show Links";
  }
}

/* =========================
   INIT
========================= */
toggleButton.addEventListener("click", toggleLinks);
