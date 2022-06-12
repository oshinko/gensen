import path from 'path'

export function newDate(date) {
  return date === undefined ? new Date() : new Date(date)
}

export function Resolver(filename, calc) {
  const stem = path.basename(filename).replace(/\.[^.]+$/, '')
  const since = new Date(stem + 'T00:00:00+09:00')

  return {
    accepts({ date }) {
      return newDate(date) >= since
    },

    calc
  }
}
