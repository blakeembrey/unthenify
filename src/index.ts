import arity = require('util-arity')

export function unthenify <T, U> (
  this: T,
  fn: () => PromiseLike<U>
): (this: T, cb: Callback<U>) => void
export function unthenify <T, T1, U> (
  this: T,
  fn: (a: T1) => PromiseLike<U>
): (this: T, a: T1, cb: Callback<U>) => void
export function unthenify <T, T1, T2, U> (
  this: T,
  fn: (a: T1, b: T2) => PromiseLike<U>
): (this: T, a: T1, b: T2, cb: Callback<U>) => void
export function unthenify <T, T1, T2, T3, U> (
  this: T,
  fn: (a: T1, b: T2, c: T3) => PromiseLike<U>
): (this: T, a: T1, b: T2, c: T3, cb: Callback<U>) => void
export function unthenify <T, T1, T2, T3, T4, U> (
  this: T,
  fn: (a: T1, b: T2, c: T3, d: T4) => PromiseLike<U>
): (this: T, a: T1, b: T2, c: T3, d: T4, cb: Callback<U>) => void
export function unthenify <T, T1, T2, T3, T4, T5, U> (
  this: T,
  fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => PromiseLike<U>
): (this: T, a: T1, b: T2, c: T3, d: T4, e: T5, cb: Callback<U>) => void
export function unthenify <T, T1, T2, T3, T4, T5, T6, U> (
  this: T,
  fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => PromiseLike<U>
): (this: T, a: T1, b: T2, c: T3, d: T4, e: T5, f: T6, cb: Callback<U>) => void
export function unthenify <T, U> (this: T, fn: (...args: any[]) => PromiseLike<any>): (this: T, ...args: any[]) => void {
  return arity(fn.length + 1, function (this: T, ...args: any[]) {
    const cb = args.pop()

    fn.apply(this, args)
      .then(
        (result: U) => cb(null, result),
        (error: Error) => cb(error || new TypeError('Promise was rejected with a falsy value'))
      )
  })
}

export type Callback <T> = (error: Error, result: T) => any
