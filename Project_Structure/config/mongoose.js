const mongoose = require('mongoose');

// provide connection to database using mongoose.connect which takes only
// 1 requirement which is our database.

mongoose.connect('mongodb://localhost/blog_development',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
} );
// we are naming it as development, since we are in development mode
// like creating a project and experimenting around it, thus calling it
// development environment. There are different environment in larger
// organizations,  like test(create a feature and want other members to test it)
//, production(user can use it)

const db = mongoose.connection;

// if error on connecting to environment;
db.on('error', console.error.bind,"error connecting to MongoDb");

// if connected
db.once('open', function() {
    console.log("Connected to DataBase :: MongoDB")
})

// to make this file usable export it
module.exports = db;
// place it in our application.