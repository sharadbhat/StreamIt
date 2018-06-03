const fs = require('fs');
const shuffle = require('shuffle-array');

/**
 * Returns a random song ID from the index file.
 * @returns {string} - A random song ID.
 */
const getRandomIDs = function () {
  contents = fs.readFileSync('./data/music-index.txt').toString().split('\n');
  contents.pop();
  shuffle(contents);
  randomIDs = [];
  for (var i = 0; i < 6; i++) {
    randomIDs.push(contents[i].split('|')[0]);
  }
  return randomIDs;
}

module.exports = getRandomIDs;
