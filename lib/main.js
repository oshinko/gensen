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

Number.prototype.format = function () {
  return new Intl.NumberFormat().format(this)
}

export default function ({ date } = {}) {
  date = date === undefined ? new Date() : new Date(date) 

  return {
    kyuyo(kyuyo) {
      console.log(`# 給与 (社会保険料等控除後): ¥${kyuyo.format()}`)

      return {
        getsugaku({ fuyo } = {}) {
          const rowVals = `16,510 13,270 10,040 7,560 5,930 4,320 2,710 1,080
89,800`
              .replace(/,/g, '')
              .split(/\s/)
              .map(Number)
          if (fuyo)
            return rowVals.slice(0, -1)[fuyo - 1]
          return rowVals.slice(-1)[0]
        },

        nichigaku: undefined,

        shoyo: undefined
      }
    },

    hoshu(hoshu) {
      console.log(`# 報酬: ¥${hoshu.format()}`)

      return {
        kojin: {
          // genkoryo
          // koenryo
          // bengoshi
          // koninkaikeishi
          // shihoshoshi
          // shinryo
          // yakyu (baseball)
          // sakka (soccer)
          // tenisu (tennis)
          // moderu (model)
          // gaikoin
          // shukinnin
          // kenshinnin
          // hosutesu (hostess)
          // keiyaku
          // keiba
        },

        hojin: {
          // keiba
        }
      }
    }
  }
}
