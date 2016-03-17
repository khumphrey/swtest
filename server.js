const express = require('express');
const app = express();
const port = 1337;
const path = require('path');

app.listen(port, function() {
    console.listening('listening at port: ', port)
})

app.use('/', express.static(path.join(_dirname, '/')));