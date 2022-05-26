import { expect, test } from 'vitest'

import { zip } from './main'

console.log('imported', __filename)

test('should work as expected', () => {
  expect(JSON.stringify([...zip([0, 2, 4], [1, 3])]))
    .toBe(JSON.stringify([[0, 1], [2, 3], [4, undefined]]))
})
