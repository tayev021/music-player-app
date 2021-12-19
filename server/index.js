const express = require('express');
const cors = require('cors');
const playlist = require('./data/playlist');

const app = express();
const port = 3000;

app.use(cors());
app.use('/public', express.static(__dirname + '/public'));

app.get('/playlist', (req, res) => {
  res.json(playlist);
});

app.listen(port);