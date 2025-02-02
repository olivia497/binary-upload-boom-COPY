const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const favouritesController = require("../controllers/favourites");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes
//Checks if the user is logged in to see the favourites page
router.get("/favourites", ensureAuth, favouritesController.getFavourites);

router.get("/favourites/:favouriteid", ensureAuth, favouritesController.getFavourites);

router.delete("/deleteFavourite/:favouriteid", favouritesController.deleteFavourites);

module.exports = router;