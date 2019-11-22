const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/test', (req, res) => {
    res.send('Hello World Test!');
});

app.listen(3000);

console.log('App Runnig on Port 3000');