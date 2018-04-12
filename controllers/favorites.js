const express = require('express');
const doesSongExist = require('../middlewares/does-song-exist');
const compareHash = require('../helpers/compare-hash');
const getHash = require('../middlewares/get-hash');
const doesUsernameExist = require('../middlewares/does-username-exist');
const getUsernameLine = require('../middlewares/get-username-line');
const addToFavorites = require('../middlewares/add-to-favorites');
const getFavorites = require('../middlewares/get-favorites');

const router = express.Router();

router.get('/:user', (req, res) => {
  username = req.params['user'];
  status = 200;
  success = true;

  if (!doesUsernameExist(username)) {
    status = 404;
    success = false;
  }
  else {
    favorites = getFavorites(username);
  }

  if (success) {
    res.json({"ids" : favorites});
  }
  else {
    res.status(status).json({"success" : success});
  }
});

router.post('/add', (req, res) => {
  success = true;

  username = req.body.username;
  password = req.body.password;
  musicID = req.body.musicID;

  if (!doesSongExist(musicID)) {
    success = false;
  }
  else {
    passwordHash = "";
    if (doesUsernameExist(username)) {
      passwordHash = getHash(getUsernameLine(username));
      if (!compareHash(password, passwordHash)) {
        success = false;
      }
      else {
        addToFavorites(username, musicID);
      }
    }
    else {
      success = false;
    }
  }
  res.json({"success" : success});
});

module.exports = router;
