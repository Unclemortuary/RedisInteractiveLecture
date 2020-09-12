var express = require('express');
const path = require('path');

var app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'dist', 'images')));

app.get('/', function (_, res) {
    res.sendFile(path.resolve(__dirname, 'tetflix.html'));
});

app.listen(13000);