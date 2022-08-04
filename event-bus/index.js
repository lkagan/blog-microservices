const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', async (req, res) => {
    const event = req.body;
    events.push(event);

    const services = [
        'http://posts-clusterip-srv:4000/events',
        'http://comments-srv:4001/events',
        'http://moderation-srv:4003/events',
        'http://query-srv:4002/events',
    ];

    for (service of services) {
        try {
            await axios.post(service, event);
        } catch (e) {
            console.log(`Error: ${e.message}`);
            console.log(`Error sending ${event.type} to ${service}`);
        }
    }

    res.status(204).send();
});

app.get('/events', (req, res) => {
    return res.send(events);
})

app.listen(4005, () => {
    console.log('Listening on 4005');
});