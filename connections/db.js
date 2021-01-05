
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoDB = 'mongodb://127.0.0.1:27017/marsrover';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set('debug', true);
mongoose.connection
  .once('open', () => console.log('Mongodb running'))
  .on('error', err => console.error(err));

module.exports = mongoose;