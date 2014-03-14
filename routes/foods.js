/**
 * Created by danx on 14-03-14.
 */

var mongo = require('monogodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('fooddb', server, {safe: true});

db.open(function(err,db){
    if(!err){
        console.log("Connected to 'fooddb' database");
        db.collection('foods', {safe: true}, function(err, collection){
            if(err){
                console.log("The 'food' collection doesn't exist.")
                populateDB();
            }
        });
    }
})

exports.GetRandomFood = function(req, res){
    console.log('Getting random food');
    db.collection('foods', function(err, collection){
        collection.find().toArray(function(err, items){
            var food = items[RandomNummber()];
            res.send(food);
        })
    })
}

var RandomNummber = function(){
    var num = Math.floor(Math.random() * 3) + 1;
    return num;
}




var populateDB = function() {

    var foods = [];

    db.collection('foods', function(err, collection) {
        collection.insert(foods, {safe:true}, function(err, result) {});
    });

};