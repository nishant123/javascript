show dbs
use harrykart
show collections

db.items.find({ price: 22000 })

//deleting the items from the mongo database
db.items.deletOne({ price: 22000 })
//deleteone will delete the matching document entryand will delete the first entry in case of multi document match

db.items.deleteMany({ price: 129000 })