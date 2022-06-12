import { expect, test } from 'vitest'

import gensen from './main'

test('for development', () => {
  const income = 200000

  expect(() =>
    gensen({ date: '2018-01-01T00:00:00+09:00' })
      .employmentIncome(income)
      .monthly({ dependents: 2 })
  ).toThrowError('not supported')

  expect(
    gensen({ date: '2019-01-01T00:00:00+09:00' })
      .employmentIncome(income)
      .monthly({ dependents: 2 })
  ).toEqual(3140)

  expect(
    gensen({ date: '2022-01-01T00:00:00+09:00' })
      .employmentIncome(income)
      .monthly({ dependents: 2 })
  ).toEqual(3140)

  expect(
    gensen({ date: '2022-01-01T00:00:00+09:00' })
      .employmentIncome(income)
      .monthly()
  ).toEqual(20900)
})
