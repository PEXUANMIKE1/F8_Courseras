
/* 
  - Call method cũng thực hiện bind 'this' với 'thisArg' giống bind method bình thường nhưng call sẽ thực hiện gọi hàm 
    (Khác với bind, bind sẽ tạo hàm mới và k gọi lại hàm)
  -  Nhận các đối số cho hàm gốc từ ' arg1, arg2, ...'
  
  VD: fnc.call(thisArg, arg1, arg2, ...)

*/

  'use strict'
  this.firstName = "Phi"
  this.lastName = "Trường"

  function getFullName(){
    console.log(`${this.firstName} ${this.lastName}`)
  }

  getFullName.call(this)

//  -- call được dùng để thể hiện tính kế thừa
  function animal(name, weight){
    this.name = name;
    this.weight = weight;
  }

  function dog(name, weight, legs, sound){
    animal.call(this, name, weight)
    this.legs = legs;
    this.sound = sound;
  }

  const myDog = new dog("3 que", 60, 2, "gau gau")
  console.log(myDog)

//  -- Mượn hàm (Func Borrowing) vd với arguments

  function Logger(){
    const arr = [...arguments]
    console.log(arr)
  }

  Logger(1,2,3,4,5)
