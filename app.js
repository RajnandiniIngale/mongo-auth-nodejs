const express = require("express");
const User = require("./models/user");
const app = express();

const PORT = 3000;

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error registering User: ", err);

    res.status(500).json({ message: "Error occurred while registering User" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid Email or Password" });
    }

    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }


    const token = jwt
  } catch (err) {}
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
