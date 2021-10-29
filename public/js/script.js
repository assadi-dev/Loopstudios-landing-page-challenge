import "../css/index.css";
import "../css/style.css";
import axios from "axios";

const creation_title = document.querySelectorAll(".creation-title");

const textStyle_creation = (text) => {
    let words = text.trim().split(" ");
    let newText = "";

    if (words.length < 3 || words.includes("Soccer")) {
        return (newText = `${words[0]} <br> ${words.splice(1).join(" ")}`);
    } else if (words.length >= 3) {
        return (newText = `${words[0]} ${words[1]} <br> ${words
      .splice(2)
      .join(" ")}`);
    }
    return text;
};

creation_title.forEach((element) => {
    let title = element.textContent;
    element.innerHTML = textStyle_creation(title);
});

/**Toogle interaction */

const toogleBtn = document.querySelector("#menu-toogle");
const nav = document.querySelector("#nav");
const navList = document.querySelector("#nav-link-container");
const icon = document.querySelector("#menu-toogle i");
const navLink = document.querySelectorAll(".nav-item");
let isOpen = false;

function open() {
    nav.classList.add("nav-open");
    navList.classList.add("show");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
}

function close() {
    nav.classList.remove("nav-open");
    navList.classList.remove("show");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
}

toogleBtn.addEventListener("click", function() {
    isOpen = !isOpen;

    if (isOpen) {
        open();
    } else {
        close();
    }
});

navLink.forEach((link) => {
    link.addEventListener("click", function() {
        close();
    });
});

//load creation

const url_mobile_creation = `${window.location.protocol}//${window.location.host}/api/mobile-creations`;
const url_creation = `${window.location.protocol}//${window.location.host}/api/creations`;

/** desktop version */
axios.get(url_creation).then(function(res) {
    Object(res.data).map(function(data) {
        const card = document.createElement("div");
        card.classList.add("grid-creation");
        const a = document.createElement("a");
        const preview = document.createElement("img");
        const title = document.createElement("h2");
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        title.classList.add("creation-title");
        preview.classList.add("creation-image");
        preview.src = data.link;
        preview.alt = data.title;
        a.setAttribute("rel", "noopener noreferrer");
        a.href = "#";
        a.appendChild(preview);
        a.appendChild(overlay);
        a.appendChild(title);
        title.innerHTML = data.title;
        card.appendChild(a);
        document.querySelector("#creation-container").appendChild(card);
    });
});

/** mobile version */
axios.get(url_mobile_creation).then(function(res) {
    Object(res.data).map(function(data) {
        const card = document.createElement("li");
        card.classList.add("creation-item-mobile");

        const a = document.createElement("a");
        const preview = document.createElement("img");
        const title = document.createElement("h2");
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        title.classList.add("creation-title");
        preview.classList.add("creation-image-mobile");
        preview.src = data.link;
        preview.alt = data.title;
        a.setAttribute("rel", "noopener noreferrer");
        a.href = "#";
        a.appendChild(preview);
        a.appendChild(overlay);
        a.appendChild(title);
        title.innerHTML = data.title;
        card.appendChild(a);
        document.querySelector("#creation-container-mobile").appendChild(card);
    });
});