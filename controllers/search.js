const express = require('express');
const getFuzzyIDs = require('../middlewares/get-fuzzy-ids');
const getDetails = require('../middlewares/retrieve-song-details');
const getLine = require('../middlewares/get-music-line');

const router = express.Router();

router.get('/', (req, res) => {
  searchQuery = req.query['query'];

  success = true;
  if (searchQuery === undefined || searchQuery === "") {
    success = false;
  }

  try {
    ids = getFuzzyIDs(searchQuery);
    closestMatches = [];
    for (var i = 0; i < ids.length; i++) {
      id = ids[i];
      closestMatches.push({
        id,
        ...getDetails(getLine(id))
      });
    }
  }
  catch (e) {
    success = false;
  }

  if (success) {
    res.json({'results' : closestMatches});
  }
  else {
    res.json({'success' : success});
  }
});

module.exports = router;
