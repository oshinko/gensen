export function newDate(date) {
  return date === undefined ? new Date() : new Date(date)
}

export function range(stop) {
  return Array(stop).keys()
}
