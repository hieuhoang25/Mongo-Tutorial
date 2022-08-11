use mydb
//Bài 18: Relationship trong MongoDB
//Relationship trong MongoDB tượng trưng cho cách các document có mối liên quan với nhau. Relationshop có thể được mô hình hóa thông qua phương thức Embeded(Nhúng) và Referenced. Những Realationship là 1:1, 1:N, N:1 hoặc N:N
db.user.insert({
   "name": "Tom Hanks",
   "contact": "987654321",
   "dob": "01-01-1991"
})
db.adress.insertMany([{
   "building": "22 A, Indiana Apt",
   "pincode": 123456,
   "city": "Los Angeles",
   "state": "California"
},
{
         "building": "170 A, Acropolis Apt",
         "pincode": 456789,
         "city": "Chicago",
         "state": "Illinois"
  }
])
//1. Mô hình hóa Embeded(Nhúng) Relationships
db.user.insert({
"contact": "987654321",
   "dob": "01-01-1991",
   "name": "Tom Benzamin",
    "address": [
      {
         "building": "22 A, Indiana Apt",
         "pincode": 123456,
         "city": "Los Angeles",
         "state": "California"
      },
      {
         "building": "170 A, Acropolis Apt",
         "pincode": 456789,
         "city": "Chicago",
         "state": "Illinois"
      }]
})