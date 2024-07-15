const express = require("express");
const path = require("path");
const http = require("http");
require("dotenv").config();

require("./db/mongoConnect");

const { routesInit } = require("./routes/configRoutes");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

routesInit(app);

const server = http.createServer(app);
server.listen(process.env.PORT || 3001);
console.log(`Server is running on port ${process.env.PORT || 3001}`);