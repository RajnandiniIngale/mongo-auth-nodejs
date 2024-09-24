const express = require("express");
const mongoose = require("mongoose");

const app = express();

const authRoutes = require("./routes/auth");
const protectedRoutes = require("./routes/protectedRoute");

app.use(express.json());


mongoose
  .connect("mongodb://admin:example@localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin" // Make sure you authenticate against the admin database
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error", err));


app.use("/auth", authRoutes);
app.use("/protected", protectedRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
