var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://killer:Killer@1230@cluster0.2h8a2.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});