const bcrypt = require('bcrypt');

const hashing = function (password) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

module.exports = hashing;
