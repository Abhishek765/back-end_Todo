import express from 'express';
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact
} from '../controllers/contactController';

const router = express.Router();

router.get('/', getContacts);

router
  .route('/:id')
  .get(getContact)
  .post(createContact)
  .put(updateContact)
  .delete(deleteContact);

export default router;
