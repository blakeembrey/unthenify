# Un-thenify

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
import { unthenify } from 'unthenify'

const handler = unthenify(async function (payload) {
  // Do something...

  return true
})

// Use with callback-style.
handler({}, function (err, result) {
  console.log(err, result) //=> undefined, true
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
