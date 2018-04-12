const express = require('express');
const bodyParser = require('body-parser')
const favorites = require('./controllers/favorites');
const image = require('./controllers/image');
const music = require('./controllers/music');
const random = require('./controllers/random');
const search = require('./controllers/search');
const status = require('./controllers/status');
const users = require('./controllers/users');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/favorites', favorites);
app.use('/image', image);
app.use('/music', music);
app.use('/random', random);
app.use('/search', search);
app.use('/status', status);
app.use('/users', users);

app.listen(3000);
