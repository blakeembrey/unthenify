# Un-thenify

[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/unthenify.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

> Callbackify a promise function. The logical reverse of [`thenify`](https://www.npmjs.com/package/thenify).

## Installation

```sh
npm install unthenify --save
```

## Usage

Wrap a function that usually returns a promise to accept callbacks.

```js
var Batch = require('batch')
var thenify = require('thenify')
var unthenify = require('unthenify')

// ...
  .then(function () {
    var batch = new Batch()

    batch.concurrency(10)

    files.forEach(path => {
      batch.push(unthenify(() => processFile(path)))
    })

    return thenify(done => batch.end(done))()
  })
```

## License

Apache 2.0

[npm-image]: https://img.shields.io/npm/v/unthenify.svg?style=flat
[npm-url]: https://npmjs.org/package/unthenify
[downloads-image]: https://img.shields.io/npm/dm/unthenify.svg?style=flat
[downloads-url]: https://npmjs.org/package/unthenify
[travis-image]: https://img.shields.io/travis/blakeembrey/unthenify.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/unthenify
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/unthenify.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/unthenify?branch=master
