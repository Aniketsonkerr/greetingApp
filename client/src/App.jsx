import { useState } from "react"; // Import React's useState hook for state management
import "./App.css"; // Import CSS file for styling

function App() {
  // State to store user input (name)
  const [name, setName] = useState("");

  // State to store the greeting message from the API
  const [message, setMessage] = useState("");

  // Function to fetch greeting message from backend API
  const fetchGreeting = async () => {
    // Check if name input is empty
    if (!name) {
      setMessage("Please enter a name."); // Display error message if no name is provided
      return;
    }

    try {
      // Send a GET request to the backend API with the name as a query parameter
      const response = await fetch(
        `https://greetingapp-ri03.onrender.com/api/greet?name=${name}`
      );

      // Parse the JSON response from the API
      const data = await response.json();
      console.log(data); // Log response data to console for debugging

      // Update message state with API response message or error
      setMessage(data.message || data.error);

      // Clear the name input field after submitting
      setName("");
    } catch (error) {
      // Handle API request errors
      setMessage("Error fetching greeting.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Greeting API</h2>

      {/* Input field to enter name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)} // Update state on input change
      />

      {/* Button to trigger API request */}
      <button onClick={fetchGreeting}>Get Greeting</button>

      {/* Display the greeting message or error */}
      <p>{message}</p>
    </div>
  );
}

export default App;
