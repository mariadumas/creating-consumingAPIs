const {Router} = require("express");

const router = Router();

const countriesController = require("../controllers/countriesController");



router.get("/", countriesController.list)


module.exports = router;

