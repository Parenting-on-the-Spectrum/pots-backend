import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export const collections: {
  leaders?: any, socials?: mongoDB.Collection, videos?: mongoDB.Collection,
  tipstricks?: mongoDB.Collection, resources?: mongoDB.Collection
} = {}

export async function connectToDatabase() {
  //create the initial mongoDB client, and await the connection
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.string, { useUnifiedTopology: true });
  await client.connect();
  // create the database const
  const db: mongoDB.Db = client.db(process.env.database);
  // name the collections here
  const leaders: mongoDB.Collection = db.collection('leaders');
  const tipstricks: mongoDB.Collection = db.collection('tipstricks');
  const resources: mongoDB.Collection = db.collection('resources');
  // define the export collections
  collections.leaders = leaders;
  collections.tipstricks = tipstricks;
  collections.resources = resources;
  console.log(`Successfully connected to database: ${db.databaseName}`);
}