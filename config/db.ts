import mongoose from 'mongoose';
import keys from './keys';
const { mongoUri } = keys;

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUri);

    console.log('Mongo Db Connected...');
  } catch (err) {
    console.log('Something went wrong...');
    console.log(err);
    process.exit(1);
  }
};

export default connectDb;
