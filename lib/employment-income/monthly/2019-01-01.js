import table from './2019-01-01.csv'
import { newDate, range } from '../../utils'

function calcFixedTax({ item, dependents }) {
  if (dependents === undefined)
    return item.unknown

  const taxes = item.dependents ?? [
    item.dependents0,
    item.dependents1,
    item.dependents2,
    item.dependents3,
    item.dependents4,
    item.dependents5,
    item.dependents6,
    item.dependents7
  ]

  /*
   * FIXME
   * 扶養親族等の数が 7 人を超える場合には、
   * 扶養親族等の数が 7 人の場合の税額から、その 7 人を超える 1 人ごとに
   * 1,610円を控除した金額
   * ref: https://www.nta.go.jp/publication/pamph/gensen/zeigakuhyo2018/data/01-07.pdf
   */
  return taxes[dependents]
}

export default {
  accepts({ date }) {
    return newDate(date) >= newDate('2019-01-01T00:00:00+09:00')
  },

  calc(amount, { dependents } = {}) {
    const item = table.data.find(x => x.start <= amount && amount < x.end)

    if (item) {
      return calcFixedTax({ item, dependents})
    }

    if (amount < 88000) {
      /*
       * TODO ほぼよい
       * ref https://www.nta.go.jp/publication/pamph/gensen/zeigakuhyo2018/data/19-22.pdf
       * ref https://www.nta.go.jp/publication/pamph/gensen/zeigakuhyo2018/data/01-07.pdf
       */
      return calcFixedTax({
        item: {
          dependents: [...range(7)].map(() => 0),
          unknown: Math.floor(amount * 3.063 / 100)
        },
        dependents
      })
    }
  }
}
