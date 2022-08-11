use mydb
//Bài 7: Xóa Document
//1. Phương thức remove()
//=> sử dụng để xóa doc từ collection.phuong thức remove() nhận 2 tham số:
// tham số 1: deletion criteria: tùy ý xác định doc để xóa
// tham số 2: justOne: (Tùy ý) nều đc thiết lập là true hoặc 1 m thì chỉ xóa 1 doc
db.movie.find()
db.movie.remove({name:"Bia Hà Nội"})
db.movie.find()
//Mô tả: delete from movie where name="Bia Hà Nội"
//Chỉ xóa 1 document
//Syntax:
//>db.COLLECTION_NAME.remove(DELECTION_CRIRERIA, 1)
// 3. Xóa tất cả các Doc
//Syntax:
//> db.mycol.remove()
db.products.remove()
db.products.find()
