import { Response, Request } from 'express';

/**
 * @description Get all Contacts
 * @method GET
 * @route /api/contacts
 * @access public
 */
export const getContacts = (req: Request, res: Response) => {
  res.status(200).json({ message: 'All Contacts' });
};

/**
 * @description Get a Single Contact
 * @method GET
 * @route /api/contacts/:id
 * @access public
 */
export const getContact = (req: Request, res: Response) => {
  res.status(200).json({ message: `Contact for ${req.params.id}` });
};

/**
 * @description Create a Contact
 * @method POST
 * @route /api/contacts/:id
 * @access public
 */
export const createContact = (req: Request, res: Response) => {
  res.status(201).json({ message: `Created Contact for ${req.params.id}` });
};

/**
 * @description Update a Contact
 * @method PUT
 * @route /api/contacts/:id
 * @access public
 */
export const updateContact = (req: Request, res: Response) => {
  res.status(200).json({ message: `Updated Contact for ${req.params.id}` });
};

/**
 * @description Delete a Contact
 * @method DELETE
 * @route /api/contacts/:id
 * @access public
 */
export const deleteContact = (req: Request, res: Response) => {
  res.status(200).json({ message: `Deleted Contact for ${req.params.id}` });
};
