const fs = require('fs');

const getFavorites = function (username) {
  contents = fs.readFileSync('./data/favorites.txt').toString().split('\n');
  for(var i = 0; i < contents.length - 1; i++) {
    splitContents = contents[i].split("|");
    ids = [];
    if (username === splitContents[0]) {
      for(var j = 1; j < splitContents.length; j++) {
        if (j == splitContents.length - 1) {
          ids.push(splitContents[j].slice(0, -1));
        }
        else {
          ids.push(splitContents[j]);
        }
      }
      return ids;
    }
  }
  return [];
}

module.exports = getFavorites;
