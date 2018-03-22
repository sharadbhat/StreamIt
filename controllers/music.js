const express = require('express');

const router = express.Router();

router.get('/:songName', (req, res) => {
  songName = req.params['songName'];
  //TODO: Get and send song as response.
});
