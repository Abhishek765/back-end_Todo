import express from 'express';
import dotenv from 'dotenv';
import ContactRoutes from './routes/contactRoutes';
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api/contacts', ContactRoutes);

// serve listening
app.listen(PORT, () => {
  console.log(`server listening on port: http://localhost:${PORT}`);
});
