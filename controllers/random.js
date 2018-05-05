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
    randomIDs = [];
    for (var i = 0; i < randomID.length; i++) {
      id = randomID[i];
      randomIDs.push({
        id,
        ...getDetails(getLine(id))
      });
    }
  } catch (e) {
    success = false;
  }

  if (success) {
    res.json({"songs" : randomIDs});
  }
  else {
    res.json({"success" : success});
  }
});

module.exports = router;
