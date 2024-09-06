

//Array Method:


//Seed data
var courses = [
  {
    id: 1,
    name: 'Javascript',
    coin: 250
  },
  {
    id: 2,
    name: 'Python',
    coin: 500
  },
  {
    id: 3,
    name: 'React',
    coin: 400
  },
  {
    id: 4,
    name: 'Java',
    coin: 500
  },
  {
    id: 5,
    name: 'PHP',
    coin: 0
  },
]

/* 

 - forEach() // duyệt qua từng phần tử
    courses.forEach(function(course,index){
      console.log(`Index: ${index}`);
      console.log(`Data:`,course);
      console.log('\n')
    });


 - every() Kiểm tra lần lượt các phần tử trong mảng phải 
    thỏa mãn đk nào đó, trả về true nếu toàn bộ thỏa mãn và 
    false nếu ngc lại

    var isFree = courses.every(function(course,index){
      return course.coin === 0
    });
    console.log(isFree) //-> false vì có các phần tử có coin != 0


 - some() Kiểm tra lần lượt các phần tử trong mảng, nếu có ít nhất 1 phần tử
  thỏa mãn đk thì dừng duyệt và trả về true 
  và false nếu k có phần tử nào thỏa mãn

    var isFree = courses.some(function(course,index){
      return course.coin === 0
    });
    console.log(isFree) // true vì có ít nhất 1 phần tử có coin = 0


 - find() kiểm tra theo đk, nếu đúng thì trả về phần tử đó, sai thì undefined
        Nhưng chỉ trả về 1 phần tử trong mảng thỏa mãn
  
      var course = courses.some(function(course,index){
        return course.name === 'PHP'
      });
      console.log(course) 

 - filter() kiểm tra toàn bộ mảng và trả về toàn bộ các phần tử thỏa mãn ĐK, sai thì undefined
  
      var course = courses.some(function(course,index){
        return course.name === 'PHP'
      });
      console.log(course) 
  
 - map() duyệt qua từng phần tử và trả về dữ liệu các phần tử vào trong 1 mảng mới.
        và có thể điều chỉnh trả về theo mong muốn.

    vd1:
      function courseHandle(course,index){
        return {
          id: course.id,
          name: 'Khóa học: ' + course.name,
          coin: course.coin,
          coinText: `Giá: ${course.coin} VNĐ`,
          index: index
        }
      } 
      var newCourses = courses.map(courseHandle)
      console.log(newCourses)
  - reduce() dùng để tính tích lũy trên lần lượt các phần tử mảng
        có 4 tham số: 
              Accumulator - biến tích lũy
              CurrentValue - giá trị của phần tử đang xét trong mảng
              CurrentIndex - Index của phần tử hiện tại
              Array - Mảng đang được xử lý
    VD: tính tổng coin tất cả khóa học
      var totalCourses = courses.reduce((total, value) 
            => `${total + value.name}, `, "Khóa học: ")
      console.log(totalCourses)
*/



/*
Thực hành


VD filter()
const sports = [
  {
    name: 'Bóng rổ',
    like: 6
  },
  {
    name: 'Bơi lội',
    like: 5
  },
  {
    name: 'Bóng đá',
    like: 10
  },
]
function getMostFavoriteSport(arr) {
  return arr.filter(function (item) {
    return item.like > 5
  })
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports))
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


*/

//reduce()
//vd1: flat (làm phẳng)
var array = [-2, -1, 0, [1, 2, 3], [4, 5, 6], [7, 8, 9], 10, 11, 12]

var flatArr = array.reduce((flatOutput, arrayItem) =>
  flatOutput.concat(arrayItem), [])
console.log(flatArr)
//vd2: lấy ra khóa học và gán vào mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: 'Javascript'
      },
      {
        id: 2,
        title: 'React'
      },
      {
        id: 3,
        title: 'Angular'
      }
    ]
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1,
        title: 'PHP'
      },
      {
        id: 2,
        title: 'Python'
      },
      {
        id: 3,
        title: 'NodeJS'
      }
    ]
  }
]
let id = 0;
var newArr = topics.reduce((courses, topic) =>
  courses.concat(topic.courses), [])
  .map(course => {
    return {
      id: id++,
      title: course.title
    }
  })

console.log(newArr)







