const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: 'OK' }, null, 3));
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
});