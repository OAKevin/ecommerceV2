require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// Set up Express server
const app = express();
const port = process.env.PORT || 5000;

// Define your API routes and other server logic here
 // Define your schema
 const carSchema = new mongoose.Schema({
    name: String,
    model: String,
    year: Number,
    price: Number,
    description: [String],
    image: String,
  });

  // Create a model based on the schema
  const Car = mongoose.model('Car', carSchema);

  

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

// API route to fetch car data
app.get('/api/cars', (req, res) => {
    // Fetch car data from the database
    Car.find({})
      .then(cars => {
        res.json(cars);
      })
      .catch(error => {
        console.error('Error fetching car data:', error);
        res.status(500).json({ error: 'Error fetching car data' });
      });
  });
// Serve static files (e.g., React app) from a specific directory
app.use(express.static('public'));

// Start the server without MongoDB connection (for testing purposes)
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });