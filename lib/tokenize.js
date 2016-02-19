var unifyNewLine = require('./unifyNewLine');
var normalize = require('./normalize');

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
      var token = '';

      line.replace(/[།་ ]+/g, function(match, matchIndex) {

        token = normalize(line.substring(needle, matchIndex) + match);

        if (token) {
          tokens.push(token);
          offsets.push(offset + needle);
        }
        needle = matchIndex + match.length;
      });

      if (needle < line.length) {

        token = normalize(line.substring(needle));

        if (token) {
          tokens.push(token);
          offsets.push(offset + needle);
        }
      }

      if (index === lastIndex) {
        return result;
      }

      offset += line.length + 1;

      return result;
  }, result);
}

module.exports = tokenize;
