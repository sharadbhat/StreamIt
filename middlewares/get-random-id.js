const fs = require('fs');

/**
 * Returns a random song ID from the index file.
 * @returns {string} - A random song ID.
 */
const getRandomID = function () {
  contents = fs.readFileSync('./data/music-index.txt').toString().split('\n');
  contents.pop();
  random = (contents[Math.floor(Math.random()*contents.length)]);
  random = random.split('|')[0];

  return random;
}

module.exports = getRandomID;
