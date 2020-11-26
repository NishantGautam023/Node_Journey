const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/development', {useNewUrlParser: true,
useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log(`We are connected to DB :: mongoDB`)
});

module.exports = db;