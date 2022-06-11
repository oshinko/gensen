import eim2019 from './employment-income/monthly/2019-01-01'

Number.prototype.format = function () {
  return new Intl.NumberFormat().format(this)
}

export default function ({ date } = {}) {
  date = date === undefined ? new Date() : new Date(date)

  console.log('# date', date)

  return {
    income(income) {
      console.log(`# 給与 (社会保険料等控除後): ¥${income.format()}`)

      return {
        monthly({ dependents } = {}) {        
          if (
            new Date('2019-01-01T00:00:00+09:00') <= date
            && date <= new Date('2020-01-01T00:00:00+09:00')
          )
            return eim2019(income, { dependents })

          const rowVals = `16,510 13,270 10,040 7,560 5,930 4,320 2,710 1,080
89,800`
              .replace(/,/g, '')
              .split(/\s/)
              .map(Number)
          if (dependents)
            return rowVals.slice(0, -1)[dependents - 1]
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
