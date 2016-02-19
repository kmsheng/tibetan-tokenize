var unifyNewLine = require('./unifyNewLine');

function tokenize(str) {

  var result = {
    tokens: [],
    offsets: []
  };

  if (! str) {
    return result;
  }

  var offset = 0;
  var lines = unifyNewLine(str).split('\n');
  var lastIndex = lines.length - 1;

  return lines.reduce(function(result, line, index, lines) {

      var tokens = result.tokens;
      var offsets = result.offsets;
      var needle = 0;

      line.replace(/[།་ ]+/g, function(match, matchIndex) {
        tokens.push(line.substring(needle, matchIndex) + match);
        offsets.push(offset + needle);
        needle = matchIndex + match.length;
      });

      if (needle < line.length) {
        tokens.push(line.substring(needle));
        offsets.push(offset + needle);
      }

      if (index === lastIndex) {
        return result;
      }

      tokens.push('\n');
      offsets.push(offset + needle);
      offset += line.length + 1;

      return result;
  }, result);
}

module.exports = tokenize;
