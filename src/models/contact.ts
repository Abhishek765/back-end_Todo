import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your contact name']
    },
    email: {
      type: String,
      required: [true, 'Please add your contact email']
    },
    phone: {
      type: String,
      required: [true, 'Please add your contact phone']
    }
  },
  {
    timestamps: true
  }
);

const ContactModel = mongoose.model('Contact', ContactSchema);
export default ContactModel;
