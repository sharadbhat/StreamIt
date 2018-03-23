const bcrypt = require('bcrypt');

const hashing = function (password) {
  const saltRounds = 10;
  passwordHash = bcrypt.hashSync(password, saltRounds);

  return passwordHash;
}

module.exports = hashing;
