/**
 *Desktop card parent
 * @returns {NodeElement}
 */
function desktop_card() {
    let div = document.createElement("div");
    div.classList.add("grid-creation");
    return div;
}

/**
 *Desktop card contents
 * @param {String} title
 * @param {String} link
 * @returns {NodeElement}
 *
 */
function desktop_card_content(title, link) {
    let a = document.createElement("a");
    let preview = document.createElement("img");
    preview.classList.add("creation-image");
    preview.src = link;
    preview.alt = title;
    let h2 = document.createElement("h2");
    h2.classList.add("creation-title");
    h2.innerHTML = title;
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    a.setAttribute("rel", "noopener noreferrer");
    a.href = "#";
    a.appendChild(preview);
    a.appendChild(overlay);
    a.appendChild(h2);
    return a;
}

/**
 * @param {Object} data
 * @return {HTMLDivElement}
 */
export function generate_desktop_card(data) {
    Object(data).map(function(item) {
        let card = desktop_card();
        let content = desktop_card_content(item.title, item.link);
        card.appendChild(content);
        document.querySelector("#creation-container").appendChild(card);
    });
}

/**
 * Mobile card contents
 * @param {String} title
 * @param {String} link
 * @returns {NodeElement}
 *
 */
function mobile_card_content(title, link) {
    let li = document.createElement("li");
    li.classList.add("creation-item-mobile");
    let a = document.createElement("a");
    let preview = document.createElement("img");
    preview.classList.add("creation-image-mobile");
    preview.src = link;
    preview.alt = title;
    let h2 = document.createElement("h2");
    h2.classList.add("creation-title");
    h2.innerHTML = title;
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    a.appendChild(preview);
    a.appendChild(overlay);
    a.appendChild(h2);
    li.appendChild(a);
    return li;
}

/**
 *
 * @param {Object} data
 */
export function generate_mobile_card(data) {
    Object(data).map(function(item) {
        let card = mobile_card_content(item.title, item.link);
        document.querySelector("#creation-container-mobile").appendChild(card);
    });
}