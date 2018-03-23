const bcrypt = require('bcrypt');

const compareHash = function (password, passwordHash) {
  if(bcrypt.compareSync(password, passwordHash)) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = compareHash;
