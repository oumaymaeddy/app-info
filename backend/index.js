// index.js
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Route pour insérer et retourner le message sauvegardé
app.post('/api/message', (req, res) => {
  const { text } = req.body;

  const query = 'INSERT INTO messages (text) VALUES (?)';
  db.query(query, [text], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).json({ error: 'Erreur de serveur' });
    } else {
      res.json({ 
        id: results.insertId,
        message: `Message sauvegardé: ${text}`
      });
    }
  });
});

// Route pour récupérer tous les messages (optionnel)
app.get('/api/messages', (req, res) => {
  const query = 'SELECT * FROM messages ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération:', err);
      res.status(500).json({ error: 'Erreur de serveur' });
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => {
  console.log('Serveur backend démarré sur le port 5000');
});
