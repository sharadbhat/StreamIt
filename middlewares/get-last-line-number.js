const fs = require('fs');

/**
 * Gets the line at which the new record has to be added.
 * @returns {number} - Line at which record has to be added.
 */
const getLastLineNumber = function () {
  var file = fs.readFileSync('./data/users.txt', 'utf8');
  var match = file.match(/\r?\n/g);

  if (match === null) {
    match = [];
  }

  return (match.length + 1);
}

module.exports = getLastLineNumber;
