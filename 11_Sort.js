use mydb 
//Bài 11: Sắp xếp bản ghi 
//1.Phương thức sort()
//=>nhận 1 doc chứa ds các trường cúng thự tự sắp xếp chung
//Syntax:
//> db.COLLECTION_NAME.find().sort({<key>:1})
//Chu thich: key: 1 hoặc -1
// 1: thứ tự tăng dần
//-1: thự tụ giảm dần
db.movie.find({}).sort({name:1, price:-1})
//Giai thích: select all orderby name,price desc, ai được viết trc thì sắp xếp trc