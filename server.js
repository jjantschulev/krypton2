const express = require("express");
const app = express();
const server = app.listen(3018, function () {
  console.log("Krypton2 server running on port: 3018");
});

app.use(express.static("public"));

const io = require("socket.io")(server);

io.on("connection" , function (socket) {
  console.log("New client connection with id: " + socket.id);
});
