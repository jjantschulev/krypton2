const express = require("express");
const krypton = require("./krypton.js");
const app = express();
const server = app.listen(3018, function () {
  console.log("Krypton2 server running on port: 3018");
});

app.use(express.static("public"));

const io = require("socket.io")(server);

io.on("connection" , function (socket) {
  console.log("New client connection with id: " + socket.id);

  socket.on("encrypt", function (data, key) {
    var string = krypton.encrypt(data, key);
    socket.emit("result-encrypt", string);
  });

  socket.on("decrypt", function (data, key) {
    var string = krypton.decrypt(data, key);
    socket.emit("result-decrypt", string);
  });
});
