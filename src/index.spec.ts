import test = require('blue-tape')
import { unthenify } from './index'

test('unthenify', t => {
  t.test('make callbacks from promise functions', t => {
    const fn = unthenify(function (a: any, b: any, c: any) {
      return new Promise(resolve => setTimeout(resolve, 100))
    })

    t.equal(fn.length, 4)

    fn(1, 2, 3, () => t.end())
  })

  t.test('callback with errors', t => {
    const fn = unthenify(function (a: any, b: any) {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('boom!')), 100)
      })
    })

    t.equal(fn.length, 3)

    fn(1, 2, (err) => {
      t.equal(err.message, 'boom!')
      t.end()
    })
  })

  t.test('handle promises reject with falsy values', t => {
    const fn = unthenify(function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(false), 100)
      })
    })

    t.equal(fn.length, 1)

    fn((err) => {
      t.equal(err.message, 'Promise was rejected with a falsy value')
      t.end()
    })
  })
})
