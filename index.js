const express = require("express");
const app = express();
const server = require("http").createServer(app);
require("dotenv").config();
const path = require("path");
const nunjucks = require("nunjucks");
const creations = require("./src/data");

const PORT = process.env.PORT || 3000;

app.use("/public", express.static(path.join(__dirname, "public")));
//app.use(express.static(path.join(__dirname, "dist")));

nunjucks.configure("public", {
    autoescape: true,
    express: app,
});

//static page

app.get("*", function(_, res) {
    //res.sendFile(path.join(__dirname, "/dist/index.html"));
    res.render("index.html", {
        desktop: creations.desktop,
        mobile: creations.mobile,
    });
});

app.get("/*", function(req, res) {
    res.json("Erreur 404");
});

server.listen(PORT, () => {
    console.log(`Server listening on Port : ${PORT}`);
});