import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://anjanaindu3699:803391@cluster0.w2zqwgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  console.log("DB Connected");
};