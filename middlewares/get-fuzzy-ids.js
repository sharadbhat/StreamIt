const fs = require('fs');
const getClosestIDs = require('../helpers/get-closest-ids');

const getFuzzyIDs = function (artistName) {
  contents = fs.readFileSync('./data/music-secondary-index.txt').toString().split('\n');
  contents.pop();

  jsonData = [];
  for (var i = 0; i < contents.length; i++) {
    contentData = contents[i].split('|');
    name = contentData[0];
    ids = [];
    for (var j = 1; j < contentData.length - 1; j++) {
      ids.push(contentData[j]);
    }
    ids.push((contentData[contentData.length - 1]).slice(0, -2));

    jsonData.push({'name' : name, 'ids' : ids});
  }
  return getClosestIDs(jsonData, artistName);
}

module.exports = getFuzzyIDs;
