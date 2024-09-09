/*
Array.prototype.reduce2 = function (callback, result) {
  let i = 0
  if (arguments.length < 2) {
    result = this[0]
    i = 1
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this)
  }
  return result
}

const numbers = [1, 2, 3, 4, 5]

const result = numbers.reduce2((total, number) => total + number)
console.log(result)
*/

function arrToObj(arr) {
  return arr.reduce((result, itemArr) => {
    result[itemArr[0]] = itemArr[1]
    return result
  }, {})
}
// Expected results:
var arr = [
  ['name', 'Sơn Đặng'],
  ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
