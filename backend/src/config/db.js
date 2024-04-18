import mongoose from "mongoose";

const DB_NAME = "login";
// const MONGO_URL = `mongodb://localhost:27017/${DB_NAME}`;
const MONGO_URL = `mongodb+srv://israel3041220221:cd5DfrxZjDqjLFOk@cluster0.em2irap.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
