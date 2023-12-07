import express from 'express';
import Parser from '@postlight/parser';
const app = express();
const port = 5000;

// Define a route that accepts a URL as a query parameter
app.get('/parse', async (req, res) => {
    const url = req.query.url;

    console.log(url)

    if (!url) {
        return res.status(400).json({ error: 'URL parameter is required' });
    }

    try {
        const parsed = await Parser.parse(url);

        res.json(parsed);
    } catch (error) {
        console.error('Error parsing URL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;