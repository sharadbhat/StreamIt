const FuzzySearch = require('fuzzy-search');

const getClosestIDs = function (jsonData, artistName) {
  fuzzy = new FuzzySearch(jsonData, ['name', 'ids'], {
    caseSensitive: false,
  });
  closestIDs = fuzzy.search(artistName);
  if (closestIDs.length === 0) {
    return [];
  }
  return closestIDs[0]['ids'];
}

module.exports = getClosestIDs;
