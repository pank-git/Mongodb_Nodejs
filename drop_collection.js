var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://killer:Killer@1230@cluster0.2h8a2.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.dropCollection("customers", function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  });