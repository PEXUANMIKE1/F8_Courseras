
//Lession 1: đối tượng Date

var date = new Date(); //nếu khai báo là date = date() -sẽ là string chứ k phải 1 đối tượng date

//console.log(date);

var year = date.getFullYear();
var month = date.getMonth() + 1; //mặc định return tháng từ 0-11 nên phải cộng thêm 1
var day = date.getDate();

var getNextYear = function(){
  return date.getFullYear()+1;
}

console.log(getNextYear());

console.log(`${day}/${month}/${year}`);