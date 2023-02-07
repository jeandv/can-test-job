const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const eventsRoute = require('./routes/event');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');

const port = process.env.PORT || 5000;

mongoose.set('strictQuery', false);

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('DB is working'))
  .catch((err) => console.log(err));

app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoute);

app.use('/api/users', userRoute);

app.use('/api/events', eventsRoute);

app.use('/api/carts', cartRoute);

app.use('/api/orders', orderRoute);

app.use('/api/checkout', stripeRoute);

app.listen(port, () => console.log('backend server is running...', port));