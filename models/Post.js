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

const EmailSubscription = mongoose.Schema({
  email: {
    type: String,
    require: true
  }
})

let Reservations = mongoose.model('Reservations', ReservationSchema)
let Emails = mongoose.model('Email', EmailSubscription)

module.exports = {Reservations, Emails}