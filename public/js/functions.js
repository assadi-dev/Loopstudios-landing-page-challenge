/**
 * @param {Object} data
 * @return {Element}
 */
export function generate_desktop_card(data) {
    Object(data).map(function(item) {
        const card = document.createElement("div");
        card.classList.add("grid-creation");
        const a = document.createElement("a");
        const preview = document.createElement("img");
        const title = document.createElement("h2");
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        title.classList.add("creation-title");
        preview.classList.add("creation-image");
        preview.src = item.link;
        preview.alt = item.title;
        a.setAttribute("rel", "noopener noreferrer");
        a.href = "#";
        a.appendChild(preview);
        a.appendChild(overlay);
        a.appendChild(title);
        title.innerHTML = item.title;
        card.appendChild(a);
        document.querySelector("#creation-container").appendChild(card);
    });
}

export function generate_mobile_card(data) {
    Object(data).map(function(item) {
        const card = document.createElement("li");
        card.classList.add("creation-item-mobile");

        const a = document.createElement("a");
        const preview = document.createElement("img");
        const title = document.createElement("h2");
        const overlay = document.createElement("div");
        overlay.classList.add("overlay");
        title.classList.add("creation-title");
        preview.classList.add("creation-image-mobile");
        preview.src = item.link;
        preview.alt = item.title;
        a.setAttribute("rel", "noopener noreferrer");
        a.href = "#";
        a.appendChild(preview);
        a.appendChild(overlay);
        a.appendChild(title);
        title.innerHTML = item.title;
        card.appendChild(a);
        document.querySelector("#creation-container-mobile").appendChild(card);
    });
}