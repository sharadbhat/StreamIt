const express = require('express');
const compareHash = require('../helpers/compare-hash');
const getHash = require('../middlewares/get-hash');
const doesUsernameExist = require('../middlewares/does-username-exist');
const getUsernameLine = require('../middlewares/get-username-line');
const doesSongExist = require('../middlewares/does-song-exist');
const retrieveSongDetails = require('../middlewares/retrieve-song-details');
const getMusicLine = require('../middlewares/get-music-line');

const router = express.Router();

router.get('/:songID', (req, res) => {
  songID = req.params['songID'];

  success = true;

  if (!doesSongExist(songID)) {
    success = false;
  }

  if (success) {
    res.sendFile('music/' + songID + '.mp3', {root: './data/'});
  }
  else {
    res.json({"success" : "false"});
  }
});



router.get('/details/:songID', (req, res) => {
  songID = req.params['songID'];

  success = true;
  details = {};
  if(!doesSongExist(songID)) {
    success = false;
  }
  else {
    lineNumber = getMusicLine(songID);
    details = retrieveSongDetails(lineNumber);
  }

  if (success) {
    res.json({"details" : details});
  }
  else {
    res.json({"success" : "false"});
  }
});

module.exports = router;
