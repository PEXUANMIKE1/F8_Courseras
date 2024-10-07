var postApiURL = 'http://localhost:3000/posts';
var cmtApiURL = 'http://localhost:3000/comments';

//lấy cmt theo PostId
function getCommentsByPostId(postId) {
  return fetch(cmtApiURL + `?postId=${postId}`)
    .then(res => res.json())
    .then(data => {
      var result = '';
      data.forEach(x => {
        result += `
        <li class="cmt-item-${x.id}">
          - ${x.text}
          <button type="button" onclick="HandleDeleteCmt('${x.id}', event)" >&times;</button>
        </li>
        `;
      });
      return result;
    });
}

// xử lý xóa bình luận
function HandleDeleteCmt(id, event) {
  deleteComment(id);
  var itemCmt = document.querySelector('.cmt-item-' + id);
  itemCmt.remove()
}

// xử lý thêm bình luận mới
function handleInput() {
  var postList = document.querySelector('#post-list');
  postList.addEventListener('click', function (event) {
    //kiểm tra xem phần tử được nhấp vào có phải là nút btn hay k
    if (event.target && event.target.classList.contains('cmtBtn')) {
      //tìm phần tử chứa bài viết gần nhất để đảm bảo chọn đúng bài viết để lấy đúng post_Id
      var postElement = event.target.closest('li');

      //rồi từ element của bài viết đó lấy ra id và cmt
      //làm như vậy sẽ lấy ra chính xác những gì mong muốn
      var input = postElement.querySelector('.comment-input').value
      var postId = postElement.querySelector('.post-id').value
      var userId = 1

      //kiểm tra ô input đã nhập cmt
      if (input.trim() !== '') {
        var data = {
          userId: userId,
          text: input,
          postId: postId
        }
        postComment(data)
        //console.log(data)

        //input = ''
      }
    }
  })

}


// Xử lý gửi request thêm bình luận mới
async function postComment(data) {
  var res = await fetch(cmtApiURL, {
    method: 'POST',

    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.json();
}
// Xử lý gửi request xóa bình luận
function deleteComment(id) {
  fetch(cmtApiURL + '/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
}

// posts and comment fetch
async function getPosts() {
  const res = await fetch(postApiURL);
  const data = await res.json();

  var html = '';
  for (var post of data) {
    var cmtList = await getCommentsByPostId(post.id);// Chờ kết quả từ hàm bất đồng bộ
    html += `
      <li>
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p><b>Views</b>: ${post.views}</p>
        <div class="comment-block">
          <b>Comment</b>:
          <hr>
          <ul class="cmt-list">
            ${cmtList}
          </ul>
          <hr>
          <input type="hidden" class="post-id" value="${post.id}"></input>
          <input type="text" class="comment-input" placeholder="Add a comment..." />
          <button class="cmtBtn">></button>
        </div>
      </li>
    `;
  }
  document.querySelector('#post-list').innerHTML = html;
  handleInput();
}

getPosts();