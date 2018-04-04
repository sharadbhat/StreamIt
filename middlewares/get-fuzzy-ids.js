const fs = require('fs');
const getClosestIDs = require('../helpers/get-closest-ids');

/**
 * Returns the IDs of the music of closest matching artist names.
 * @param {string} artistName - Name of the artist entered by the user.
 * @returns {string []} - Array of music IDs.
 */
const getFuzzyIDs = function (artistName) {
  contents = fs.readFileSync('./data/music-secondary-index.txt').toString().split('\n');
  contents.pop();

  invertedListFile = fs.readFileSync('./data/music-inverted-list.txt').toString().split('\n');

  jsonData = [];
  for (var i = 0; i < contents.length; i++) {
    contentData = contents[i].split('|');
    name = contentData[0];
    ids = [];

    startPosition = contentData[1].slice(0, -2);

    while (true) {
      invertedFileRecord = invertedListFile[startPosition - 1].split('|');
      ids.push(invertedFileRecord[0]);
      startPosition = invertedFileRecord[1].slice(0, -2);
      if (startPosition === '-1') {
        break;
      }
    }

    jsonData.push({'name' : name, 'ids' : ids});
  }
  return getClosestIDs(jsonData, artistName);
}

module.exports = getFuzzyIDs;
