import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();

// Parse JSON payloads
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Look hands, no mom!');
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});