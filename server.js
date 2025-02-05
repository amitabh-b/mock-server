const express = require("express");
const cors = require("cors");
const app = express();
const port = 3313;

app.use(cors());

app.get("/api/collection", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ]);
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
