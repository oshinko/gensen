import table from './2019-01-01.csv'
import { Resolver } from '../../utils'

export default Resolver(__filename, (amount, { dependents } = {}) => {
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
})
