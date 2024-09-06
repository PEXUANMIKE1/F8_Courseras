/*  Lession : this
*/
  this.firstName = "Phi"
  this.lastName = "Trường"

  const user = {
    firstName: "Tuyết",
    lastName: "Măng",
    getFullName(){
      console.log(`${this.firstName} ${this.lastName}`)
    }
  }
  //Case 1:
    console.log(user.getFullName()) // Tuyết Măng (this ở đây sẽ là user)
  //Case 2: 
    const user2 = user.getFullName //gán hàm getFullName vào hàm user2 
                                //(cả 2 hàm đều trỏ tới vị trí lưu trữ hàm getFullName)
    console.log(user2()) //result = Phi Trường : vì hàm user2 được gọi trực tiếp không thông 
                        //qua đối tượng nào nên mặc định sẽ là đối tượng global gọi


//*Lưu ý: arrow func khác với func thường ở chỗ là arrow func không có this của riêng nó nên 
//nếu có khai báo this trong arrow func thì nó sẽ lấy this của scope bên ngoài nó.
//Ngoài ra arrow func cũng k thể dùng arguments như trong func