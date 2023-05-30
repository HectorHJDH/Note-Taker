const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRouter');
const pagesRoutes = require('./routes/pagesRouter');

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use api index.js file for all API routes
app.use('/api', apiRoutes);
app.use('/', pagesRoutes);

// Serve static files from the public folder
app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
