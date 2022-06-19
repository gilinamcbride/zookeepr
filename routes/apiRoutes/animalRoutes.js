// call back fx to get information using the URL
const {
  filterByQuery,
  findById,
  createNewAnimal,
  validateAnimal,
} = require("../../lib/animals");
const { animals } = require("../../data/animals");

const router = require("express").Router();

router.get("/animals", (req, res) => {
  let results = animals;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(results);
});

// call back fx to get information using the URL
router.get("/animals/:id", (req, res) => {
  const result = findById(req.params.id, animals);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// call back fx to give data to the server
// package up the data as an obj and send to the server - req.body property is where we can access that data on the server side and do something with it
router.post("/animals", (req, res) => {
  //req.body is where our incoming content will be
  // set id based on what the next index of the array will be
  req.body.id = animals.length.toString();
  // add animal to json file and animals array in this function
  // if any data in req.body is incorrect, send 400 error back
  if (!validateAnimal(req.body)) {
    res.status(400).send("The animal is not properly formatted.");
  } else {
    const animal = createNewAnimal(req.body, animals);
    res.json(animal);
  }
});

module.exports = router;
