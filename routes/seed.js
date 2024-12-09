const router = require("express").Router();
const seedCtrl = require("../controllers/seed");

router.post("/seed", seedCtrl.seedData);
module.exports = router;
