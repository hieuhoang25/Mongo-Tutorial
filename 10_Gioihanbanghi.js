use mydb
//9. Giới hạn bản ghi 
//1.Phương thức limit()
// => để giới hạn bản ghi, phương thức limit() nhận 1 tham số ở dạng kiểu số, là số doc mà muốn hiển thị cái đầu
//Syntax:
//db.COLLECTION_NAME.find().limit(Number)
db.movie.find().limit(2)
//2.Phương thức skip()
//=> phương thức skip() cũng nhận 1 tham số ở dạng số và đc dử dụng để nhảy qua số doc chỉ định
//Syntax: 
//>db.COLLECTION_NAME.find().limit(NUMBER).skip(number)
db.movie.find({},{}).limit(2).skip(1)
//Giai thích ví du: nó chỉ hiện doc thử hai có bỏ qua tk thưs 1 thực hiện limit
//Note: Mạc định phương thúc skip() la 0