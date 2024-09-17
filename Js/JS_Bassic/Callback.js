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
  }
]

const cars = ['BMW', 'Toyota', 'Honda', 'Mercedes', 'Tesla']

/*
Callback

là hàm được truyền qua đối số
khi gọi hàm khác


1. là hàm
2. được truyền qua đối số

- VD1:
    function myFunc(param){
      if(typeof param === 'function'){
        param();
      }
    }
    function myCallBack(){
      console.log('Hello! This is my Callback');
    }


- VD2:
    myFunc(myCallBack)
    function sumCb(a, b) {
      return a + b
    }

    function caculate(a, b, cb) {
      if (typeof a !== 'number' || typeof b !== 'number' || typeof cb !== 'function')
        console.log('parameter incorrect format')
      else
        return cb(a, b);
    }

    console.log(caculate(1, 2, sumCb))

- VD3: viết lại phương thức map() bằng tay
    Array.prototype.map2 = function (Callback) {
      if (typeof Callback !== 'function') {
        throw new TypeError(`parameter is not a function`)
      }
      const result = [];
      for (var index in this) {
        if (this.hasOwnProperty(index)) {
          result.push(Callback(this[index], Number(index), this))
        }
      }
      return result
    }

    const output = cars.map2((car, index) => `Car ${index + 1}: ${car}`)
    console.log(output.join(',\n'))


- VD4: viết lại phương thức reduce() bằng tay
    Array.prototype.reduce2 = function (callback, result) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback is not a function')
      }
      var i = 0, lengthArr = this.length;
      if (arguments.length < 2) {
        i = 1;
        result = this[0]
      }
      for (; i < lengthArr; i++) {
        result = callback(result, this[i], i, this)
      }
      return result
    }
      
    cars.reduce((result, car, index) => {
      result += car
      console.log(index, car, result)
      return result
    },'')

- VD5: viết lại phương thức find() bằng tay
    Array.prototype.find2 = function (callback) {
      if(typeof callback !== 'function'){
        throw new TypeError('Callback is not a function')
      }
      for (var index in this) {
        if(this.hasOwnProperty(index)) {
          if (callback(this[index], Number(index), this)) {
            return this[index]
          }
        }
      }
    }

    var result = courses.find2(course => course.coin > 500)
    console.log(result) 


- VD6: viết lại phương thức filter() bằng tay
    Array.prototype.filter2 = function (callback) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback is not a function')
      }
      var result = [];
      for (var index in this) {
        if (this.hasOwnProperty(index)) {
          if (callback(this[index], Number(index), this))
            result.push(this[index])
        }
      }
      if (result.length === 0) {
        return undefined
      }
      return result
    }

    var result = courses.filter2((course, index, array) => {
      console.log(index, array)
      return course.coin > 500
    })
    console.log(result)


- VD7: viết lại phương thức some() bằng tay
    Array.prototype.some2 = function (callback) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback is not a function')
      }
      for (var index in this) {
        if(this.hasOwnProperty(index)) {
        if (callback(this[index], Number(index), this) === true) {
          return true
        }
      }
      return false
    }
  var result = courses.some2(course => course.coin > 500)
  console.log(result) 


- VD8: viết lại phương thức foreach() bằng tay
    Array.prototype.forEach2 = function (callback) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback is not a function')
      }
      for (var index in this) {
        if(this.hasOwnProperty(index))
          callback(this[index], Number(index), this)
      }
    }
    cars.length = 1000;
    cars.forEach2((car, index, array) => {
      console.log(car, index, array)
    })


- VD9: viết lại phương thức every() bằng tay
    Array.prototype.every2 = function (callback) {
      if (typeof callback !== 'function') {
        throw new TypeError('Callback is not a function')
      }
      for (var index in this) {
        if(this.hasOwnProperty(index)) {
          if(callback(this[index], Number(index), this) === false){
            return false
          }
        }
      }
      return true
    }

    var result = courses.every2(course => course.coin > 250)
    console.log(result)
*/