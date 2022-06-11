import table from './2019-01-01.csv'

export default function (income, { dependents } = {}) {
  console.log(`# 給与 (社会保険料等控除後): ¥${income.format()}`)

  const item = table.data.find(x => x.start <= income && income < x.end)

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
