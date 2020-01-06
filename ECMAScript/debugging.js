const myArr = [[1,2], [3,4], [5,6]]
const flattened = myArr.reduce((accum, arr) => {
  debugger
  return accum.concat(arr)
}, [])