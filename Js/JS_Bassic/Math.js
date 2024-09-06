/*

Lession : Math object

  - Math.PI : số pi
  - Math.round() : làm tròn số
  - Math.abs() : trị tuyệt đối
  - Math.ceil() : làm tròn trên
  - Math.floor() : làm tròn dưới
  - Math.random() : 
  - Math.min() :
  - Math.max() :
*/

// console.log(Math.PI);
// console.log(Math.round(1.6));
// console.log(Math.abs(-4));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(1.9));

//console.log(Math.random());
//console.log(Math.floor(Math.random()*20));
// var random = Math.floor(Math.random()*5);
// var gif = ['gif 1', 'gif 2', 'gif 3', 'gif 4', 'gif 5']
// console.log(gif[random]);
//Tỉ lệ
  // var random = Math.floor(Math.random()*100);

  // if(random < 5){
  //   console.log("Bạn là người may mắn trong 5%");
  // }

// console.log(Math.min(1,5,16,24,4,25,12))
var getRandomItem = function(arr){
  const randomIndex = Math.floor(Math.random()*arr.length);
  return arr[randomIndex];
}
var arr = ["a","m","c","v","w","t"]

console.log(getRandomItem(arr))