const fs = require('fs');

/**
 * Checks if the username exists.
 * @param {string} username - Username of the user.
 * @returns {boolean} - true if song ID exists, else false.
 */
const doesUsernameExist = function (username) {
  fileContents = (fs.readFileSync('./data/users-index.txt', 'utf8')).toString().split('\n');

  for (var i = 0; i < fileContents.length; i++) {
    if (username === (fileContents[i].split("|")[0])) {
      return true;
    }
  }
  return false;
}

module.exports = doesUsernameExist;
