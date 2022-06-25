import { expect, test } from 'vitest'

import gensen from './main'

test('for development', () => {
  expect(() =>
    gensen({ date: '2018-01-01T00:00:00+09:00' })
      .employmentIncome(200000)
      .monthly({ dependents: 2 })
  ).toThrowError('not supported')

  expect(
    gensen({ date: '2019-01-01T00:00:00+09:00' })
      .employmentIncome(200000)
      .monthly({ dependents: 2 })
  ).toEqual(1530)

  expect(
    gensen({ date: '2019-01-01T00:00:00+09:00' })
      .employmentIncome(80750)
      .monthly()
  ).toEqual(2473)
})
