
//1. --- 
//2.Template Literals
//3.Multi-line string
//4.Arrow function
//5.Classes


//6.Enhanced object literals : Đối tượng nâng cao
var filedName = 'name'
var filedAge = 'age'

const Person = {
  [filedName]: 'Vũ Phi Trường', //Khai báo key động(tên key có thể thay đổi)
  [filedAge]: 22,
  gender: 'male' //khai báo cặp key-value trực tiếp
}
//console.log(Person)

//7.Default parameter values: giá trị tham số mặc định
function log(log, type = 'log') {
  console[type](log);
}
//log('Message')


//8. Destructuring : phân rã
var array = ['.Net', 'NodeJS', 'Java', 'PHP', 'Python']
var [a, b, c] = array
//console.log(a, b, c)
var car = {
  carName: 'Vinfast',
  made: 'VietNam',
  price: 1000000000,
  specifications: {
    carName: 'VF8',
    pin: 500,
    weight: 1000,
    color: 'red',
  }
};
var { made, price, carName, color } = car // muốn lấy ra phần tử nào thì phải lấy đúng tên
//console.log(made, carName, color, price)


//9. Rest parameters : tham số rest cho phép nhận 1 số lượng đối tượng
//không xác định dưới dạng 1 mảng bằng cách thêm 3 dấu chấm trước 
//tên của mảng nhận giá trị.
// -- Rest dùng để định nghĩa tham số

var [a, b, c, ...args] = array
//console.log(args)
var { carName, price, ...args } = car // muốn lấy ra phần tử nào thì phải lấy đúng tên
//console.log(args)
var { carName: parentName, specifications: { carName: childName }, desc = 'No description' } = car
//console.log(parentName, childName, desc)


//10. Spread -- khi truyền đối số
var arr1 = ["a", "b", "c"]
var arr2 = ["d", "e", "f"]
var arr3 = [...arr1, ...arr2]
//console.log(arr3)


//11.Tagged template literals

// function highlight([first, ...strings], ...values){
//   console.log('first: ',first)
//   console.log('strings: ',strings)
//   console.log('values: ',values)
// };
// var fullName = 'Vũ Phi Trường';
// var age = 22;

// highlight`My name is ${fullName}, I'm ${age} years old.`;

//Dùng reduce để nối các dữ liệu vào thành 1 chuỗi
function highlight([first, ...strings], ...values) {
  return values.reduce(
    (result, value) => [...result, `<span> ${value} </span>`, strings.shift()],
    [first]
  ).join('');
};
// mục tiêu là tạo 1 array chứa lần lượt phần tử nên
// ta phải giải cái này ra: [...result,`<span> ${value} </span>`,strings.shift()]
// vì kết quả của return sẽ là tích trữ cho lần lặp sau,
// => đó là lý do phải khởi tạo tích trữ dưới dạng mảng

var fullName = 'Vũ Phi Trường';
var age = 22;

var html = highlight`My name is ${fullName}, I'm ${age} years old.`
//console.log(html)
var htmlElement = document.querySelector('.html')
htmlElement.innerHTML = html;

//12. Modules: Import/Export
//13. Optional chaining (?.)
  //Nếu bạn nghi ngờ 1 biến k tồn tại thì dùng '?.'
  //sử đụng được với obj.arr?.[index],obj.func?.(args),obj.val?.prop


const obj = {
  name: 'Mèo',
  cat1: {
    name: 'Mèo1',
    cat2: {
      name: 'Mèo2',
      cat3: {
        name: 'Mèo3',
      }
    }
  }
}

if(obj.cat1?.cat2?.cat3){
  console.log(obj.cat1.cat2.cat3.name)
}


