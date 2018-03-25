const fs = require('fs');
const getLastLineNumber = require('../middlewares/get-last-line-number');

function sortUserIndex() {
  var contents = (fs.readFileSync('./data/users-index.txt').toString()).split('\n');
  contents.pop();
  contents.sort();

  string = "";
  for (var i = 0; i < contents.length; i++) {
    string += contents[i] + "\n";
  }

  fs.writeFileSync('./data/users-index.txt', string);
}

const addUser = function (username, passwordHash) {
  lineNumber = getLastLineNumber();

  data = lineNumber + "|" + username + "|" + passwordHash + "#\n";
  fs.appendFileSync('./data/users.txt', data);

  data = username + "|" + lineNumber + "#\n";
  fs.appendFileSync('./data/users-index.txt', data);

  sortUserIndex();
}

module.exports = addUser;
