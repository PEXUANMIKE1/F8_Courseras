/*

  Lession : vòng lặp - Loop

1. for - Lặp với đk dúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của dối tượng
4. while - Lặp khi đk đúng
5. do/while - lặp ít nhất 1 lần qua khối do, sau đó lặp tiếp nếu điều kiện đúng

*/
//VD1:
// var loop = function(n){
//   for(var i = 1; i <= n ; i++){
//     console.log(i);
//   }
// }
// loop(100);

//VD2:
// function getRandNumbers(min, max, length){
//   let arr = []
//   for(var i = 0; i < length; i++){
//     arr[i] = Math.floor(Math.random() * (max - min) + min)
//   }
//   return arr
// }
// console.log(getRandNumbers(1,10,15))

//VD3:
// function getTotal(arr) {
//   var sum = 0;
//   var arrLength = arr.length;
//   for(var i = 0; i < arrLength; i++){
//       sum += arr[i]
//   }
//   return sum
// }
// console.log(getTotal([1, 2, 3]))

//VD4: For in
// function run(object) {
//   var arr = []
//   for(var key in object){
//     arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
//   }
//   return arr
// }

// console.log(run({ name: 'Nguyen Van A', age: 16 }));

//VD5: For of

//


