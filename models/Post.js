const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  phoneNumber: {
    type: Number,
    require: true
  },
  email: String
})

module.exports = mongoose.model('Reservations', ReservationSchema)