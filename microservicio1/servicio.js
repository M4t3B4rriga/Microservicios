const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3001;

app.use(cors()); // Habilita CORS

app.get('/', (req, res) => {
    res.send([
        {
            firstname: 'john',
            lastname: 'doe'
        },
        {
            firstname: 'jane',
            lastname: 'doe'
        },
        {
            firstname: 'kayne',
            lastname: 'west'
        },
    ]);
});

app.listen(puerto, () => {
    console.log(`Microservicio 1 está escuchando en http://localhost:${puerto}`);
});
