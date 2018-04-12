const fs = require('fs');

/**
 * Adds the music ID to the favorites file.
 * @param {string} username - Username of user.
 * @param {string} musicID - ID of the song to be added as favorite.
 * @returns {undefined}
 */
const addToFavorites = function (username, musicID) {
  contents = fs.readFileSync('./data/favorites.txt').toString().split('\n');
  contents.pop();
  userFound = false;

  for (var i = 0; i < contents.length; i++) {
    splitContents = contents[i].split("|");
    if (splitContents[0] === username) {
      userFound = true;
      musicIDFound = false;
      for(var j = 1; j < splitContents.length; j++) {
        if (j == splitContents.length - 1) {
          if (musicID === splitContents[j].slice(0, -1)) {
            musicIDFound = true;
          }
        }
        if (splitContents[j] === musicID) {
          musicIDFound = true;
          break;
        }
      }

      if (!musicIDFound) {
        splitContents = contents[i].split("|");
        if (splitContents[0] === username) {
          userFound = true;
          newData = splitContents[0] + "|" + musicID;
          for (var j = 1; j < splitContents.length; j++) {
            newData += "|" + splitContents[j];
          }
        }
        contents2 = [];
        for (var j = 0; j < contents.length; j++) {
          if (contents[j].split("|")[0] !== username) {
            contents2.push(contents[j]);
          }
        }
        contents = contents2;
        contents.push(newData);
        contents.sort();
        fs.writeFileSync('./data/favorites.txt', "");
        for (var j = 0; j < contents.length; j++) {
          fs.appendFileSync('./data/favorites.txt', contents[j] + "\n");
        }
      }
    }
  }

  if (!userFound) {
    newData = username + "|" + musicID + "#";
    contents.push(newData);
    contents.sort();
    fs.writeFileSync('./data/favorites.txt', "");
    for (var i = 0; i < contents.length; i++) {
      fs.appendFileSync('./data/favorites.txt', contents[i] + "\n");
    }
  }
}

module.exports = addToFavorites;
