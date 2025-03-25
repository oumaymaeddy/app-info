const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db-oumouhou.mysql.database.azure.com', // ton serveur Azure MySQL
  user: 'azuresql',                             // utilisateur admin Azure MySQL
  password: 'Oumaymaalyne16',                   // mot de passe admin Azure MySQL
  database: 'oumouhoudb',                       // nom de ta base de données Azure MySQL
  ssl: { rejectUnauthorized: false }           // nécessaire pour Azure MySQL
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err.message);
  } else {
    console.log('Connexion réussie à la base Azure MySQL !');
  }
});
