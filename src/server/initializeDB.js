import { defaultState } from './defaultState';
import { connectDB } from './connectDB';
import { User } from './mongooseSchema/User';

async function initialzeDB() {
  const db = await connectDB();

  const user = await User.findOne({ email: 'Dev' }).catch(
    (error) => console.log(error)
  );

  // console.log(user)

  if (!user) {
    await User.create({ email: 'Dev', password: 'D3V' })
      .catch(
        (error) => console.log(error)
      );

    for (const collectionName in defaultState) {
      const collection = db.collection(collectionName);
      await collection.insertMany(defaultState[collectionName]);
    }
  }
}

initialzeDB();
