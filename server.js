const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const todos = require("./routes/todos");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB config
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected 👏🏻"))
  .catch(err => console.log(err));

// Use routes
app.use("/api/todos", todos);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
