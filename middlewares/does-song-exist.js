const fs = require('fs');

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
