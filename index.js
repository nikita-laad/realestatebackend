const connectToMongo = require('./db');
const express = require('express');

connectToMongo();
const app = express()
const port = 5000

app.use(express.json());
//Routes
app.use('/api/auth', require('./routes/auth'));
//end

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})