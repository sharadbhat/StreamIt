const fs = require('fs');
const getLastLineNumber = require('../middlewares/get-last-line-number');

/**
 * Sorts the users-index.txt file.
 * @returns {undefined}
 */
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


/**
 * Adds user data to file and sorts index file.
 * @param {string} username - Username of user.
 * @param {string} password - The plaintext password of the user.
 * @returns {undefined}
 */
const addUser = function (username, passwordHash) {
  lineNumber = getLastLineNumber(); // To get line at which record is added.

  data = username + "|" + passwordHash + "#\n";
  fs.appendFileSync('./data/users.txt', data);

  data = username + "|" + lineNumber + "#\n";
  fs.appendFileSync('./data/users-index.txt', data);

  sortUserIndex();
}

module.exports = addUser;
