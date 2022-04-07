const express = require('express');
const cors = require("cors");

const app = express()
const port = 3010

app.use(cors());
app.use(express.json())

app.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).send('Success!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})