import express from 'express';
import dotenv from 'dotenv';
import itemRoutes from './routes/items.routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/items', itemRoutes);

export default app;
