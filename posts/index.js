const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const posts = { };

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts/create', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = { id, title, };

    axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: { id, title },
    }).catch(e => {
        console.log(e)
    })

    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Event Received: ' + req.body.type);
    res.send({});
});

app.listen(4000, () => {
    console.log('v55');
    console.log('Listening on port 4000');
});