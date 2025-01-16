const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const openai = require('openai');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const router = express.Router();
dotenv.config();
openai.apiKey = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());

// Scrape content from URL
const scrapeContent = async (url) => {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);
  const title = $('title').text();
  const content = $('p').text();
  return { title, content };
};

// Generate flashcards using OpenAI
const createFlashcards = async (content) => {
  const prompt = process.env.FLASHCARD_PROMPT;
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content }
    ],
    max_tokens: 500,
    temperature: 0.7
  });
  return response.choices[0].message.content.trim();
};

// Process URL to generate flashcards
router.post('/', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).send('URL is required');

  try {
    const { title, content } = await scrapeContent(url);
    const flashcards = await createFlashcards(content);
    
    const filePath = path.join(__dirname, 'flashcards.txt');
    fs.writeFileSync(filePath, `Title: ${title}\n\nFlashcards:\n${flashcards}`);

    res.json({ flashcards, filePath });
  } catch (error) {
    res.status(500).send('Error generating flashcards');
  }
});


module.exports = router;
