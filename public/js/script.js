import { generate_desktop_card, generate_mobile_card } from "./functions";
import "../css/index.css";
import "../css/style.css";
import "../images/logo.svg";
import "../images/desktop/image-interactive.jpg";
import { creations, creations_mobileVersion } from "./data";
const axios = require("axios");

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

axios.get(url_creation).then(function(response) {
    generate_desktop_card(response.data);
});

/** mobile version */
generate_mobile_card(creations_mobileVersion);