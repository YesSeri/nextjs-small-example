const express = require('express');
const app = express();
const path = require('path')

app.use('/', express.static(path.join(__dirname, 'out')))

const server = app.listen(5000, () => console.log('Listening at 5000.'));