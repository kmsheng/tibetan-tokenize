var should = require('should');
var tokenize = require('../lib/tokenize');

describe('tokenize', function() {

  it('should handle empty called', function() {

    var expected = {
      offsets: [],
      tokens: []
    };

    tokenize().should.deepEqual(expected);
  });

  it('should tokenize tibetan words', function() {

    var raw = '\n༄༅། །བདེ་བར་གཤེགས་པའི་བཀའ་གངས་ཅན་གྱི་བརྡས་འདྲེན་པ་ཇི་སྙེད་པའི་ཕྱི་མོ་པར་གྱི་ཚོགས་སུ་འཁོད་པའི་བྱུང་བ་\n';

    var expectedTokens = [ '༄༅', 'བདེ', 'བར', 'གཤེགས', 'པའི', 'བཀའ', 'གངས', 'ཅན', 'གྱི', 'བརྡས', 'འདྲེན',
      'པ', 'ཇི', 'སྙེད', 'པའི', 'ཕྱི', 'མོ', 'པར', 'གྱི', 'ཚོགས', 'སུ', 'འཁོད', 'པའི', 'བྱུང', 'བ' ];

    var expectedOffsets = [1, 6, 10, 13, 19, 23, 27, 31, 34, 38, 43, 49, 51, 54, 59, 63, 67, 70, 73, 77, 82, 85, 90, 94, 99];

    var result = tokenize(raw);

    expectedTokens.should.deepEqual(result.tokens);
    expectedOffsets.should.deepEqual(result.offsets);
  });

  it('should tokenize tibetan words', function() {

    var raw = '༼ཀ༽ ༄༅། ༈ །འདུལ་བ་ལུང་བཞུགས་སོ། ། (黃) 律師戒行經第一部';

    var expectedTokens = ['༼ཀ༽', '༄༅', '༈', 'འདུལ', 'བ', 'ལུང', 'བཞུགས', 'སོ', '(黃)', '律師戒行經第一部'];
    var expectedOffsets = [0, 4, 8, 11, 16, 18, 22, 28, 34, 38];
    var result = tokenize(raw);

    expectedTokens.should.deepEqual(result.tokens);
    expectedOffsets.should.deepEqual(result.offsets);
  });
});
