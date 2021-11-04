const express = require('express');
const connectDb = require('./config/db');

const app = express();
app.use(express.json());

connectDb();

app.use('/api/test', require('./routes/api/test'));

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log('Server is up and listening on port ' + PORT);
});
