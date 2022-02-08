const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StatisticsSchema = new Schema({
    pid: {
        type: String,
        required: false,
    },
    utm_id: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: false
    }

}, {
    collection: 'statistics',
    versionKey: false //here
});

module.exports = mongoose.model('statistics', StatisticsSchema, 'statistics');

