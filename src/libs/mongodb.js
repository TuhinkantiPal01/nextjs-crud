import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://crudDB:61s44Ml9qsC0gNAJ@cluster0.ue4cbab.mongodb.net/crudDB:61s44Ml9qsC0g",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
