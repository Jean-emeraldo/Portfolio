require('dotenv').config(); // Charger dotenv en premier

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet'); // Sécuriser l'application
const contactRoute = require('./routes/contact');

const app = express();

// Middleware
app.use(helmet()); // Sécurité
app.use(cors());   // Gestion des CORS
app.use(bodyParser.json()); // Parser les requêtes JSON

// Route par défaut pour '/'
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon portfolio !');
});

// API des contacts
app.use('/api', contactRoute);

// Vérification du port
const PORT = process.env.PORT || 5000;
console.log(`PORT utilisé : ${PORT}`);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
