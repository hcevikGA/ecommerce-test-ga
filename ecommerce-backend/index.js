// backend/index.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Database connection
mongoose.connect("MONGODB_URL", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

// TODO: Add routes
// TODO: Add middleware for authentication and validation

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
