const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db-oumouhou.mysql.database.azure.com', 
  user: 'azuresql',                             
  password: 'Oumaymaalyne16',                   
  database: 'oumouhoudb',                       
  ssl: { rejectUnauthorized: false }           
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion :', err.message);
  } else {
    console.log('Connexion réussie à la base Azure MySQL ');
  }
});
