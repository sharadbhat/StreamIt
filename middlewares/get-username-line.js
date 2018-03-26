const fs = require('fs');

/**
 * Returns the line at which user record exists.
 * @param {string} username - Username of user.
 * @returns {number} - Line at which user record exists.
 */
const getUsernameLine = function (username) {
  fileContents = fs.readFileSync('./data/users-index.txt', 'utf8').split('\n');

  for (var i = 0; i < fileContents.length; i++) {
    if (username === fileContents[i].split("|")[0]) {
      return (fileContents[i].split("|")[1]).slice(0, -1);
    }
  }
}

module.exports = getUsernameLine;
