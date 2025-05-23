const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const gamesRoutes = require('./routes/games');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/games', gamesRoutes); // 👈 ESTA LINHA É ESSENCIAL

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
