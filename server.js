const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('routes'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/routes/index.js'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
