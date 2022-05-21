/**
 * const expected = [[0, 2], [1, 3]]
 * const actual = [...zip([0, 1], [2, 3])]
 * assert JSON.stringify(expected) === JSON.stringify(actual)
 */
export function *zip(...arrays) {
  try {
    arrays[0] = [...arrays[0]]
  } catch {
    throw Error(`TypeError: First argument "${arrays[0]}" is not iterable`)
  }
  for (const i in arrays[0])
    yield arrays.map(array => array[i])
}

export default {
  zip
}
