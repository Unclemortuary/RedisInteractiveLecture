var express = require('express');
const path = require('path');

var app = express();

app.use(express.static(__dirname));

app.get(`/*`, function (_, res) {
    res.sendFile(path.resolve(__dirname, 'tetflix.html'));
});

app.listen(13000);