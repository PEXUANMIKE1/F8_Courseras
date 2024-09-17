//String.includes()

var string = 'Hello World'
console.log(string.includes('World'))
// trả về true vì string chứa 'World'
console.log(string.includes('w',2))
// trả về false vì tính từ phần tử thứ 2 không có từ H nào
// Đặc biệt: có phân biệt chữ hoa chữ thường


//Array.includes()
var arr = [1,2,3,4,5]
console.log(arr.includes(6)) //false
console.log(arr.includes(3,2)) //true