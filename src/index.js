require("dotenv").config();

const app = require("./app");
const http = require("http");
const getPort = require("./utils/getPort");
const handleServerError = require("./utils/handleServerError");
const handleServerListening = require("./utils/handleServerListening");

const port = getPort();
app.set("port", port);

const server = http.createServer(app);
server.listen(port);

server.on("error", handleServerError(port));
server.on("listening", handleServerListening(server));
