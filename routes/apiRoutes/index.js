// employing router
const router = require("express").Router();
const animalRoutes = require("../apiRoutes/animalRoutes");
// const zookeeperRoutes = require("../apiRoutes/zookeeperRoutes");

// having router use the module exported from animalRoutes
// doing it this way we're able to use apiRoutes/index.js as a central hub for all routing functions
router.use(animalRoutes);
// router.use(zookeeperRoutes);
router.use(require("./zookeeperRoutes"));

module.exports = router;
