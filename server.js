const express = require("express");
const { animals } = require("./data/animals");
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
// instantiate the server
// assign express to the app variable so that we can later chain on methods
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// provide a file path to a location in the application and instruct the server to make all these files static resources.
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listen
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
