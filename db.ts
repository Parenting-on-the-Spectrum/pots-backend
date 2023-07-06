import { Client } from 'pg';

import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  user: 'postgres',
  database: 'spectrum',
  port: 5432,
  password: process.env.PASSWORD
});

client.connect()
  .then(() => console.log('connected to db'))
  .catch(err => console.log('connection error', err));

module.exports.client = client;