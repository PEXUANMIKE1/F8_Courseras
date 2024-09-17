/*


DOM (Document Object Model)

- Có 3 thành phần:
  1. Element: Là các thẻ tag: h1,head,body,div,img,a,p,.... 
    có thể lấy element thông qua ID,Class, Tag, CSS selector,HTML collection
  2. Attribute: Là các thuộc tính bên trong Element id,class,title,src,hrf,...
  3. Text: Là Text

- Node : nó là các phần tử Element, Attribute, Text trong DOM


*/

//1. Xử lý class trong element: element.classList.add/remove/toggle/contains

// lấy h1 và lưu vào h1Element
//var element = document.querySelector('.a_class')
//h3Element.innerText = 'Học Javascript cơ bản tại F8'
// Object.assign(element.style, {
//   border: '1px solid green',
//   textAlign: 'center',
//   width: '60px',
//   backgroundColor: 'yellow'
// })
//element.classList.add('red')
// element.classList.remove('red')
// setInterval(() => {
//   element.classList.toggle('red')
// }, 400)

//2. DOM events
var listDivElement = document.querySelectorAll('div')
listDivElement.forEach((item)=>{
  item.onclick = function(e){
    console.log(e.target)
  }
})
/*
onchange : sẽ thực thi khi có sự thay đổi value
    (xác nhận thay đổi khi không target đến input nữa)
oninput : thực thi ngay sau khi thay đổi, gõ đến đâu thực thi 
      ngay đến đó

*/