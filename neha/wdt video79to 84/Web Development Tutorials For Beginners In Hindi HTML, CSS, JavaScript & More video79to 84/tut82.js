//searching for data in mongo db

use harrykart

//this query will return give you all the objects with rating equal to  3.5
db.items.find({ rating: { $gte: 3.5 } })
db.items.find({ rating: { $gt: 3.5 } })

//and operator
db.items.find({ rating: { $gte: 3.5 }, price: { $gt: 4000 } })
db.items.find({ $or: [{ rating: { $lt: 3.5 } }, { price: { $gt: 120000 } }] })


db.items.find({ rating: { $gt: 3.5 } }, { rating: 1 })