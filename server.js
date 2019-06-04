const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');


app.use(express.json());

//Import Routes
const postsRoutes = require('./routes/reservations');

app.use('/posts', postsRoutes);


//ROUTES
app.get('/api', (req, res) => {
  let customers = [
    {id: 1, firstName: 'joe', lastName: 'meow'}
  ]

  res.json(customers)
})

//Connect To DB
mongoose.connect('//localhost:27017/langbaan', { useNewUrlParser: true }, ()=> {
  console.log(`connected to DB!`)
})


//Listening to server
app.listen(port, ()=> {
  console.log(`we are up on port: ${port}`)
})