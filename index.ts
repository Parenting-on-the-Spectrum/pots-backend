import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {connectToDatabase, collections} from './mongo';
// import { ObjectId } from "mongodb";
// import Game from "../models/game";
dotenv.config();

const app: Express = express();

// Parse JSON payloads
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.sendStatus(200);
});

connectToDatabase();

app.get('/leaders', async (req: Request, res: Response) => {
  try {
    const leads = (await collections.leaders.find({}).toArray());
     res.status(200).send(leads);
 } catch (error) {
     res.status(500).send(error.message);
 }
});


const port = process.env.PORT || 1128;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

/*
Here are the PostgreSQL queries. I'm not deleting them just yet, just in case I'll
need to change back to the database

// import Pool from './db';

// app.get('/leaders', (req: Request, res: Response) => {
//   Pool.query('SELECT * FROM leaders')
//   .then((data) => {
//     console.log(data.rows)
//     res.send(data.rows).status(200)
//   })
//   .catch((err) => res.send(err).status(500))
// });

// app.get('/socials', (req: Request, res: Response) => {
//   interface Media {
//     instagram?: string,
//     facebook?: string,
//     twitter?: string
//   }
//   Pool.query('SELECT page FROM socials')
//   .then((data) => {
//     let sites: Media = {
//       instagram: data.rows[0],
//       facebook: data.rows[1],
//       twitter: data.rows[2]
//     }
//     res.send(sites).status(200)
//   })
//   .catch((err) => res.send(err).status(500))
// });

// app.get('/users', (req: Request, res: Response) => {
//   Pool.query('SELECT * FROM users WHERE user_id = ${req.params.user_id}')
//   .then((data) => {
//     res.send(data.rows).status(200)
//   })
//   .catch((err) => res.send(err).status(500))
// });

// app.get('/videos', (req: Request, res: Response) => {
//   Pool.query('SELECT * FROM leaders')
//   .then((data) => {
//     res.send(data.rows).status(200)
//   })
//   .catch((err) => res.send(err).status(500))
// });

// app.get('/tips', (req: Request, res: Response) => {
//   Pool.query('SELECT * FROM leaders')
//   .then((data) => {
//     res.send(data.rows).status(200)
//   })
//   .catch((err) => res.send(err).status(500))
// });

// app.get('/tricks', (req: Request, res: Response) => {
//   Pool.query('SELECT * FROM leaders')
//   .then((data) => {
//     res.send(data.rows).status(200)
//   })
//   .catch((err) => res.send(err).status(500))
// });

// app.get('/resources', (req: Request, res: Response) => {
//   Pool.query('SELECT * FROM leaders')
//   .then((data) => {
//     res.send(data.rows).status(200)
//   })
//   .catch((err) => res.send(err).status(500))
// });

*/