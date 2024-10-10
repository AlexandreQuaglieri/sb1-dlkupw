import express from 'express';
import cors from 'cors';

import contactsRouter from './routes/contacts.js';
import { initDatabase } from './database.js';



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.use('/api/prospects', contactsRouter);

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

const startServer = () => {
  return new Promise((resolve) => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      resolve();
    });
  });
};

const initializeApp = async () => {
  try {
    await startServer();
    await initDatabase();
  } catch (error) {
    console.error('Failed to initialize app:', error);
    process.exit(1);
  }
};

initializeApp();