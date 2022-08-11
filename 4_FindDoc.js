db.getCollection("products").find({})
db.products.insert({
    name:"hieu",
    profile:{
        mark:10
    }
    ,
    luangues:[
        "english","vietnamese"
    ]
})
//nen su dung "key"
db.products.find({"profile.mark":10})
db.products.find({"$language":{$size: 2}})
//db.products.insertMany([{
//   title: 'MongoDB Overview', 
//   description: 'MongoDB is no sql database',
//   by: 'tutorials point',
//   url: 'http://www.tutorialspoint.com',
//   tags: ['mongodb', 'database', 'NoSQL'],
//   likes: 100
//},
//{
//   title: 'NoSQL Database', 
//   description: 'NoSQL database doesn\'t have tables',
//   by: 'tutorials point',
//   url: 'http://www.tutorialspoint.com',
//   tags: ['mongodb', 'database', 'NoSQL'],
//   likes: 20, 
//   comments: [  
//      {
//         user:'user1',
//         message: 'My first comment',
//         dateCreated: new Date(2013,11,10,2,35),
//         like: 0 
//      }
//   ]
//}
//])
db.products.find({"comments.user":"user1"})
//Note: Query Null
//Syntax:
//1. db.user.find({last_login:null})
//2. db.user.find({last_login:{$exits:false}})
db.products.find({comments:null})
db.products.find({comments:{$exists:false}})