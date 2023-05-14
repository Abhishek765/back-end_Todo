import express from 'express';
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact
} from '../controllers/contactController';

const router = express.Router();

router.route('/').get(getContacts).post(createContact);

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

export default router;
