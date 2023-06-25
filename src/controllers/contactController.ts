import { Response, Request } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { ContactType } from '../types';
import ContactModel from '../models/contact';
import { handleIdResponse } from '../utils/helperFunctions';

/**
 * @description Get all Contacts
 * @method GET
 * @route /api/contacts
 * @access public
 */
export const getContacts = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const contact = await ContactModel.find();

    res.status(200).json({ message: 'All Contacts', contact });
  }
);

/**
 * @description Create a Contact
 * @method POST
 * @route /api/contacts
 * @access public
 */
export const createContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const body: ContactType = req.body;
    const { name, email, phone } = body;

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error('All fields are required');
    }

    // Create a new contact
    const contact = await ContactModel.create({
      name,
      email,
      phone
    });

    res.status(201).json({ message: `Created Contact`, contact });
  }
);

/**
 * @description Get a Single Contact
 * @method GET
 * @route /api/contacts/:id
 * @access public
 */
export const getContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    handleIdResponse(req.params.id);
    const contact = await ContactModel.findById(req.params.id);

    if (!contact) {
      res.status(404);
      throw new Error('Contact not found');
    }

    res.status(200).json({ message: `Contact for ${req.params.id}`, contact });
  }
);

/**
 * @description Update a Contact
 * @method PUT
 * @route /api/contacts/:id
 * @access public
 */
export const updateContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    handleIdResponse(req.params.id);
    const updatedContact = await ContactModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (!updatedContact) {
      res.status(404);
      throw new Error('Contact not found');
    }

    res.status(200).json({ message: `Updated Contact for ${req.params.id}` });
  }
);

/**
 * @description Delete a Contact
 * @method DELETE
 * @route /api/contacts/:id
 * @access public
 */
export const deleteContact = expressAsyncHandler(
  async (req: Request, res: Response) => {
    handleIdResponse(req.params.id);

    const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);

    if (!deletedContact) {
      res.status(404);
      throw new Error('Contact not found');
    }

    res.status(200).json({ message: `Deleted Contact for ${req.params.id}` });
  }
);
