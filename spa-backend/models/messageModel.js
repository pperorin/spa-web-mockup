const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    text: {
        type: String,
    },
});


const Message = mongoose.model('Message', messageSchema);

module.exports = Message;