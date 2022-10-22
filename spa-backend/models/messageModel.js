const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
    },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;