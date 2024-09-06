

//-----------------------------------------------------------------
/*
Lession 1: object contructer - xây dựng đối tượng 
    coi obj contructor như bản thiết kế ngôi nhà
*/

const User = function (firstName, lastName, age, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
var user1 = new User("Vũ Phi", "Trường", 22, "avatar.png");
var user2 = new User("Vũ Thị Tuyết", "Măng", 22, "avatar.png");
//console.log(user1.getName());
//console.log(user2.getName());

// Examples : Tạo obj contructor Animal

var Animal = function (name, leg, speed) {
  this.name = name; // tên động vật
  this.leg = leg; //số lượng chân
  this.speed = speed; //tốc độ
}
var parrot = new Animal("Con vẹt", 2, 100)
//console.log(parrot)


//-----------------------------------------------------------------
/*
Lession 2: object prototype (basic) - nguyên mẫu đối tượng
    coi obj prototype như nguyên liệu của ngôi nhà
*/

var Animal = function (name, leg, speed) {
  this.name = name; // tên động vật
  this.leg = leg; //số lượng chân
  this.speed = speed; //tốc độ
}
 //có thể thêm phương thức bên ngoài contructor bằng prototype
Animal.prototype.type = 'Chim';

var parrot = new Animal("Con vẹt", 2, 100)
// console.log(parrot);
// console.log(parrot.type);

var Student = function(firstName, lastName){
  this.firstName = firstName,
  this.lastName = lastName
}

Student.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'