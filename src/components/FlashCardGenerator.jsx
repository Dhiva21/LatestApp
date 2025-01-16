import React, { useState } from 'react';
import axios from 'axios';

const FlashCardGenerator = () => {
  const [url, setUrl] = useState('');
  const [flashcards, setFlashcards] = useState('');
  const [loading, setLoading] = useState(false);
  const [filePath, setFilePath] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000', { url });
      setFlashcards(response.data.flashcards);
      setFilePath(response.data.filePath);
    } catch (error) {
      console.error('Error generating flashcards', error);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Flashcard Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>Generate Flashcards</button>
      </form>

      {loading && <p>Loading...</p>}

      {flashcards && (
        <div>
          <h2>Flashcards</h2>
          <pre>{flashcards}</pre>
          <a href={filePath} download>
            Download Flashcards
          </a>
        </div>
      )}
    </div>
  );
};

export default FlashCardGenerator;
