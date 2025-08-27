const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3000;

// Додаємо обробку статичних файлів з поточної папки
app.use(express.static(__dirname));

const priceDb = new sqlite3.Database('./price.db');

app.get('/api/prices', (req, res) => {
  priceDb.all('SELECT * FROM prices', [], (err, rows) => {
    if (err) return res.status(500).json({error: err.message});
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});