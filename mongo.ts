import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export const collections: {
  leaders?: any, socials?: mongoDB.Collection, videos?: mongoDB.Collection,
  tips?: mongoDB.Collection, tricks?: mongoDB.Collection, resources?: mongoDB.Collection
} = {}

export async function connectToDatabase() {

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.string, { useUnifiedTopology: true });

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.database);

  const leaders: mongoDB.Collection = db.collection('leaders');

  collections.leaders = leaders;

  console.log(`Successfully connected to database: ${db.databaseName}`);
}