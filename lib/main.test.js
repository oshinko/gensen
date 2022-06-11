import { expect, test } from 'vitest'

import gensen from './main'
// import { zip } from './main'

console.log('imported', __filename)

// test('should work as expected', () => {
//   expect([...zip([0, 2, 4], [1, 3])]).toEqual([[0, 1], [2, 3], [4, undefined]])
// })

test('aaaa', () => {
  const income = 171890

  expect(
    gensen({ date: '2022-01-01' })
      .income(income)
      .monthly({ dependents: 2 })
  ).toEqual(13270)

  expect(
    gensen({ date: '2022-01-01' })
      .income(income)
      .monthly()
  ).toEqual(89800)

  expect(
    gensen({ date: '2019-01-01' })
      .income(income)
      .monthly({ dependents: 2 })
  ).toEqual(2140)
})
