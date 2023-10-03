const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'secret123',
  database: 'node_app',
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  connection.query('SELECT name FROM people', (error, results) => {
    if (error) return res.status(500).send(error);

    let names = results.map((row) => row.name);
    res.send(
      `<h1>Full Cycle Rocks!</h1><ul>${names
        .map((name) => `<li>${name}</li>`)
        .join('')}</ul>`
    );
  });
});

app.post('/add', (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).send({ message: 'Name is required' });

  connection.query(
    'INSERT INTO people(name) VALUES(?)',
    [name],
    (error) => {
      if (error) return res.status(500).send(error);

      res.send({ message: 'Name added successfully' });
    }
  );
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
