import mongoose, {  Mongoose } from 'mongoose';

const connectionDB = async (): Promise<Mongoose> => {
  try {

    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/');

    console.log('mongodb is connected successfully');
    return connection;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default connectionDB;
