const bcrypt = require('bcrypt');

const compareHash = function (password, passwordHash) {
  return bcrypt.compareSync(password, passwordHash);
}

module.exports = compareHash;
