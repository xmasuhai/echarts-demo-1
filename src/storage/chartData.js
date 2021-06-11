let n = 0
let m = 0

export function createKey() {
  n += 1
  return `2021-6-${n}`
}

export function createValue() {
  m += 1
  return m
}

export default {
  dateList: [createKey(), createKey(), createKey(), createKey(), createKey()],
  valueList: [createValue(), createValue(), createValue(), createValue(), createValue()]
}
