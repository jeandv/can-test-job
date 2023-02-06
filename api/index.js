const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const eventsRoute = require('./routes/event');

const port = process.env.PORT || 5000;

mongoose.set('strictQuery', false);

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('DB is working'))
  .catch((err) => console.log(err));

app.use(express.json());

app.use('/api/auth', authRoute);

app.use('/api/users', userRoute);

app.use('/api/events', eventsRoute);


app.listen(port, () => console.log('backend server is running...', port));