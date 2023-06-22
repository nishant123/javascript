//Inserting data in mongo db

 use harrykart


db.items.insertOne({ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 })


db.items.insertMany({ name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98 }, { name: "moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598 })

db.items.find({ rating: 3.5 })
