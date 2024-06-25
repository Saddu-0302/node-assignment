const router = require("express").Router()
const userController = require("./../controllers/user.controller")
router
    .post("/add-user", userController.addUser)
    .put("/update-user/:userId", userController.updateUser)
    .delete("/delete-user/:userId", userController.deleteUser)
    .get("/all-user", userController.getAllUser)
    .get("/user-details/:userId", userController.getUserDetails)
module.exports = router