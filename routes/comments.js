const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now
router.post("/createComment/:id", commentsController.createComment);

//the ':' tells the system it'l be a variable, it will change
//both variables will be passed into our comments controller
router.delete("/deleteComment/:postid/:commentid", commentsController.deleteComments);

module.exports = router;
