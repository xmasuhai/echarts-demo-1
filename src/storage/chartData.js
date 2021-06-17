export let n = 0
export let m = 0

export function createKey() {
  n += 1
  return `2021-6-${n}`
}

export function createValue() {
  m += 1
  return m
}

export let dateList = [createKey(), createKey(), createKey(), createKey(), createKey()]

export let valueList = [createValue(), createValue(), createValue(), createValue(), createValue()]
export default {
  dateList, valueList
}
