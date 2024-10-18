import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

router.post('/summarize', async (req, res) => {
    const { text, maxLength } = req.body; 
    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input: text is required.' });
    }

    const maxLen = maxLength || 250; 
    const minLen = Math.min(180, maxLen); 

    try {
        const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                inputs: text,
                parameters: {
                    max_length: maxLen, 
                    min_length: minLen,  
                    do_sample: false,   
                    early_stopping: true, 
                },
            }),
        });
        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json({ error: errorData });
        }

        const data = await response.json();
        if (!data || data.length === 0 || !data[0].summary_text) {
            return res.status(500).json({ error: 'Invalid response from the summarization API' });
        }

        const summary = data[0].summary_text; 
        res.json({ summary });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to summarize text' });
    }
});

export default router;
