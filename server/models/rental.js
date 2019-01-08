const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RentalSchema = new Schema({
    title: {
        type: String,
        es_type: 'text',
        required: true,
        max: [120, 'Too many characters, maximum is 120'],
    },
    city: {
        type: String,
        es_type: 'text',
        required: true,
        lowercase: true
    },
    street: {
        type: String,
        es_type: 'text',
        required: true,
        min: [4, 'Too short, minimum is 4 characters']
    },
    category: {
        type: String,
        es_type: 'text',
        required: true,
        lowercase: true
    },
    image: {
        type: String,
        es_type: 'text',
        required: true
    },
    bedrooms: {
        tyoe: Number
    },
    shared: Boolean,
    description: {
        type: String,
        es_type: 'text',
        required: true
    },
    dailyRate: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Rental', RentalSchema);
