const mongoose = require('mongoose');

const VacantaSchema = mongoose.Schema({
    destination: String,
    nrNights: String,
    price: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Vacanta', VacantaSchema);