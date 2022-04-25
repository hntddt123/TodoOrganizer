import { MongoClient } from 'mongodb';

const url = process.env.MONGODB_URI || `mongodb://localhost:27017/taskorganizer`;
let db = null;

export async function connectDB() {
  if (db) return db;

  let client = await MongoClient.connect(url);
  db = client.db();

  console.info("DB connected", db);

  return db;
}

connectDB();