module.exports = function normalize(token) {
  return token.replace(/[།་ |\n|\t|　]/g, '').trim();
};
