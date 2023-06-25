import { response } from 'express';
import mongoose from 'mongoose';

export const handleIdResponse = (id: string) => {
  const isValidId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidId) {
    response.status(404);
    throw new Error('Invalid Entry');
  }
};
