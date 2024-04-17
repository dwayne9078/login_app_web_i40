import mongoose from "mongoose";

const DB_NAME = "login";
// const MONGO_URL = `mongodb://localhost:27017/${DB_NAME}`;
const MONGO_URL = `mongodb+srv://liz:mwdTS2LoxjveCL8k@cluster0.qpjn9lk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
