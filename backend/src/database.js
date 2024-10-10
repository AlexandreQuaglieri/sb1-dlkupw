import { db } from './inMemoryDb.js';

async function initDatabase() {
  try {
    console.log('Attempting to connect to in-memory database...');
    await db.connect();
    console.log('Successfully connected to in-memory database');
  } catch (error) {
    console.error('Error connecting to in-memory database:', error);
    throw error;
  }
}

async function closeDatabase() {
  await db.disconnect();
}

export { initDatabase, closeDatabase, db };