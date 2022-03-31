import mongoose from 'mongoose';

const Appointment = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
    index: {
      unique: true,
      expires: '30m',
    },
  },
  service: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

export default mongoose.model('appointments', Appointment);
