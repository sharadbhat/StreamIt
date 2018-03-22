const express = require('express');
const bodyParser = require('body-parser')
const status = require('./controllers/status');
const image = require('./controllers/image');
const users = require('./controllers/users');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/status', status);
app.use('/image', image);
app.use('/users', users);

app.listen(3000);
