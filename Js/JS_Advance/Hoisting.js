

/* 
  + var - Khi hoisting sẽ được khai báo trên đầu và được gán 
            giá trị bằng Undefined
  + funtion - khi được hoisting thì cũng được khai báo cả khối lệnh của nó

  + let, const - khi hoisting thì vẫn được khai báo nhưng không được gán giá trị
              và được đưa vào vùng tạm thời không truy cập được
              "Temproral Dead Zone"
              - const lại khác với let ở chỗ là: khi khai báo const thì giá trị của nó sẽ
                k thay đổi được sau khi gán giá trị. let thì gán giá trị mới được.
*/

//ví dụ:

console.log(age) //undefined
var age = 10 //khi chạy sẽ chỉ khai báo age, còn phần gán giá trị = 10 sẽ không được hoisting


console.log(sum(1,2)) //3
function sum(a,b){
  return a+b;
}

console.log(fullName,age) //Uncaught ReferenceError: Cannot access 'fullName' before initialization
let fullName = "Nguyen Van A" 