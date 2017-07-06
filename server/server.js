const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
dotenv.load();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
//routing
app.use('/user', require('./routes/user'));

app.listen(port, () => {
  console.log('app listen on port %s', port);
})
