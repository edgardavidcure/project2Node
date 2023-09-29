const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getSingleUser);
router.put("/:id", usersController.updateSingleUser);
router.post("/", usersController.addUser);
router.delete("/:id", usersController.deleteSingleUser);
router.delete("/", usersController.deleteAllUsers);

module.exports = router;
