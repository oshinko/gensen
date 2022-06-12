import eim2019 from './employment-income/monthly/2019-01-01'
import eim2020 from './employment-income/monthly/2019-01-01'
import { newDate } from './utils'

const eimArray = [eim2020, eim2019]

Number.prototype.format = function () {
  return new Intl.NumberFormat().format(this)
}

export default function ({ date } = {}) {
  date = newDate(date)

  return {
    // 給与所得
    employmentIncome(amount) {
      console.log(`# 給与 (社会保険料等控除後): ¥${amount.format()}`)

      return {
        monthly({ dependents } = {}) {
          const eim = eimArray.find(x => x.accepts({ date }))

          if (eim)
            return eim.calc(amount, { dependents })

          throw new Error(`${date.toISOString()} is not supported.`)
        },

        daily: undefined,

        bonus: undefined
      }
    },

    // 退職所得
    retirementIncome: undefined,

    // 報酬
    remuneration(amount) {
      console.log(`# 報酬: ¥${amount.format()}`)

      return {
        resident: {
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

        domesticCorporation: {
          // keiba
        }
      }
    }
  }
}
