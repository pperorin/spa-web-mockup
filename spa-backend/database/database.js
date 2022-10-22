var mongoose = require('mongoose');

mongoose.connect("mongodb://dbadmin:dbadmin_password@127.0.0.1:27017/?authSource=admin", {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {console.log("Connected to MongoDB");}).catch((err) => {console.log("Error connecting to MongoDB", err);
});
module.exports = mongoose;