const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3001;

app.use(cors()); // Habilita CORS

app.get('/', (req, res) => {
    const db = [
        {
            firstname: 'john',
            lastname: 'doe',
            id: 1752937712,
            subjects: [1, 3]
        },
        {
            firstname: 'jane',
            lastname: 'doe',
            id: 1711270155,
            subjects: [2, 3]
        },
        {
            firstname: 'carlos',
            lastname: 'perez',
            id: 1717774788,
            subjects: [2]
        },
        {
            firstname: 'mauricio',
            lastname: 'gomez',
            id: 1729398483,
            subjects: [1]
        },
        {
            firstname: 'angel',
            lastname: 'astudillo',
            id: 1718283944,
            subjects: [3]
        },
    ]

    res.send(db);
});

app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
