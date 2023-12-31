"use server";
import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  console.log("mongo url", process.env.MONGODB_URL);

  if (!process.env.MONGODB_URL) return console.log("MISSING MONGO URL");
  if (isConnected) return console.log("MONGO ALREADY CONNECTED.");

  try {
    await mongoose.connect(process.env.MONGODB_URL || "", {
      dbName: "underflow",
    });
    isConnected = true;
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR :: ", error);
  }
};
