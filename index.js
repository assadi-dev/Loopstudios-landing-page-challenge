const express = require("express");
const app = express();
const server = require("http").createServer(app);
require("dotenv").config();
const path = require("path");
const nunjucks = require("nunjucks");

const PORT = process.env.PORT || 3000;

app.use("/public", express.static(path.join(__dirname, "public")));
//static page
app.use(express.static(path.join(__dirname, "dist")));

app.get("/", function(_, res) {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
    if (err) {
        res.status(500).json("Error");
    }
});

app.get("/api/creations", function(req, res) {
    const creation = [{
            title: "Deep Earth",
            link: "/public/images/desktop/image-deep-earth.jpg",
        },
        {
            title: "Night Arcade",
            link: "/public/images/desktop/image-night-arcade.jpg",
        },
        {
            title: "Soccer Team VR",
            link: "/public/images/desktop/image-soccer-team.jpg",
        },
        { title: "The Grid", link: "/public/images/desktop/image-grid.jpg" },
        {
            title: "From up Above VR",
            link: "/public/images/desktop/image-from-above.jpg",
        },
        {
            title: "Pocket Brealis",
            link: "/public/images/desktop/image-pocket-borealis.jpg",
        },
        {
            title: "The Curiosity",
            link: "/public/images/desktop/image-curiosity.jpg",
        },
        {
            title: "Make it Fisheye",
            link: "/public/images/desktop/image-fisheye.jpg",
        },
    ];

    res.status(200).json(creation);
});

app.get("/api/mobile-creations", (req, res) => {
    const creation_mobileVersion = [
        { title: "Deep Earth", link: "/public/images/mobile/image-deep-earth.jpg" },
        {
            title: "Night Arcade",
            link: "/public/images/mobile/image-night-arcade.jpg",
        },
        {
            title: "Soccer Team VR",
            link: "/public/images/mobile/image-soccer-team.jpg",
        },
        { title: "The Grid", link: "/public/images/mobile/image-grid.jpg" },
        {
            title: "From up Above VR",
            link: "/public/images/mobile/image-from-above.jpg",
        },
        {
            title: "Pocket Brealis",
            link: "/public/images/mobile/image-pocket-borealis.jpg",
        },
        {
            title: "The Curiosity",
            link: "/public/images/mobile/image-curiosity.jpg",
        },
        {
            title: "Make it Fisheye",
            link: "/public/images/mobile/image-fisheye.jpg",
        },
    ];

    res.status(200).json(creation_mobileVersion);
});

app.get("*", function(req, res) {
    res.json("Erreur 404");
});

server.listen(PORT, () => {
    console.log(`Server listening on Port : ${PORT}`);
});