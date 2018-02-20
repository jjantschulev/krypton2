const socket = io("localhost:3018");


socket.on("connection", function () {
  console.log("Connected to server");  
});
