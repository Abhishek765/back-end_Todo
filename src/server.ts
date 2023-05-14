import express from 'express';
import dotenv from 'dotenv';
import ContactRoutes from './routes/contactRoutes';
import { errorHandler } from './middleware/errorHandler';
import { connectDB } from './config/dbConnection';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

// DB connection
connectDB();

// middleware
app.use(express.json());
app.use('/api/contacts', ContactRoutes);
app.use(errorHandler);

// serve listening
app.listen(PORT, () => {
  console.log(`server listening on port: http://localhost:${PORT}`);
});
