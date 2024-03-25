import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://ilishjyoti17:resourceEX30k@cluster0.ykuov1a.mongodb.net/";

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);

    console.log(`MongoDB Connected💖`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
