const mongoose = require('mongoose');

const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel: {
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { versionKey: false })

module.exports = mongoose.model('Subscriber', susbcriberSchema);
