var mongoose = require('mongoose');

mongoose.connect("mongodb:admin_password@127.0.0.1:27017/?authSource=admin", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => console.log('Database connection successful!'));

module.exports = mongoose;