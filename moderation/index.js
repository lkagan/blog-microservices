const express = require('express');
const axios = require('axios');

const app = express();

app.post('/events', (req, res) => {

});

app.listen(4003, () => {
    console.log('Listening on 4003');
});