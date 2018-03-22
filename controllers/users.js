const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {
  try {
    username = req.body.username;
    passwordHash = req.body.password;

    // TODO: Generate UUID and add user to file.
  } catch (e) {
    res.json({"Error" : "Invalid data"});
  }
});

module.exports = router;
