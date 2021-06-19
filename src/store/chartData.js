let n = 0
let m = 0

function createKey() {
  n += 1
  return `2021-6-${n}`
}

function createValue() {
  m += 1
  return m
}

let dateList = [createKey(), createKey(), createKey(), createKey(), createKey()]
let valueList = [createValue(), createValue(), createValue(), createValue(), createValue()]

export {
  m, n,
  createKey, createValue,
  dateList, valueList
}
