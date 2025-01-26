// Import required modules
const express = require("express");
const path = require("path");

// Initialize the Express app
const app = express();
const PORT = 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
