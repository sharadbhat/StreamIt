const express = require('express');
const getRandomID = require('../middlewares/get-random-id');

const router = express.Router();

router.get('/', (req, res) => {
  success = true;

  try {
    randomID = getRandomID();
  } catch (e) {
    success = false;
  }

  if (success) {
    res.json({"id" : randomID});
  }
  else {
    res.json({"success" : success});
  }
});

module.exports = router;
