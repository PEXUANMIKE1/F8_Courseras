/*
- Bind() Là phương thức được define trong func contructor
- Được kế thừa từ thằng func.prototype
- Bind method khác với call, apply ở chỗ là:
   + Trả ra hàm mới với 'this' tham chiếu tới thisArg
   + k thực hiện gọi hàm
   + nếu đc bind kèm đối số 'arg1, arg2, ...(value1,value2)' thì các đối ố này sẽ đc ưu tiên hơn
      khi thêm đối số ở func gọi sau đó
    
    vd: const newFnc = fn.bind(thisArg, arg1, arg2, ...) các đối số ở đây sẽ được ưu tiên hơn
        newFnc(arg3, arg4, ...) các đối số ở đây nếu cùng được thêm các đối só
*/
//  + Dùng Bind để ràng buộc thuộc tính
    const customer = {
    firstName: "Đình",
    lastName: "Quang",
    }
    const user2 = user.getFullName.bind(customer)
    console.log(user2())

//  + ứng dụng
//  vd1:
    const button = document.querySelector('button')
    button.onclick = user.getFullName.bind(user);
//  vd2:
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const app = (() => {
      const cars = ['BMW','Mercerdes','Audi','Hyndai']
      const root = $('#root')
      const input = $('#input')
      const submit = $('#submit')
      return {
        add(car){
          cars.push(car)
        },
        delete(index){
          cars.splice(index,1)
        },
        render(){
          const html = cars.map((car,index) =>`
              <li>
                  ${car}
                  <span class="delete" data-index="${index}">&times</span>
              </li>
          `)
          .join('')
          root.innerHTML = html
        },

        handleDelete(e){
          const deleteBtn = e.target.closest('.delete')
          if(deleteBtn){
            const index = deleteBtn.dataset.index
            this.delete(index)
            this.render()
          }
        },
        
        init(){
          // Handle DOM events
          submit.onclick = () => {
            const car = input.value
            if(!car) {
              console.log("Bạn chưa nhập thông tin");
              input.focus()
              return
            }
            this.add(car)
            this.render()

            input.value = null
            input.focus()
          }

          root.onclick = this.handleDelete.bind(this)

          this.render()
        }
      }
    })();
    app.init()

