const fs = require('fs');

const getMusicLine = function (songID) {
  contents = fs.readFileSync('./data/music-index.txt').toString().split('\n');
  for (var i = 0; i < contents.length; i++) {
    if (songID === contents[i].split('|')[0]) {
      return (contents[i].split('|')[1].slice(0, -2));
    }
  }
}

module.exports = getMusicLine;
