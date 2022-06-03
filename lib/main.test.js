import { expect, test } from 'vitest'

import gensen from './main'
import { zip } from './main'

console.log('imported', __filename)

test('should work as expected', () => {
  expect([...zip([0, 2, 4], [1, 3])]).toEqual([[0, 1], [2, 3], [4, undefined]])
})

class A {
  constructor(a) {
    this.a = a
  }
}

test('aaaa', () => {
  const kyuyo = 171890

  expect(
    gensen({ date: '2022-01-01' })
      .kyuyo(kyuyo)
      .getsugaku({ fuyo: 2 })
  ).toEqual(13270)

  expect(
    gensen({ date: '2022-01-01' })
      .kyuyo(kyuyo)
      .getsugaku()
  ).toEqual(89800)
})
