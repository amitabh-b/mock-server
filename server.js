const express = require("express");
const cors = require("cors");
const { PATH_TO_RESPONSE_MAP } = require("./pathToResponseMap");
const app = express();
const port = 3313;

app.use(cors());
app.use(express.json());

app.all("*", (req, res) => {
  setTimeout(() => {
    res.json(PATH_TO_RESPONSE_MAP[req.path]);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
