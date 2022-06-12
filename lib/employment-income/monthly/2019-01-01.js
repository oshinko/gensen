import table from './2019-01-01.csv'
import { newDate } from '../../utils'

export default {
  accepts({ date }) {
    return newDate(date) >= newDate('2019-01-01T00:00:00+09:00')
  },

  calc(amount, { dependents } = {}) {
    const item = table.data.find(x => x.start <= amount && amount < x.end)

    if (dependents >= 0)
      return [
        item.dependents0,
        item.dependents1,
        item.dependents2,
        item.dependents3,
        item.dependents4,
        item.dependents5,
        item.dependents6,
        item.dependents7
      ][dependents - 1]

    return item.unknown
  }
}
