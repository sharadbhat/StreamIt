const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  searchQuery = req.query('search');
  res.send(searchQuery);
});

module.exports = router;
