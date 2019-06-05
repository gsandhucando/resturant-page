const mongoose = require('mongoose');

const ReservationSchema = mongoose.Schema({
  guest: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
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