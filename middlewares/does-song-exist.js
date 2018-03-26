const fs = require('fs');

/**
 * Checks if the song ID exists.
 * @param {string} songID - ID of the song.
 * @returns {boolean} - true if song ID exists, else false.
 */
const doesSongExist = function (songID) {
  contents = fs.readFileSync('./data/music-index.txt').toString().split('\n');
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].split('|')[0] === songID) {
      return true;
    }
  }
  return false;
}

module.exports = doesSongExist;
