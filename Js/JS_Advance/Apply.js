/*
  - Apply method nó là Call nhưng truyền đối số dưới dạng mảng []
    VD: fnc.call(thisArg, [arg1, arg2, ...] )


VD1: ứng dụng bình thường
  const teacher = {
    firstName: 'Huấn',
    lastName:'Hoa Hồng'
  }

  function greet(greeting, message){
    return `${greeting} ${this.firstName} ${this.lastName}, ${message}`
  }

  let result = greet.apply(teacher,["Em chào anh", "Anh đang làm gì vậy"])
  console.log(result)

  result = greet.call(teacher,"Em chào anh", "Anh đang làm gì vậy")
  console.log(result)


VD2: Mượn hàm

  const teacher = {
    firstName: 'Huấn',
    lastName:'Hoa Hồng',
    isOnline: false,
    goOnline(){
      this.isOnline = true;
      console.log(`${this.firstName} ${this.lastName} is online!`)
    },
    goOffline(){
      this.isOnline = false;
      console.log(`${this.firstName} ${this.lastName} is offline!`)
    }
  }
  const me = {
    firstName: 'Vũ Phi',
    lastName:'Trường',
    isOnline: false,
  }

  console.log('Teacher: ', teacher.isOnline)
  teacher.goOnline()
  console.log('Teacher: ', teacher.isOnline)

  //
  console.log('---------------')

  //Mượn hàm của teacher để me có thể dùng
  console.log('Teacher: ', me.isOnline)
  teacher.goOnline.apply(me)
  console.log('Student: ', me.isOnline)


VD3: Ứng dụng kế thừa (extends)
*/
function Animal(name, weight){
  this.name = name
  this.weight = weight
}

function Cat(){
  Animal.apply(this, arguments)
  this.speak = function(){
    console.log('Mèo méo meo mèo meo ...')
  }
}

const meo = new Cat("Mồn lèo",3)
//meo.speak()
console.log(meo)
