const express = require('express');

const router = express.Router();

router.get('/:songName', (req, res) => {
  songName = req.params['songName'];
  // TODO: Open file and get data and send as response.
});

module.exports = router;
