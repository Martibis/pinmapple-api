const express = require("express");
const indexRouter = express.Router();
const markersRouter = require("./markers");

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
    return res.send({ title: "Pinmapple backend" });
});

indexRouter.post("/", function (req, res, next) {
    return res.send({ title: "Pinmapple backend" });
});

const routers = [
    {
        path: "/",
        handler: indexRouter,
    },
    {
        path: "/marker",
        handler: markersRouter,
    },
]

module.exports = routers;
