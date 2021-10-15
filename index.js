const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor de express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Producto 1',
    precio: 1000,
  });
});

app.listen(port, () => {
  console.log(`Ejecutando en puerto ${port}`);
});
