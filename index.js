const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor de express');
});

app.listen(port, () => {
  console.log(`Ejecutando en puerto ${port}`);
});
