// Create web server application to handle HTTP requests
// 1. Create web server application
// 2. Handle GET requests
// 3. Handle POST requests

// 1. Create web server application
// 1.1. Import express module
const express = require('express');
// 1.2. Create web server application
const app = express();

// 2. Handle GET requests
// 2.1. Handle GET requests for path '/'
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 2.2. Handle GET requests for path '/api/comments'
app.get('/api/comments', (req, res) => {
    res.send(['comment1', 'comment2', 'comment3']);
});

// 2.3. Handle GET requests for path '/api/comments/:id'
app.get('/api/comments/:id', (req, res) => {
    res.send(req.params.id);
});

// 3. Handle POST requests
// 3.1. Handle POST requests for path '/api/comments'
app.post('/api/comments', (req, res) => {
    res.send('POST request received');
});

// 3.2. Handle POST requests for path '/api/comments/:id'
app.post('/api/comments/:id', (req, res) => {
    res.send(`POST request received for ${req.params.id}`);
});

// 4. Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
