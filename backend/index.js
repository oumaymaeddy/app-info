const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route de test à la racine
app.get('/', (req, res) => {
  res.send('🎉 Backend Node.js déployé avec succès sur Azure !');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
