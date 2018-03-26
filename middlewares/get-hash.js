const rl = require('readline-specific');
const wait = require('wait-for-stuff');

const getHash = function (lineNumber) {
  hash = wait.for.callback(rl.oneline, './data/users.txt', lineNumber);
  hash = hash.split('|')[2].slice(0, -1);

  return hash;
};

module.exports = getHash;
