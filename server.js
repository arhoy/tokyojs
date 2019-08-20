//updated my packages!
const express = require('express');

const connectDB = require('./config/db');
const path = require('path');

const app = express();

// connect db
connectDB();

// Init MiddleWare for put and post requests.
app.use(express.json({ extended: false }));

// Define the routes
app.use('/api/tasks', require('./routes/api/tasks'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/tours', require('./routes/api/tours'));
app.use('/api/reviews', require('./routes/api/reviews'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// UNHANDLED REJECTIONS
process.on('unhandledRejection', err => {
  console.log(err.name, err.message, 'Unhandled Rejection error!');
  process.exit(1);
});
