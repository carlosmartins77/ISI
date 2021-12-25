const { ObjectId } = require('bson');
const mongoose = require('mongoose');

//const { boolean } = require('webidl-conversions');

const StaffSchema = mongoose.Schema({
    staff_key: {
        type: Number
    },
    staff_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    active: {
        type: Number,
        required: true
    },
    store_key: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('staff', StaffSchema);