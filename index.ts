import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Pool from './db';
import mongoose from './mongo'
// import mongoose from './mongo'
dotenv.config();

// mongoose.mongoConnect();

const app: Express = express();

// Parse JSON payloads
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

// app.get('/mongo', (req: Request, res: Response) => {
//   mongoose.query()
// });

app.get('/leaders', (req: Request, res: Response) => {
  Pool.query('SELECT * FROM leaders')
  .then((data) => {
    res.send(data.rows).status(200)
  })
  .catch((err) => res.send(err).status(500))
});


const port = process.env.PORT || 1128;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});