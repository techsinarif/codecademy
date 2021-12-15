const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/coursecademy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(bodyParser.json());

// Api routing configurations
app.use('/api/auth', require('./routes/authentication'));

app.use('/', express.static(path.join(__dirname, '../codecademy/build')));

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log('server is listening at 3009');
})