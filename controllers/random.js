const express = require('express');
const getRandomIDs = require('../middlewares/get-random-ids');

const router = express.Router();

router.get('/', (req, res) => {
  success = true;

  try {
    randomID = getRandomIDs();
  } catch (e) {
    success = false;
  }

  if (success) {
    res.json({"ids" : randomID});
  }
  else {
    res.json({"success" : success});
  }
});

module.exports = router;
