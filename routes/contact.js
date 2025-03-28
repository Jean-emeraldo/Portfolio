const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;


    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Tous les champs sont requis' });
    }

    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erreur lors de l\'insertion des données' });
        }
        res.status(200).json({ success: 'Message envoyé avec succès !' });
    });
});

module.exports = router;
