module.exports = function unifyNewLine(str) {
  return str.replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
};
