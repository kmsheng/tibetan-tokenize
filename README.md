# tibetan-tokenize
[![Build Status](https://travis-ci.org/kmsheng/tibetan-tokenize.svg?branch=master)](https://travis-ci.org/kmsheng/tibetan-tokenize)
Tibetan Tokenization

# Example
```js
var tokenize = require('tibetan-tokenize');
console.log(tokenize('རྒྱལ་བའི་དབང་པོ་ཆོས་ཀྱི་གྲུ་བརྙེས་འདམ་ལས་བརྒལ།');
/*
    {
      tokens: [ 'རྒྱལ་', 'བའི་', 'དབང་', 'པོ་', 'ཆོས་', 'ཀྱི་', 'གྲུ་', 'བརྙེས་', 'འདམ་', 'ལས་', 'བརྒལ།'],
      offsets: [ 0, 5, 9, 13, 16, 20, 24, 28, 34, 38, 41 ]
    }
*/
```

# To Begin
```
npm install tibetan-tokenize --save
```
