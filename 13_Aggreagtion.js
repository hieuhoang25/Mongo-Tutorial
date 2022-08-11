use mydb

//Bài 12: Aggregation sự tập hợp
//=>Các Aggregation operation xử lý các bản ghi dữ liệu và trả về kết quả đc được tính toán.
//Các phép toán tập hợp nhóm các giá trị tiuwf nhiều Doc lại với nhau và có thể thực hiện phép toán đa dạng trên dữ liệu đã đc nhóm đó trả về một kết quả duy nhất
//Trong SQL, count(*) và group by tương tự agg
//Syntax:
// > db.COLLECTION_NAME.aggregate(AGGREGATE_OPERATION)
db.news.insertMany([
{
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
},
{
   title: 'NoSQL Overview', 
   description: 'No sql database is very fast',
   by_user: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 10
},
{
   title: 'Neo4j Overview', 
   description: 'Neo4j is no sql database',
   by_user: 'Neo4j',
   url: 'http://www.neo4j.com',
   tags: ['neo4j', 'database', 'NoSQL'],
   likes: 750
},])
db.news.aggregate([{$group:{_id:"$by_user",num_tutorial:{$sum:1}}}])
//SQL: select by_user, count(*) from news group by by_user
//==============
/*
Danh sách biểu thức Agg
Biểu thức       Miêu Tả            Ví dụ
$sum            Tổng giá trị đc    db.mycol.aggregate([{$group:{_id: "$by_user"}}])
                xác định tất cả 
                doc trong coll đó
==
$avg            Tính trung bình     db.mycol.aggregate([{$group:{_id:"$by_user",num_totorial:{$avg:"$likes"}}])
                của tất cả giá trị
                đã cho từ tất cả doc
*/ 

db.news.aggregate([{$group:{_id:"$by_user",num_totorial:{$avg:"$likes"}}}])
