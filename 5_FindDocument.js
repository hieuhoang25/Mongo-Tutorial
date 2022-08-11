// Bài 1: Truy vấn Document 
//1. Syntax: > db.COLLECTION_NAME.find() => sẽ hiện tất cả các doc ở dạng ko có cấu trúc
use mydb
db.movie.find()
//2 .Phương thức pretty() 
//Syntax: > db.mycol.find().pretty() = > hiển thị đẹp hay còn gọi đúng định dạng
db.movie.find().pretty()
//3. Phương thức findOne()
db.movie.findOne()
// Các mệnh đề where trong find() 
//a. Equality : So sánh bằng
// Syntax: {<key>:<value>}
db.movie.find({name:'Coca'}).pretty()
//b. Less Than : bé hơn
//Syntax: {<key>: {$lt:<value}}
db.movie.find({quality: {$lt:150}}).pretty()
//c. Less Than Equals: bé hơn hoặc bằng 
//Syntax: {<key>: {$lte:<value>}}
db.movie.find({quality: {$lte:100}}).pretty()
//d. Greater Than : lớn hơn
//Syntax: {<key>: {$gt:<value>}}
db.movie.find({quality: {$gt:50}}).pretty()
//e. Greate Than Equals: lớn hơn hoặc bằng
//Syntax: {<key>: {$gte:<value>}}
db.movie.find({quality:{$gte:50}}).pretty()
//g. Not Equals: Không bằng
//Syntax: {<key>:{$ne:<value>}}
db.movie.find({quality:{$ne:100}}).pretty()
//4. And trong Mongo
//Syntax: nếu truyền nhiều key thì cần phân biêt chúng bới dấu phẩy ,
// db.mycol.find({key1:value1,key2:value2}).pretty()
db.movie.find({name:'Coca',quality: 100 })
//5. Or trong Mongo
//Syntax: Để truy vấn điều kiện OR, bạn cần sử dụng từ khóa $or 
//> db.mycol.find({
//    $or:[{key1:value1},{key2:value2}]
//}).pretty()
db.movie.find({$or:[{name:'Coca'}, {name:'Pepsi'}]})
//6. Sử dụng and or cùng nhau
db.movie.find({name:"Coca", $or:[{quality:100},{price:"1900"}]})
