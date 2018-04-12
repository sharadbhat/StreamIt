const express = require('express');
const doesSongExist = require('../middlewares/does-song-exist');

const router = express.Router();

router.get('/:songID', (req, res) => {
  songID = req.params['songID'];

  success = true;

  if (!doesSongExist(songID)) {
    success = false;
  }

  if (success) {
    res.sendFile('images/' + songID + '.jpg', {root: './data/'});
  }
  else {
    res.status(status).json({"success" : success});
  }
});

module.exports = router;
