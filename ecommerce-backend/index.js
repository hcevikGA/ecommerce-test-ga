// backend/index.js

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Database connection
mongoose.connect("mongodb+srv://test:test123@cluster0.bxj3hmx.mongodb.net/data?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB', error);
});


// TODO: Add routes
// TODO: Add middleware for authentication and validation

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
