const express = require('express');
const getFuzzyIDs = require('../middlewares/get-fuzzy-ids');

const router = express.Router();

router.get('/', (req, res) => {
  searchQuery = req.query['query'];

  success = true;
  if (searchQuery === undefined || searchQuery === "") {
    success = false;
  }

  try {
    ids = getFuzzyIDs(searchQuery);
  }
  catch (e) {
    success = false;
  }

  if (success) {
    res.json({'ids' : ids});
  }
  else {
    res.json({'success' : success});
  }
});

module.exports = router;
