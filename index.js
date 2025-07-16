const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const VALID_KEYS = ["umair123", "alpha999"];

app.post("/verify", (req, res) => {
  const { key } = req.body;
  if (VALID_KEYS.includes(key)) {
    return res.json({ valid: true });
  }
  res.status(403).json({ valid: false, message: "Invalid license key" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
