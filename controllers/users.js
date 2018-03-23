const express = require('express');
const fs = require('fs');
const uuid = require('../helpers/generate-uuid');
const hashing = require('../helpers/hashing');
const compareHash = require('../helpers/compare-hash');
// const isNotUnique = require('./is-not-unique');

const router = express.Router();

router.post('/add', (req, res) => {
  try {
    username = req.body.username;
    password = req.body.password;

//    if (isNotUnique(username)) {
//      res.json({"Success" : "false"});
//    }

    userID = uuid();
    passwordHash = hashing(password);

    data = userID + "|" + username + "|" + passwordHash + "#";

    logStream = fs.createWriteStream('./data/users.txt', {'flags': 'a'});
    logStream.end(data);

    res.json({"Success" : "true"})
  }
  catch (e) {
    res.json({"Success" : "false"});
  }
});

router.post('/login', (req, res) => {
  try {
    username = req.body.username;
    password = req.body.password;

    userID = getUserID(username);
    passwordHash = "";
    if (userID !== false) {
//      passwordHash = getPasswordHash(username);
    }
    else {
      res.json({"Success" : "false"});
    }

    if (compareHash(password, passwordHash)) {
      res.json({"Success" : "true"});
    }
    else {
      res.json({"Success" : "false"});
    }
  }
  catch (e) {
    res.json({"Success" : "false"});
  }
});

module.exports = router;
