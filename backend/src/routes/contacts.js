import express from 'express';
import { db } from '../database.js';

const router = express.Router();

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await db.find('contacts');
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Error fetching contacts', error: error.message });
  }
});

// Add a test prospect
router.post('/test', async (req, res) => {
  try {
    const testProspect = {
      nom: 'Doe',
      prenom: 'John',
      email: [{ address: 'john.doe@example.com', created_at: new Date() }],
      telephone: [{ number: '1234567890', created_at: new Date() }],
      statut: 'Nouveau',
      date_creation: new Date()
    };

    const newProspect = await db.create('contacts', testProspect);
    res.status(201).json(newProspect);
  } catch (error) {
    console.error('Error creating test prospect:', error);
    res.status(500).json({ message: 'Error creating test prospect', error: error.message });
  }
});

export default router;