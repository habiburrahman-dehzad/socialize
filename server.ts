import express from 'express';
import connectDb from './config/db';
import router from './routes/api/test';

const app = express();
app.use(express.json());

connectDb();

app.use('/api/test', router);

const PORT: number | undefined =
  process.env && process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.listen(PORT, () => {
  console.log('Server is up and listening on port ' + PORT);
});
