const express = require('express');
const bodyParser = require('body-parser')
const image = require('./controllers/image');
const music = require('./controllers/music');
const status = require('./controllers/status');
const users = require('./controllers/users');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/image', image);
app.use('/music', music);
app.use('/status', status);
app.use('/users', users);

app.listen(3000);
