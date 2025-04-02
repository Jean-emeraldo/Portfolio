require('dotenv').config();


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet'); 
const contactRoute = require('./routes/contact');

const app = express();


app.use(helmet()); 
app.use(cors());   
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Bienvenue sur mon portfolio !');
});


app.use('/api', contactRoute);


const PORT = process.env.PORT || 5000;
console.log(`PORT utilisé : ${PORT}`);


app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
