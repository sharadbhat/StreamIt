const fs = require('fs');

const getHash = function (lineNumber) {
  var contents = (fs.readFileSync('./data/users.txt').toString()).split('\n')[lineNumber - 1];
  contents = (contents.split('|')[2]).slice(0, -1);
  return contents;
};

module.exports = getHash;
