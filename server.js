require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// Set up Express server
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors'); // Import the cors package
// Define your API routes and other server logic here
 // Define your schema
 const carSchema = mongoose.Schema({
    name: String,
    model: String,
    year: Number,
    price: Number,
    description: [String],
    image: String,
  });

  // Create a model based on the schema
  const carModel = mongoose.model('car', carSchema);

  

// Connect to MongoDB
mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server after successful database connection
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Handle other requests, middleware, and API routes here

// Enable CORS
app.use(cors());

// ...

// API route to fetch car data
app.get('/cars', async (req, res) => {
  // Fetch car data from the database
  try {
    const data = await carModel.find({});
    res.send(JSON.stringify(data));
  } catch (error) {
    console.error('Error fetching car data:', error);
    res.status(500).json({ error: 'Error fetching car data' });
  }
});

// Serve static files (e.g., React app) from a specific directory
app.use(express.static('public'));

// Start the server without MongoDB connection (for testing purposes)
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });