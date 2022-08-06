const router = require("express").Router();
const path = require("path");

// route to server.js - creates a homepage for the server
// only one job to do: respond with an html page to display in the browser
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/animals.html"));
});

router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/zookeepers.html"));
});

// wildcard route - any path that isn't defined will fall here and recieve the homepage as the response
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
