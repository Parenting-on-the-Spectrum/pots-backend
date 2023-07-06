import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import Pool from './db';
dotenv.config();

const app: Express = express();

// Parse JSON payloads
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Look hands, no mom!');
});

app.get('/work', (req: Request, res: Response) => {
  res.send('this is a test work');
});

app.get('/first', (req: Request, res: Response) => {
  Pool.query('SELECT * FROM leaders')
  .then((data) => {
    console.log(data)
  })
});


const port = process.env.PORT || 1128;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});