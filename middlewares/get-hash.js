const rl = require('readline-specific');
const wait = require('wait-for-stuff');

/**
 * Retrieves hash from the record at the given line.
 * @param {number} lineNumber - Line from which hash to be retrieved.
 * @returns {string} - Hash at the given line in the file.
 */
const getHash = function (lineNumber) {
  hash = wait.for.callback(rl.oneline, './data/users.txt', lineNumber);
  hash = hash.split('|')[1].slice(0, -1);

  return hash;
};

module.exports = getHash;
