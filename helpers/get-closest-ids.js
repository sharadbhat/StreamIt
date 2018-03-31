const FuzzySearch = require('fuzzy-search');

/**
 * Returns a list of IDs by matching artist names.
 * @param {Object.<string, string>} jsonData - Data sent by get-fuzzy-ids function.
 * @param {string} artistName - Artist name to be searched.
 * @returns {string []} - Array of music IDs.
 */
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
