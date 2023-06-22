
show dbs
use harrykart
show collections
//updation command for update a mongo query
db.items.updateOne({ name: "realme 30s" }, { $set: { price: 2000 } })