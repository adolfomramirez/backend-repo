const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/dogs', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la lista de perros' });
    }
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

