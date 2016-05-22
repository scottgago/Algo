const mongoose = require('mongoose');
mongoose.connect('mongodb://scottgago:mks38@ds011883.mlab.com:11883/dstrkt');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected")
});