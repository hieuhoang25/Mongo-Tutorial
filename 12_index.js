use mydb
//Bài 12: Chỉ mục (index) 
//=> Chỉ mục hỗ trợ việc phân giải các truy vấn hiệu quả hơn.
//=> Nếu ko có chỉ mục, MongoDB phải quét qua mọi Doc của 1 collection để chọn các document mà kết nối với lệnh truy vấn=>Việc quét này ko có hiệu quả và yêu cầu MongoDB xử lý 1 sl lơn dữ liệu
//=> Chỉ mục (Index) là cấu trúc dữ liệu đặc biệt, lưu giữ một phần nhỏ của tập hợp dữ liệu
//=> Giups việc vọc vào Collection một cách dễ dàng hơn.
//=> Chỉ mục lưu giữ giá trị của một trường cụ thể hoặc tập hợp các trường, được sắp xếp bới giá trị của trường như để đc xác định trong chỉ mục./
//1. Phương thức ensureIndex() 
//Syntax:
//>db.COLLECTION_NAME.ensureIndex({<KEY>:1})
//Ở đây, key là tên của trường mà bạn muốn tạo chỉ mục và 1 cho là thứ tự tăng dần. Để tạo chỉ mục thứ tự giảm dần, bận sử dụng -1
db.products.ensureIndex({item:1})
db.movie.ensureIndex({name:1, price: -1})
db.sanpham.remove({item:"pen"})
db.sanpham.insert({
    "item" : "pen",
    "qty" : NumberInt(50),
    "type" : "no.2"
}
)
db.sanpham.createIndex( { "item": 1 }, { unique: true } ) //khóa chính
