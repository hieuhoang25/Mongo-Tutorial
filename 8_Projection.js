use mydb 
//Bài 8: Projection trong MongoDB
//Phép chiếu 
//=> chỉ chọn dữ liệu cần thiết thay chọn toàn bộ dữ liệu của 1 doc
//cvd: nếu 1 doc có 5 field và chỉ cần chọn 3 field từ doc đó
//1.Phương thức find()
//thiết lập key: 1 và 0 : 1 là sử dụng để hiện thị trường
// 0: để ẩn trường
//Syntax: 
//>db.COLLECTION_NAME.find({},{<KEY>:1})
db.movie.find({},{name:1,_id:0})
//Giai thích: select all but name field set 1 will show, _id field set 0 will hide and other fied will hide
db.movie.find({},{name:1})