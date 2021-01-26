require('./config/config');

const express = require('express')
const mongoose = require('mongoose');

const app = express()

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./routes/index'));

   mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(db => console.log('Database connected'))
  .catch(err => console.log(err))


 
  app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});