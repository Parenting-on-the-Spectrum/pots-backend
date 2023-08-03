import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.user,
  database: process.env.database,
  port: 5432,
  password: process.env.PASSWORD
});

export default {
  query: (text: string) => pool.query(text),
  end: () => pool.end(),
  pool
}