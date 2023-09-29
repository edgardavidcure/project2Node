const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/comments");

router.get("/", commentsController.getAllComments);
router.get("/:id", commentsController.getSingleComment);
router.put("/:id", commentsController.updateSingleComment);
router.post("/", commentsController.addComment);
router.delete("/:id", commentsController.deleteSingleComment);
router.delete("/", commentsController.deleteAllComments);

module.exports = router;
