import { initDatabase, closeDatabase } from './database.js';

async function testConnection() {
  console.log('Starting connection test...');

  try {
    await initDatabase();
    console.log('Connection test successful');
    await closeDatabase();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Connection test failed:', error);
  }
}

testConnection().then(() => process.exit());