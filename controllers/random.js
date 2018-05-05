const express = require('express');
const getRandomIDs = require('../middlewares/get-random-ids');
const getDetails = require('../middlewares/retrieve-song-details');
const getLine = require('../middlewares/get-music-line');

const router = express.Router();

router.get('/', (req, res) => {
  success = true;

  try {
    randomID = []
    randomID = getRandomIDs();
    randomSongs = [];
    for (var i = 0; i < randomID.length; i++) {
      id = randomID[i];
      randomSongs.push({
        id,
        ...getDetails(getLine(id))
      });
    }
  } catch (e) {
    success = false;
  }

  if (success) {
    res.json({"songs" : randomSongs});
  }
  else {
    res.json({"success" : success});
  }
});

module.exports = router;
