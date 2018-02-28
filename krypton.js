var seedrandom = require('seedrandom');

module.exports.encrypt = function (data, key) {
  var currentRandom = 0;
  var randomSequence = getRandomSequence(key, data.length - 1);
  var array = data.split("");
  for(var i = array.length-1; i > 0; i --) {
    var index = Math.floor(randomSequence[currentRandom] * (i-1));
    var temp = array[index];
    array[index] = array[i];
    array[i] = temp;
    currentRandom++;
  }
  array.push(randomChar());
  array.unshift(randomChar());
  return array.join("");
}


module.exports.decrypt = function (data, key) {
  var array = data.split("");
  array.pop();
  array.shift();
  var randomSequence = getRandomSequence(key, array.length - 1);
  var currentRandom = randomSequence.length -1;
  for(var i = 1; i < array.length; i ++) {
    var index = Math.floor(randomSequence[currentRandom] * (i-1));
    var temp = array[index];
    array[index] = array[i];
    array[i] = temp;
    currentRandom--;
  }
  return array.join("");
}

function getRandomSequence(key, length) {
  var rng = seedrandom(key);
  var sequence = [];
  for(var i = 0; i < length; i ++) {
    sequence.push(rng());
  }
  return sequence;
}


function randomChar () {
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890"
  return chars[Math.floor(Math.random() * chars.length)];
}
