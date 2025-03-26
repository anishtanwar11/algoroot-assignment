import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(
      `MongoDB connection !! DB  HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};

export default dbConnect;
