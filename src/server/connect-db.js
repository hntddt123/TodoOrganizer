import { MongoClient } from 'mongodb';

const url = `mongodb://localhost:27017/organizer`
let db = null;

export async function connectDB() {
  if (db) return db;

  let client = await MongoClient.connect(url, { useNewUrParser: true });
  db = client.db();

  console.info("DB connected", db);

  return db;
}