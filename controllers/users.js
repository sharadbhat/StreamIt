const express = require('express');
const hashing = require('../helpers/hashing');
const compareHash = require('../helpers/compare-hash');
const addUser = require('../middlewares/add-user');
const getHash = require('../middlewares/get-hash');
const doesUsernameExist = require('../middlewares/does-username-exist');
const getUsernameLine = require('../middlewares/get-username-line');

const router = express.Router();

router.post('/register', (req, res) => {
  success = true;
  try {
    username = req.body.username;
    password = req.body.password;

    if (username.match('[|]')) {
      success = false;
    }
    else {
      if (doesUsernameExist(username)) {
          success = false;
      }
      else {
        passwordHash = hashing(password);
        addUser(username, passwordHash);
      }
    }
  }
  catch (e) {
    success = false;
  }

  res.json({"success" : success});
});



router.post('/login', (req, res) => {
  success = true;
  try {
    username = req.body.username;
    password = req.body.password;

    passwordHash = "";
    if (doesUsernameExist(username)) {
      passwordHash = getHash(getUsernameLine(username));
      if (!compareHash(password, passwordHash)) {
        success = false;
      }
    }
    else {
      success = false;
    }
  }
  catch (e) {
    success = false;
  }

  res.json({"success" : success});
});

module.exports = router;
