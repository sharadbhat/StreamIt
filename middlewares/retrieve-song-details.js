const rl = require('readline-specific');
const wait = require('wait-for-stuff');

/**
 * Returns details of given song ID.
 * @param {number} lineNumber - Line on which the song details are present.
 * @returns {Object.<string, string>} - Dictionary of song details.
 */
const retrieveSongDetails = function (lineNumber) {
  details = wait.for.callback(rl.oneline, './data/music.txt', lineNumber);
  details = details.split('|');
  return {"artistName" : details[1], "songName" : details[2].slice(0, -1)};
}

module.exports = retrieveSongDetails;
