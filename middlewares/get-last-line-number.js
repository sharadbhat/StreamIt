const fs = require('fs');

const getLastLineNumber = function () {
  var file = fs.readFileSync('./data/users.txt', 'utf8');
  var match = file.match(/\r?\n/g);

  if (match === null) {
    match = [];
  }

  return (match.length + 1);
}

module.exports = getLastLineNumber;
