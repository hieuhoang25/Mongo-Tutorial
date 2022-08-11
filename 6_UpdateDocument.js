use mydb
//Bài 6: Cập nhật Document
//Phương thức update() hoặc save() dùng để cập nhật document trong coll.
//Note: Phương thức update(): cập nhật các giá trị trong Document đang tồn tại.
//      Phương thức save() thay thế doc đang tồn tại với Doc đã truyền trong phương thức save() đó.
//Syntax:
  // >db.COLLECTION_NAME.update(SELECTIOIN_CRITERIA, UPDATE_DATA)
  db.movie.update({name:'Coca'},{$set:{name:"Bear Sài Gòn"}}) 
 //sql: update  movie set name = "Bear sg" where name="Coca"

  // Theo mặc định, MongoDB chỉ cập nhật 1 doc đơn, để cập nahataj nhiều document, bn thiết lập tham số multi thành true
  db.movie.update({name:"Pepsi"},{$set:{name:"Bia Hà Nội"}}, {$multi:true})
 //2. Phương thức save()
 // PT save() thay thể doc đang tồn tại vơi doc mới đc truyền trong phương thức save() nay.
 //Syntax:
 //>db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})
 db.movie.save({_id:ObjectId("62f1bd2814d26b966578347d"),name:"Nước cam"})
   db.movie.find().pretty()
 