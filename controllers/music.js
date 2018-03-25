const express = require('express');
const compareHash = require('../helpers/compare-hash');
const getHash = require('../middlewares/get-hash');
const doesUsernameExist = require('../middlewares/does-username-exist');
const getUsernameLine = require('../middlewares/get-username-line');
// const doesSongExist = require('../middlewares/does-song-exist');

const router = express.Router();

router.get('/:songName', (req, res) => {
  songName = req.params['songName'];
  username = req.header('username');
  password = req.header('password');

  success = true;

  if (!doesSongExist(songName)) {
    success = false;
  }

  if (success) {
    res.sendFile('music/songName.mp3', {root: './data/'});
  }
  else {
    res.json({"Success" : false});
  }
});

module.exports = router;
