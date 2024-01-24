const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3002;

app.use(cors()); // Habilita CORS

app.get('/', (req, res) => {
    const db = [
        {
            name: 'matemáticas',
            id: 1
        },
        {
            name: 'lenguaje',
            id: 2
        },
        {
            name: 'biologia',
            id: 3
        }
    ]

    res.send(db)
});

app.listen(puerto, () => {
    console.log(`Microservicio 2 está escuchando en http://localhost:${puerto}`);
});
