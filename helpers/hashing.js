const bcrypt = require('bcrypt');

/**
 * Generate a hash for the given password.
 * @param {string} password - Plaintext password entered by user.
 * @returns {string} - Generated hash.
 */
const hashing = function (password) {
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

module.exports = hashing;
