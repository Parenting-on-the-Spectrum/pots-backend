import dotenv from 'dotenv';
import mongoose from 'mongoose';
const { Schema } = mongoose;

dotenv.config();


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them


const mongoConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB database');
  } catch (error) {
    console.log(error);
  }
};

// create a schema. here is the
// let glossarySchema = new Schema({
//   word: String,
//   definition: String,
// });


export default {
  mongoConnect
}