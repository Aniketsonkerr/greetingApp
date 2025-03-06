// Import required modules
import express from "express"; // Import Express framework
import dotenv from "dotenv"; // Import dotenv to load environment variables
import cors from "cors"; // Import CORS to allow cross-origin requests

// Load environment variables from a .env file
dotenv.config({
  path: "../.env", // Specifies the location of the .env file (Ensure this is correct)
});

const app = express(); // Create an Express application instance

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS to allow requests from different origins (important for frontend-backend communication)
app.use(cors());

// Define a GET endpoint for greeting
app.get("/api/greet", (req, res) => {
  const { name } = req.query; // Extract 'name' parameter from query string

  // Check if the name parameter is missing
  if (!name) {
    return res.status(400).json({ error: "Name is required." }); // Return an error if no name is provided
  }

  // Send a personalized greeting message
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Define the server port, using the environment variable or default to 3000
const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
