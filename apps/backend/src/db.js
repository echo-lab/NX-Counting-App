import mongoose from "mongoose";
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const mongoUrl = `mongodb+srv://${uname}:${pw}@cluster0.oypxwnq.mongodb.net/?retryWrites=true&w=majority`;
const mongoUrl = "mongodb://127.0.0.1:27017/counting";

async function connectToDb(){
    try {
      await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
      });
      console.log('Successfully Connected to DB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      // Exit the process with an error code if the database connection fails
      process.exit(1);
    }
}


export{
    connectToDb,
};