const express = require('express');
const compareHash = require('../helpers/compare-hash');
const getHash = require('../middlewares/get-hash');
const doesSongExist = require('../middlewares/does-song-exist');
const retrieveSongDetails = require('../middlewares/retrieve-song-details');
const getMusicLine = require('../middlewares/get-music-line');

const router = express.Router();

router.get('/:songID', (req, res) => {
  songID = req.params['songID'];

  status = 200;
  success = true;

  if (!doesSongExist(songID)) {
    status = 404;
    success = false;
  }

  if (success) {
    res.sendFile('music/' + songID + '.mp3', {root: './data/'});
  }
  else {
    res.status(status).json({"success" : success});
  }
});



router.get('/details/:songID', (req, res) => {
  songID = req.params['songID'];

  status = 200;
  success = true;
  details = {};
  if(!doesSongExist(songID)) {
    status = 400;
    success = false;
  }
  else {
    details["id"] = songID;
    lineNumber = getMusicLine(songID);
    details = {
      ...details,
      ...retrieveSongDetails(lineNumber)};
  }
  
  if (success) {
    res.json({"details" : details});
  }
  else {
    res.status(status).json({"success" : success});
  }
});

module.exports = router;
