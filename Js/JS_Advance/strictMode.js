"use strict"
// var fullName = 'Nguyen Van A'

// function testFunc(){
//   var age = 18;
//   return age;
// }
// console.log(fullName)
// console.log(testFunc())
const student = {}

Object.defineProperty(student, 'age',{
  value: 22,
  writable: true,
})
student.age = 23
console.log(student)