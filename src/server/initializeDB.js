import { defaultState } from './defaultState';
import { connectDB } from './connectDB';

async function initialzeDB() {
  let db = await connectDB();

  for (let collectionName in defaultState) {
    let collection = db.collection(collectionName);
    await collection.insertMany(defaultState[collectionName]);
  }
}

initialzeDB();