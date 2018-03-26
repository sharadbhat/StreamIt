const bcrypt = require('bcrypt');

/**
 * Compares user plaintext password with saved password hash.
 * @param {string} password - Plaintext password entered by user.
 * @param {string} passwordHash - Password hash retrieved from file.
 * @returns {boolean} - true if passwords match, else false.
 */
const compareHash = function (password, passwordHash) {
  return bcrypt.compareSync(password, passwordHash);
}

module.exports = compareHash;
