const socket = io(window.location.href);

var key = "key";
var currentState = document.getElementById("currentState");
var output = document.getElementById("data-output");
var input = document.getElementById("data-input");

socket.on("result-decrypt", function (string) {
  input.value = string;
})

socket.on("result-encrypt", function (string) {
  output.value = string;
})

function onChangeKey (newKey) {
  if(newKey.length =- 0) {
    key = "key";
  } else {
    key = newKey;
  }
}

function encrypt(string) {
  socket.emit("encrypt", string, key);
}

function decrypt (string) {
  socket.emit("decrypt", string, key);
}

function onInputChanged(string) {
  encrypt(string);
}

function onOutputChanged (string) {
  decrypt(string);
}
