const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./config/database');

// Middleware
app.use(cors());
app.use(express.json());

// Routes


// Add other routes here

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');

    // Start the server only if the database connection is successful
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
