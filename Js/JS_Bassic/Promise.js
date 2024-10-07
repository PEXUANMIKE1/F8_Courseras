//Promise sinh ra để khắc phục cái lỗi callback hell
//dùng để xử lý bất đồng bộ/đồng bộ
//Promise có 3 trạng thái
// 1. Pending: Khi promise không trả về resolve/reject
// 2. Fulfilled: Khi trả về resolve
// 3. Rejected: Khi trả về reject

/* 
var promise = new Promise(
  function(resolve, reject){
    //logic
    //Thành công: resolve()
    //Thất bại: reject()

    // resolve({
    //   StatusCode: 200,
    //   Message: 'Success',
    //   Data:{
    //     name: 'Vũ Phi Trường',
    //     age: 22
    //   }
    // });
    resolve();
  }
)
promise
  .then(()=>1) //then sẽ bắt resolve (thành công)
  .then((data)=>{
    console.log(data)
    return 2
  }) 
  .then((data)=>{
    console.log(data)
    return 3
  })
     //nếu có thêm then thì sẽ nhận được return của then trước
     // nếu then trước k return thì then sau vẫn sẽ chạy nhưng k có data return
  .catch((error)=>console.log(error))//catch sẽ bắt reject (thất bại)
  .finally(()=>console.log('Kết thúc'))

---------------------------------------------------------------------------------
# Giải quyết vấn đề callback hell
VD1: hiển thị ra 1,2,3 sau mỗi 1s
      

  function sleep(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
  }

  sleep(1000)
  .then(()=>{
    console.log(1)
    return sleep(1000)
  })
  .then(()=>{
    console.log(2)
    return sleep(1000)
  })
  .then(()=>{
    console.log(3)
    return sleep(1000)
  })
  .then(()=>{
    console.log(4)
    return sleep(1000)
  })  



---------------------------------------------------------------------------------
VD2: Ví dụ cụ thể hơn về callback hell
      in ra 5 với việc cộng dồn 5 lần 5 hàm với điều kiện
      giá trị khởi tạo là 1 và hàm sau sẽ bằng kq hàm trước + 1

  function hell(value, cb) {
    cb(value); 
  }

  // Không sử dụng Promise dẫn đến tạo ra callback hell 
  hell(1, function (valueFromA) {
    hell(valueFromA + 1, function (valueFromB) {
      hell(valueFromB + 1, function (valueFromC) {
        hell(valueFromC + 1, function (valueFromD) {
          console.log(valueFromD + 1);
        });
      });
    });
  });

  // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
  function notHell(value) {
    return new Promise(function (resolve) {
      resolve(value);
    });
  }

  notHell(1)
    .then(function (value) {
      console.log('value', value)
      return value + 1;
    })
    .then(function (value) {
      console.log('value', value)
      return value + 1;
    })
    .then(function (value) {
      console.log('value', value)
      return value + 1;
    })
    .then(function (value) {
      console.log('value', value)
      console.log(value + 1);
    });

---------------------------------------------------------------------------------
VD3: VD:Mô phỏng bình luận bài viết
- Table 
 + Users: Id, userName
 + Comments: Id, user_Id, content
*/

//Fake database
var users = [{
  id: 1,
  userName: 'Vũ Phi Trường'
},
{
  id: 2,
  userName: 'Vũ Thị Tuyết Măng'
},
{
  id: 3,
  userName: 'Trịnh Đình Quang'
}]

var comments = [{
  id: 1,
  user_Id: 1,
  content: 'Sao ảnh hơi mờ nhỉ :v'
},
{
  id: 2,
  user_Id: 2,
  content: 'Mờ chỗ nào vậy bạn ??'
},
{
  id: 3,
  user_Id: 1,
  content: 'Mờ lemmm... :>'
},
{
  id: 4,
  user_Id: 3,
  content: 'WTF??'
}]

function getComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (comments.length > 0) {
        return resolve(comments)
      }
      return reject(new Error('Error 404: Comment not found!'))
    }, 500)
  })
}
function getUsersByIds(UserIds) {
  return new Promise((resolve, reject) => {
    var result = users.filter(user => UserIds.includes(user.id));
    setTimeout(() => {
      if (result.length > 0) {
        return resolve(result)
      }
      return reject(new Error('Error 404: User not found!'))
    }, 500)
  })
}

getComments()
  //lấy ra list user_Id từ comments
  .then(comments => {
    var userIds = comments.map(cmt => cmt.user_Id)
    return userIds
  })
  //từ list userId Lấy ra list users tương ứng
  .then(userIds => {
    return getUsersByIds(userIds)
  })
  //tạo ra 1 data mới bao gồm cả comment và user đã comment
  .then(users => {
    return {
      comments: comments,
      users: users
    }
  })
  //xử lý data
  .then(data => {
    var cmtBlock = document.querySelector('#cmt-list');
    var resultHTML='';
    data.comments.forEach(comment => {
      var user = data.users.find(user => user.id === comment.user_Id)
      resultHTML += `<li>${user.userName}: ${comment.content}</li>`
    });
    cmtBlock.innerHTML = resultHTML;
  })
