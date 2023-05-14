import mongoose from 'mongoose';

export const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI!)
    .then((c) => console.log(`Database Connected with ${c.connection.name}`))
    .catch((error) => {
      console.error(error);
      process.exit(1); // exit the process with failure status
    });
};
