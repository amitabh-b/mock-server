const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3313;

app.use(cors());
app.get("/api/example", (req, res) => {
  res.json({ message: "This is a mock response" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
