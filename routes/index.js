const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

const { catchErrors } = require("../handlers/errorHandlers");

// 'req' -> object full of information coming in
// 'res' -> data being sent back to the user
router.get("/", storeController.homePage);
router.get("/add", storeController.addStore);
router.post("/add", catchErrors(storeController.createStore));

module.exports = router;
