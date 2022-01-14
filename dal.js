// DAL
// If you change the data store away from MongoDB then you will have to update this file

// Package Requirements
var MongoClient = require('mongodb').MongoClient;
var url         = 'mongodb+srv://jnm917:9513@jeffmizner.odj70.mongodb.net/moneybin?retryWrites=true&w=majority:27017';
var db;

// Connect to Mongo
// changed client to 'database'
MongoClient.connect(url, function(err, client) {
    if(err) {
        console.log('Failed to connect to the Moneybin database: ' + err);
        return;
    }
    
    // Connect to moneybin database  
    db = client.db('moneybin');

    console.log("Connected successfully to Moneybin database");
});

// Function for creating a user in the mongo database
function create(name, email, password, userID) {
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc        = {name, email, password, userID, balance: 0, activity: []};
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

// Get Balance function
function getBalance(userID) {
    return new Promise((resolve, reject) => {
        const customer = db
            .collection('users')
            .find({"userID": userID})
            .toArray(function(err,user) {
                err ? reject(err) : resolve (user);
            });
    })
}

// Change Balance function
function changeBalance(userID, newBalance) {
    return new Promise((resolve, reject) => {
        const customer = db
            .collection('users')
            .updateOne({"userID" : userID}, {$set : {"balance" : newBalance}})
            .then((result) => {
                console.log(result)
                resolve(result)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            });
    })
}

// Update Activity Function
function updateActivity(userID, activityDate, activityTime, activityType, activityAmount, activityBalance) {
    return new Promise((resolve, reject) => {
        const customer = db
            .collection('users')
            .updateOne({"userID" : userID}, {$push : {"activity" : {"date" : activityDate, "time" : activityTime, "type" : activityType, "amount" : activityAmount, "balance" : activityBalance}}})
            .then((result) => {
                console.log(result)
                resolve(result)
            })
            .catch((err) => {
                console.log(err)
                reject(err)
            });
    })
}

// Function for outputting all user data
function all() {
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err,docs) {
                err ? reject(err) : resolve(docs);
        });
    })
}

// Exporting the functions to use in the Express App
module.exports = {create, getBalance, changeBalance, updateActivity, all};