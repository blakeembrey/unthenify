import arity = require('util-arity')
import Promise = require('any-promise')

function unthenify <U> (
  fn: () => Promise<U>
): (cb: unthenify.Callback<U>) => any
function unthenify <T1, U> (fn:
  (a: T1) => Promise<U>
): (a: T1, cb: unthenify.Callback<U>) => any
function unthenify <T1, T2, U> (
  fn: (a: T1, b: T2) => Promise<U>
): (a: T1, b: T2, cb: unthenify.Callback<U>) => any
function unthenify <T1, T2, T3, U> (
  fn: (a: T1, b: T2, c: T3) => Promise<U>
): (a: T1, b: T2, c: T3, cb: unthenify.Callback<U>) => any
function unthenify <T1, T2, T3, T4, U> (fn:
  (a: T1, b: T2, c: T3, d: T4) => Promise<U>
): (a: T1, b: T2, c: T3, d: T4, cb: unthenify.Callback<U>) => any
function unthenify <T1, T2, T3, T4, T5, U> (
  fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => Promise<U>
): (a: T1, b: T2, c: T3, d: T4, e: T5, cb: unthenify.Callback<U>) => any
function unthenify <T1, T2, T3, T4, T5, T6, U> (
  fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => Promise<U>
): (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, cb: unthenify.Callback<U>) => any
function unthenify <U> (fn: (...args: any[]) => Promise<any>): (...args: any[]) => any {
  return arity(fn.length + 1, function (...args: any[]) {
    const cb = args.pop()

    fn.apply(this, args)
      .then(
        (result: U) => cb(null, result),
        (error: Error) => cb(error || new TypeError('Promise was rejected with a falsy value'))
      )
  })
}

namespace unthenify {
  export type Callback <T> = (error: Error, result: T) => any
}

export = unthenify
