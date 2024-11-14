const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }]
    }, {
        headers: {
            'Authorization': `Bearer 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`
        }
    });
    res.json(response.data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
