import test from 'node:test'
import assert from 'node:assert/strict'
import { fill, telHref } from '../src/fill.ts'

test('fills known tokens, leaves unknown ones intact', () => {
  assert.equal(fill('Tree removal in {city}', { city: 'Gary' }), 'Tree removal in Gary')
  assert.equal(fill('Call {phone} in {city}', { city: 'Gary' }), 'Call {phone} in Gary')
  assert.equal(fill('no tokens', { city: 'Gary' }), 'no tokens')
})

test('repeats and multiple tokens', () => {
  assert.equal(fill('{city}, {city} {brand}', { city: 'Whiting', brand: 'X' }), 'Whiting, Whiting X')
})

test('telHref strips formatting', () => {
  assert.equal(telHref('(219) 365-5009'), 'tel:2193655009')
})
