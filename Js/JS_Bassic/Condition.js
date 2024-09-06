//lession: lệnh rẽ nhánh, toán tử 3 ngôi

//  var date = 4;
//  date === 2 ? console.log("Hôm nay là thứ 2") :
//  date === 3 ? console.log("Hôm nay là thứ 3") : 
//  date === 4 ? console.log("Hôm nay là thứ 4") : 
//  date === 5 ? console.log("Hôm nay là thứ 5") : 
//  date === 6 ? console.log("Hôm nay là thứ 6") : 
//  date === 7 ? console.log("Hôm nay là thứ 7") : 
//  date === 8 ? console.log("Hôm nay là chủ nhật") : "Error";

// var run = function(a){
//   var result ;
//   a % 15 === 0 ? result = 3 :
//   a % 5 === 0 ? result = 2:
//   a % 3 === 0 ? result = 1 : result = 0;
//   return result;
// }
// console.log(run(30));

// switch(date){
//   case 2:
//     console.log("Hôm nay là thứ 2");
//     break;
//   case 3:
//     console.log("Hôm nay là thứ 3");
//     break;
//   case 4:
//     console.log("Hôm nay là thứ 4");
//     break;
//   case 5:
//     console.log("Hôm nay là thứ 5");
//     break;
//   case 6:
//     console.log("Hôm nay là thứ 6");
//     break;
//   case 7:
//     console.log("Hôm nay là thứ 7");
//     break;
//   case 8:
//     console.log("Hôm nay là chủ nhật");
//     break;
//   default:
//     console.log("không biết");
// }

// var number = 3;
// switch (number) {
//   case 2:
//   case 4:
//   case 6:
//   case 8:
//     console.log("là số chẵn trong khoảng 1-10");
//     break;
//   case 3:
//   case 5:
//   case 7:
//   case 9:
//     console.log("là số lẻ trong khoảng 1-10");
//     break;
//   default:
//     console.log("Số này nằm ngoài dãy 1-10");
// }

// Toán tử 3 ngôi - Ternary operator 

var course = {
  name : 'Javascript',
  coin : 250
}
var result = course.coin > 0 ? `${course.coin} Coins`: "Free"
console.log(result)
