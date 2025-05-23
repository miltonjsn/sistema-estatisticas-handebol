const db = require('../db');

exports.listar = (req, res) => {
  db.query('SELECT * FROM games', (err, results) => {
    if (err) {
      return res.status(500).json({ erro: err });
    }
    res.json(results);
  });
};

exports.cadastrar = (req, res) => {
  const { date, opponent, ourScore, opponentScore, category } = req.body;
  const sql = 'INSERT INTO games (date, opponent, ourScore, opponentScore, category) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [date, opponent, ourScore, opponentScore, category], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: err });
    }
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};
