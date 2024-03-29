const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;
    console.log(`Event received: ${ type }`);

    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';

        try {
            await axios.post('http://event-bus-srv:4005/events', {
                type: 'CommentModerated',
                data: {
                    id: data.id,
                    postId: data.postId,
                    status,
                    content: data.content
                }
            });
            console.log(`sent ${ data.status }: ${ data.content }`);
        } catch (e) {
            console.log(e.message);
        }
    }

    res.send({});
});

app.listen(4003, () => {
    console.log('Listening on 4003');
});