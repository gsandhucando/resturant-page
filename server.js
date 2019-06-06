const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({
  path: '.env'
})


app.use(cors());
app.use(express.json());

//Import Routes
const postsRoutes = require('./routes/reservations');
const postEmail = require('./routes/Emails');

app.use('/posts', postsRoutes);
app.use('/emails', postEmail);




//Connect To DB
mongoose.connect(`mongodb+srv://${process.env.CLUSTER_USERNAME}:${process.env.CLUSTER_PASSWORD}@cluster0-i4rey.mongodb.net/langbaan`, { useNewUrlParser: true }, ()=> {
  console.log(`connected to DB!`)
})


//Listening to server
app.listen(port, ()=> {
  console.log(`we are up on port: ${port}`)
})