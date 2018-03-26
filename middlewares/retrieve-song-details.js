const rl = require('readline-specific');
const wait = require('wait-for-stuff');

const retrieveSongDetails = function (lineNumber) {
  details = wait.for.callback(rl.oneline, './data/music.txt', lineNumber);
  details = details.split('|');
  return {"artistName" : details[1], "songName" : details[2].slice(0, -1)};
}

module.exports = retrieveSongDetails;
