import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('Successfully connected to database');
  })
  .catch((err) => {
    console.log(err);
  });
