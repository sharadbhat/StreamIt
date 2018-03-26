const express = require('express');

const router = express.Router();

router.get('/:songID', (req, res) => {
  songID = req.params['songID'];
  // TODO: Open file and get data and send as response.
});

module.exports = router;
