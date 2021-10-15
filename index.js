const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor de express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Ejecutando en puerto ${port}`);
});
