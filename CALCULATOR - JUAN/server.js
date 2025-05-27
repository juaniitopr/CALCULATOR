const express = require('express');
const path = require('path');
const Calculadora = require('./src/components/Calculadora');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(express.static('public'));

// Ruta para cálculos
app.post('/api/calculate', (req, res) => {
  try {
    const { operation, a, b } = req.body;
    const calculadora = new Calculadora();
    const result = calculadora.calcular(operation, parseFloat(a), parseFloat(b));
    res.json({ success: true, result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Servir el frontend
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});