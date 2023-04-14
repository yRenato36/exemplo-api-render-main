const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors"); // instalar: npm i cors
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World! hehe');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

