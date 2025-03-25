const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Réponse à la racine
app.get('/', (req, res) => {
  res.send('🎉 Backend Node.js déployé avec succès sur Azure !');
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
